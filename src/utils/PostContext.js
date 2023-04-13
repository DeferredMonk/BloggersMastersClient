import { createContext, useEffect, useState } from "react"
import { getAllPosts, getAllPostsOfUser } from "./Services/PostService"
import keycloak from "../keycloak"
import { CreateNewUser, getUserByIdOrUsername } from "./Services/UserService"

const PostsContext = createContext()

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState()
  const [currUser, setCurrUser] = useState()
  const [currUserPosts, setCurrUserPosts] = useState()

  const setUser = async (user) => {
    try {
      const newUser = await CreateNewUser(user)
      setCurrUser(newUser)
      setCurrUserPosts(await getAllPostsOfUser(newUser.id))
    } catch (e) {
      try {
        const oldUser = await getUserByIdOrUsername(user.username)
        setCurrUser(oldUser)
        setCurrUserPosts(await getAllPostsOfUser(oldUser.id))
      } catch (e) {
        console.log(e.message)
      }
    }
  }
  /**
   * Adds and filters the modified post
   *  and updates the posts state
   */
  const modifyPost = async (post) => {
    const postToModify = await post
    const newPosts = [
      ...posts.filter((p) => p.id !== postToModify.id),
      postToModify,
    ]
    newPosts.sort((a, b) => a.id - b.id)
    setPosts(newPosts)
    if (currUser.username === post.user.username) {
      const newUserPosts = [
        ...currUserPosts.filter((p) => p.id !== postToModify.id),
        postToModify,
      ]
      newUserPosts.sort((a, b) => a.id - b.id)
      setCurrUserPosts(newUserPosts)
    }
  }
  useEffect(() => {
    if (keycloak.authenticated) {
      const { given_name, family_name, preferred_username } =
        keycloak.tokenParsed !== undefined && keycloak.tokenParsed
      setUser({
        firstName: given_name,
        lastName: family_name,
        username: preferred_username,
      })
    }
  }, [keycloak.authenticated])

  /**
   * Gets Posts from the database on page startup
   */
  useEffect(() => {
    const allPosts = async () => {
      const postss = await getAllPosts()
      setPosts(postss)
    }
    allPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{ posts, modifyPost, currUser, currUserPosts }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export default PostsContext

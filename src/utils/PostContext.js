import { createContext, useEffect, useState } from "react"
import { getAllPosts } from "./Services/PostService"

const PostsContext = createContext()

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState()

  const modifyPost = async (post) => {
    const postToModify = await post
    const removedPost = posts.filter((p) => p.id !== postToModify.id)
    const newPostList = [...removedPost, postToModify]
    const test = newPostList
    console.log(test)
    setPosts(test)
  }
  useEffect(() => {
    const allPosts = async () => {
      const postss = await getAllPosts()
      setPosts(postss)
    }
    allPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, modifyPost }}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsContext

import { createContext, useEffect, useState } from "react"
import { getAllPosts } from "./Services/PostService"

const PostsContext = createContext()

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState()

  const modifyPost = async (post) => {
    const postToModify = await post
    const newPosts = [
      ...posts.filter((p) => p.id !== postToModify.id),
      postToModify,
    ]
    newPosts.sort((a, b) => a.id - b.id)
    setPosts(newPosts)
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

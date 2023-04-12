import axios from "axios"

/**
 * Gets all public posts from the database
 * @returns {promise {array}} Array of posts
 */
export const getAllPosts = async () => {
  try {
    const res = await axios.get("https://localhost:7097/api/post")
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}

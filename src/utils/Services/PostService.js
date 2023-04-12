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
/**
 * Adds one to likes
 * @returns {promise {array}} the new value of liked
 */
export const addOneToLike = async (agrees, id) => {
  try {
    const res = await axios.patch(`https://localhost:7097/api/post/${id}`, [
      {
        path: "Agrees",
        op: "replace",
        value: agrees + 1,
      },
    ])
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}
/**
 * Adds one to likes
 * @returns {promise {array}} the new value of liked
 */
export const addOneToDislike = async (disagrees, id) => {
  try {
    const res = await axios.patch(`https://localhost:7097/api/post/${id}`, [
      {
        path: "Disagrees",
        op: "replace",
        value: disagrees + 1,
      },
    ])
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}

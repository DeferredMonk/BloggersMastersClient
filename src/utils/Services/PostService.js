import axios from "axios"
import keycloak from "../../keycloak"

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
 * Gets all users posts from the database
 * @returns {promise {array}} Array of posts
 */
export const getAllPostsOfUser = async (id) => {
  try {
    const res = await axios.get(`https://localhost:7097/api/post/user/${id}`, {
      headers: { Authorization: `bearer ${keycloak.token}` },
    })
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
    const res = await axios.patch(
      `https://localhost:7097/api/post/${id}?target=likes`,
      [
        {
          path: "Agrees",
          op: "replace",
          value: agrees + 1,
        },
      ]
    )
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
    const res = await axios.patch(
      `https://localhost:7097/api/post/${id}?target=likes`,
      [
        {
          path: "Disagrees",
          op: "replace",
          value: disagrees + 1,
        },
      ]
    )
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}
/**
 * Modifies resource
 * @returns {promise {array}} modified resource
 */
export const modifyPostById = async (data, id) => {
  try {
    const res = await axios.patch(
      `https://localhost:7097/api/post/${id}?target=none`,
      data
    )
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}
/**
 * Create a new post
 * @returns {promise {array}} new resource
 */
export const createPost = async (post) => {
  try {
    const res = await axios.post(`https://localhost:7097/api/post/`, post)
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}

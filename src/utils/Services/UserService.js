import axios from "axios"

/**
 * Gets all users from the database
 * @returns {promise {array}} Array of users
 */
export const getAllUsers = async () => {
  try {
    const res = await axios.get("https://localhost:7097/api/user")
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}
/**
 * Creates a new user
 * @param {object} user the user to create
 * @returns {promise{object}} an object of the created user
 */
export const CreateNewUser = async (user) => {
  try {
    const res = await axios.post("https://localhost:7097/api/user", user)
    return await res.data
  } catch (e) {
    throw e
  }
}
/**
 * Return a user from the database based on usernmae or id
 * @param {string} username the username wanted if search by id intended leave an empty string
 * @param {int} id the id wanted, if searching by username this field can be left empty or id must be set to zero
 * @returns {promise{object}} object of searched user
 */
export const getUserByIdOrUsername = async (username, id = 0) => {
  try {
    username = username === "" ? "none" : username
    const res = await axios.get(
      `https://localhost:7097/api/user/${id}?username=${username}`
    )
    return await res.data
  } catch (e) {
    console.log(e.message)
  }
}

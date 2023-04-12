import { Box } from "@mui/system"
import React, { useContext } from "react"
import Post from "../common/post/Post"
import PostsContext from "../../utils/PostContext"

const LandingPage = () => {
  const { posts } = useContext(PostsContext)

  return (
    <Box
      sx={{
        margin: "2%",
        columnCount: "3",
      }}
    >
      {posts?.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </Box>
  )
}

export default LandingPage

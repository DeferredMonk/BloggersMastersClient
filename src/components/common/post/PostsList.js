import { Box } from "@mui/material"
import React from "react"
import Post from "./Post"

const PostsList = ({ posts }) => {
  return (
    <Box
      sx={{
        marginTop: "2%",
        columnCount: "3",
      }}
    >
      {posts?.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </Box>
  )
}

export default PostsList

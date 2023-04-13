import React, { useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import { Box, CardActions, IconButton } from "@mui/material"
import PostModifyDialog from "./PostModifyDialog"

const PostModifyButton = ({ post }) => {
  const [edit, setEdit] = useState()
  return (
    <CardActions>
      <IconButton onClick={() => setEdit(true)}>
        <EditIcon />
      </IconButton>
      <PostModifyDialog edit={edit} setEdit={setEdit} post={post} />
    </CardActions>
  )
}

export default PostModifyButton

import { IconButton, Tooltip } from "@mui/material"
import React, { useState } from "react"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import keycloak from "../../../keycloak"
import PostCreateDialog from "../post/PostCreateDialog"

const CreateNewPostButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {keycloak.authenticated && (
        <Tooltip title="Create a new post">
          <IconButton onClick={() => setOpen(true)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      )}
      <PostCreateDialog open={open} setOpen={setOpen} />
    </>
  )
}

export default CreateNewPostButton

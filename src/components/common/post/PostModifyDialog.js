import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material"
import React, { useContext, useRef, useState } from "react"
import PostHeader from "./PostHeader"
import { modifyPostById } from "../../../utils/Services/PostService"
import PostsContext from "../../../utils/PostContext"

const PostModifyDialog = ({ edit, setEdit, post }) => {
  const { modifyPost } = useContext(PostsContext)
  const [title, setTitle] = useState({
    path: "Title",
    op: "replace",
    value: "",
  })
  const [content, setContent] = useState({
    path: "Content",
    op: "replace",
    value: "",
  })
  const [error, setError] = useState({
    title: {
      error: false,
      message: "Invalid input",
    },
    content: {
      error: false,
      message: "Invalid input",
    },
  })

  const handleClose = () => {
    setTitle({ ...title, value: "" })
    setContent({ ...content, value: "" })
    setEdit(false)
    setError({
      title: {
        error: false,
        message: "Invalid input",
      },
      content: {
        error: false,
        message: "Invalid input",
      },
    })
  }

  const handleModifyArray = (objA, objB) =>
    [objA, objB].filter((o) => o.value !== "")

  const handleModify = async () => {
    await modifyPost(
      await modifyPostById(handleModifyArray(title, content), post.id)
    )
    handleClose()
  }
  return (
    <Dialog open={edit} onClose={handleClose} sx={style}>
      <DialogTitle sx={{ padding: 0 }}>
        <PostHeader post={post} modify={false} />
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          required
          error={error.title.error}
          helperText={error.title.error && error.title.message}
          label="Title"
          defaultValue={post.title}
          onChange={(e) => {
            if (e.target.value === "") {
              setError({
                ...error,
                title: { error: true, message: "Invalid input" },
              })
            } else {
              setError({
                ...error,
                title: { error: false },
              })
            }
            setTitle({ ...title, value: e.target.value })
          }}
          sx={{ marginTop: "30px" }}
        />
        <TextField
          defaultValue={post.content}
          multiline
          error={error.content.error}
          helperText={error.content.error && error.content.message}
          required
          label="Content"
          sx={{ marginTop: "10px" }}
          onChange={(e) => {
            if (e.target.value === "") {
              setError({
                ...error,
                content: { error: true, message: "Invalid input" },
              })
            } else {
              setError({
                ...error,
                content: { error: false },
              })
            }
            setContent({ ...content, value: e.target.value })
          }}
          fullWidth
          minRows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleModify}
          disabled={error.content.error || error.title.error}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const style = {}

export default PostModifyDialog

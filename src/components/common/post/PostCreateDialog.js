import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import PostsContext from "../../../utils/PostContext";
import { createPost } from "../../../utils/Services/PostService";

const PostCreateDialog = ({ open, setOpen }) => {
  const { modifyPost, currUser } = useContext(PostsContext);
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    publicPost: false,
    userId: currUser?.id,
  });
  const [error, setError] = useState({
    title: {
      error: false,
      message: "Invalid input",
    },
    content: {
      error: false,
      message: "Invalid input",
    },
  });

  const handleClose = () => {
    setNewPost({
      title: "",
      content: "",
      publicPost: false,
    });
    setOpen(false);
    setError({
      title: {
        error: false,
        message: "Invalid input",
      },
      content: {
        error: false,
        message: "Invalid input",
      },
    });
    setLoading(false);
  };

  const handleCreate = async () => {
    setLoading(true);
    setNewPost({ ...newPost, userId: currUser.id });
    await modifyPost(await createPost(newPost));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center" }}>Create a new post!</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          required
          error={error.title.error}
          helperText={error.title.error && error.title.message}
          label="Title"
          onChange={(e) => {
            if (e.target.value === "") {
              setError({
                ...error,
                title: { error: true, message: "Invalid input" },
              });
            } else {
              setError({
                ...error,
                title: { error: false },
              });
            }
            setNewPost({
              ...newPost,
              title: e.target.value,
              userId: currUser?.id,
            });
          }}
          sx={{ marginTop: "5px" }}
        />
        <TextField
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
              });
            } else {
              setError({
                ...error,
                content: { error: false },
              });
            }
            setNewPost({
              ...newPost,
              content: e.target.value,
              userId: currUser?.id,
            });
          }}
          fullWidth
          minRows={4}
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  publicPost: e.target.checked,
                  userId: currUser?.id,
                })
              }
            />
          }
          label="Published"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleCreate}
          disabled={
            error.content.error ||
            error.title.error ||
            newPost.title === "" ||
            newPost.content === "" ||
            loading
          }
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostCreateDialog;

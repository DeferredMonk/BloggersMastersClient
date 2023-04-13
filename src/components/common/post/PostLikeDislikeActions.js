import { Alert, Button, CardActions, Tooltip, Typography } from "@mui/material"
import React, { useContext, useState } from "react"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt"
import {
  addOneToDislike,
  addOneToLike,
} from "../../../utils/Services/PostService"
import PostsContext from "../../../utils/PostContext"

const PostLikeDislikeActions = ({ post }) => {
  const [loading, setLoading] = useState({
    like: false,
    dislike: false,
  })
  const { modifyPost } = useContext(PostsContext)
  /**
   * Handles like and dislike buttons.
   * Adds one to witch one is pressed
   * @param {string} type button type as string (like/dislike)
   */
  const handleClick = async (type) => {
    try {
      if (type === "like") {
        setLoading({ ...loading, like: true })
        modifyPost(await addOneToLike(post.agrees, post.id))
        setLoading({ ...loading, like: false })
      } else {
        setLoading({ ...loading, dislike: true })
        modifyPost(await addOneToDislike(post.disagrees, post.id))
        setLoading({ ...loading, dislike: false })
      }
    } catch (e) {
      Alert(e.message)
    }
  }
  return (
    <CardActions>
      <Tooltip title="Like">
        <Button
          color="primary"
          variant="contained"
          disabled={loading.like}
          endIcon={<ThumbUpOffAltIcon />}
          onClick={() => handleClick("like")}
        >
          <Typography>{post.agrees}</Typography>
        </Button>
      </Tooltip>
      <Tooltip title="Dislike">
        <Button
          color="error"
          variant="outlined"
          disabled={loading.dislike}
          endIcon={<ThumbDownOffAltIcon />}
          onClick={() => handleClick()}
        >
          <Typography>{post.disagrees}</Typography>
        </Button>
      </Tooltip>
    </CardActions>
  )
}

export default PostLikeDislikeActions

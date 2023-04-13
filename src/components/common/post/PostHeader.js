import {
  Avatar,
  CardActions,
  CardHeader,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material"
import React, { useContext } from "react"
import { dateToFinnishFormat } from "../../../utils/Helpers"
import { Box } from "@mui/system"
import PostLikeDislikeActions from "./PostLikeDislikeActions"
import PostsContext from "../../../utils/PostContext"
import PostModify from "./PostModifyButton"

const PostHeader = ({ post, modify = true }) => {
  const { currUser } = useContext(PostsContext)
  const user = post.user
  const created = dateToFinnishFormat(new Date(post.createdAt))

  const currUserPost = currUser?.username === user.username

  return (
    <Box sx={styleHeader}>
      <CardHeader
        avatar={<Avatar sx={styleAvatar}>{user.firstName[0]}</Avatar>}
        title={`${user.firstName} ${user.lastName}`}
        subheader={created}
      />
      {!currUserPost ? (
        <PostLikeDislikeActions post={post} />
      ) : (
        <>{modify && <PostModify post={post} />}</>
      )}
    </Box>
  )
}

const styleHeader = {
  backgroundColor: "rgb(255, 207, 231)",
  display: "flex",
  justifyContent: "space-between",
}
const styleAvatar = {
  backgroundColor: "white",
  color: "black",
  boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.75)",
}

export default PostHeader

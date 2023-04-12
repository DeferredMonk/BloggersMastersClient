import {
  Avatar,
  CardActions,
  CardHeader,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material"
import React from "react"
import { dateToFinnishFormat } from "../../../utils/Helpers"
import { Box } from "@mui/system"
import PostLikeDislikeActions from "./PostLikeDislikeActions"

const PostHeader = ({ post }) => {
  const user = post.user
  const created = dateToFinnishFormat(new Date(post.createdAt))
  return (
    <Box sx={styleHeader}>
      <CardHeader
        avatar={<Avatar sx={styleAvatar}>{user.firstName[0]}</Avatar>}
        title={`${user.firstName} ${user.lastName}`}
        subheader={created}
      />
      <PostLikeDislikeActions post={post} />
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

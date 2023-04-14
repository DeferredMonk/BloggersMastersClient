import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material"
import React from "react"
import PostHeader from "./PostHeader"
import { dateToFinnishFormat } from "../../../utils/Helpers"

const PostView = ({ post, setEdit }) => {
  const modifiedDate =
    post.modifiedAt &&
    `Updated ${dateToFinnishFormat(new Date(post.modifiedAt))}`
  return (
    <Card sx={style}>
      <CardHeader
        title={post.title}
        subheader={<Typography variant="subtitle2">{modifiedDate}</Typography>}
      />
      <Divider />
      <CardContent
        sx={{
          maxHeight: "400px",
          overflow: "auto",
          overflowWrap: "break-word",
        }}
      >
        <Typography>{post.content}</Typography>
      </CardContent>
      <Divider />
      <PostHeader post={post} setEdit={setEdit} />
    </Card>
  )
}

const style = {
  maxWidth: "500px",
  maxHeight: "600px",
  height: "fit-content",
  width: "100%",
  marginBottom: "20px",
}

export default PostView

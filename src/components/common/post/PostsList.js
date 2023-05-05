import { Box, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import PostView from "./PostView";
import PostsContext from "../../../utils/PostContext";

const PostsList = ({ posts }) => {
  const { minWidth } = useContext(PostsContext);
  console.log(minWidth)
  return (
    <>
      {posts === undefined ? (
        <CircularProgress sx={{ marginTop: "2%" }} />
      ) : (
        
        <Box
          sx={
            minWidth ? {
            marginTop: "2%",
            columnCount: "3",
          } : {marginTop: "2%"}}
        >
          {posts?.map((p, i) => (
            <PostView key={i} post={p} />
          ))}
        </Box>
      )}
    </>
  );
};

export default PostsList;

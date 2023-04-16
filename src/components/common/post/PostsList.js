import { Box, CircularProgress } from "@mui/material";
import React from "react";
import PostView from "./PostView";

const PostsList = ({ posts }) => {
  return (
    <>
      {posts === undefined ? (
        <CircularProgress sx={{ marginTop: "2%" }} />
      ) : (
        <Box
          sx={{
            marginTop: "2%",
            columnCount: "3",
          }}
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

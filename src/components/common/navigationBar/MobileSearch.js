import React, { useContext } from "react";
import { TextField, Tooltip, IconButton } from "@mui/material";
import PostsContext from "../../../utils/PostContext";

const MobileSearch = () => {
  const { minWidth, searchEngine } = useContext(PostsContext);

  return (
    <div>
      {!minWidth && (
        <TextField
          size="small"
          placeholder="search"
          fullWidth
          sx={{ mt: "2%" }}
          onChange={(e) => searchEngine(e.target.value)}
        />
      )}
    </div>
  );
};

export default MobileSearch;

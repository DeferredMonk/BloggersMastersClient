import React, { useContext } from "react";
import { TextField, Tooltip, IconButton } from "@mui/material";
import PostsContext from "../../../utils/PostContext";

const Search = () => {
  const { minWidth, searchEngine } = useContext(PostsContext);

  return (
    <div>
      {minWidth && (
        <TextField
          size="small"
          placeholder="Search"
          onChange={(e) => searchEngine(e.target.value)}
        />
      )}
    </div>
  );
};

export default Search;

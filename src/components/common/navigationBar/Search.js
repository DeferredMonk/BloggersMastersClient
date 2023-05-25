import React, { useContext } from "react";
import { TextField, Tooltip, IconButton } from "@mui/material";
import PostsContext from "../../../utils/PostContext";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const { minWidth, searchEngine } = useContext(PostsContext);
  const tempList = ["asd", "dfpjsfs", "aspojfds"];

  return (
    <div>
      {minWidth ? (
        <TextField
          size="small"
          placeholder="Search"
          onChange={(e) => console.log(searchEngine(e.target.value))}
        />
      ) : (
        <Tooltip title="Search">
          <IconButton onClick={(e) => console.log()}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default Search;

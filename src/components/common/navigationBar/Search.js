import React, {useContext} from 'react'
import {TextField, Tooltip, IconButton} from '@mui/material'
import PostsContext from '../../../utils/PostContext';
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
      const { minWidth } = useContext(PostsContext);

  return (
    <div>
      {minWidth ? (
        <TextField size="small" placeholder="Search" />
      ) : (
        <Tooltip title="Search">
          <IconButton onClick={() => console.log("search")}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
}

export default Search
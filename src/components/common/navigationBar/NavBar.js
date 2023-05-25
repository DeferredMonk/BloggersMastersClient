import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"
import SignButton from "./SignButton"
import CreateNewPostButton from "./CreateNewPostButton"
import Search from "./Search"

const NavBar = () => {
  return (
    <Container maxWidth={false}>
      <Box sx={style}>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          BloggersMasters
        </Typography>
        <Search />
        <CreateNewPostButton />
        <SignButton />
      </Box>
      <Divider />
    </Container>
  )
}

const style = {
  display: "flex",
  margin: "1%",
  justifyContent: "center",
}

export default NavBar

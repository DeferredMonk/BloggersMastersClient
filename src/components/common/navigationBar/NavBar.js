import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material"
import React from "react"
import SignButton from "./SignButton"
import CreateNewPostButton from "./CreateNewPostButton"

const NavBar = () => {
  return (
    <Container maxWidth={false}>
      <Box sx={style}>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          BloggersMasters
        </Typography>
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

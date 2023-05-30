import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SignButton from "./SignButton";
import CreateNewPostButton from "./CreateNewPostButton";
import NavBarSearch from "./NavBarSearch";
import MobileSearch from "./MobileSearch";

const NavBar = () => {
  return (
    <Container maxWidth={false}>
      <Box sx={style}>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          BloggersMasters
        </Typography>
        <NavBarSearch />
        <CreateNewPostButton />
        <SignButton />
      </Box>
      <Divider />
      <MobileSearch />
    </Container>
  );
};

const style = {
  display: "flex",
  margin: "1%",
  justifyContent: "center",
};

export default NavBar;

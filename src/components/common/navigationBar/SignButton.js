import React from "react"
import { IconButton } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import keycloak from "../../../keycloak"

const SignButton = () => {
  return (
    <>
      {keycloak.authenticated ? (
        <IconButton onClick={() => keycloak.logout()}>
          <LogoutIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => keycloak.login()}>
          <LoginIcon />
        </IconButton>
      )}
    </>
  )
}

export default SignButton

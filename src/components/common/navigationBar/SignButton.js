import React from "react"
import { IconButton, Tooltip } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import keycloak from "../../../keycloak"

const SignButton = () => {
  return (
    <>
      {keycloak.authenticated ? (
        <Tooltip title="Sign out">
          <IconButton onClick={() => keycloak.logout()}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Sign in">
          <IconButton onClick={() => keycloak.login()}>
            <LoginIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  )
}

export default SignButton

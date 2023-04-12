import { Container, ThemeProvider } from "@mui/material"
import NavBar from "./components/common/navigationBar/NavBar"
import keycloak from "./keycloak"
import { theme } from "./utils/theme/Theme"
import Post from "./components/common/post/Post"
import { Box } from "@mui/system"
import PostsContext from "./utils/PostContext"
import { useContext } from "react"
import { PostProvider } from "./utils/PostContext"
import LandingPage from "./components/pages/LandingPage"

function App() {
  console.log(keycloak.token)

  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <NavBar />
        <PostProvider>
          <LandingPage />
        </PostProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App

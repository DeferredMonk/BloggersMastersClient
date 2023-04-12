import { Container, ThemeProvider } from "@mui/material"
import NavBar from "./components/common/navigationBar/NavBar"
import keycloak from "./keycloak"
import { theme } from "./utils/theme/Theme"
import { getAllPosts } from "./utils/theme/Services/PostService"
import { useEffect, useState } from "react"

function App() {
  console.log(keycloak.token)
  const [posts, setPosts] = useState()

  useEffect(() => {
    const allPosts = async () => {
      setPosts(await getAllPosts())
    }
    allPosts()
  }, [])
  console.log(posts)
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <NavBar />
      </Container>
    </ThemeProvider>
  )
}

export default App

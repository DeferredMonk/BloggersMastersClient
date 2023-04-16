import { Container, ThemeProvider } from "@mui/material";
import NavBar from "./components/common/navigationBar/NavBar";
import { theme } from "./utils/theme/Theme";
import { PostProvider } from "./utils/PostContext";
import LandingPage from "./components/pages/LandingPage";
import keycloak from "./keycloak";

function App() {
  console.log();
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <PostProvider>
          <NavBar />
          <LandingPage />
        </PostProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

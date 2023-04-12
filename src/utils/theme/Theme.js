import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(105,5,58,0.83)",
    },
    secondary: {
      main: "rgba(247,133,156,0.65)",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontFamily: "Amatic SC",
      fontWeight: 700,
    },
    button: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.3,
      letterSpacing: "0.15em",
    },
  },
})

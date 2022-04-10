import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#86FC4D",
      light: "#FFF",
    },
    secondary: {
      main: "#C34DFC",
    },
    background: {
      default: "#031219",
    },
    text: {
      primary: "#000",
    },
  },
})

export default theme

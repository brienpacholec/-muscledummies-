import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#86FC4D",
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
  typography: {
    fontFamily: "Gagalin",
  },
})

theme.typography.h1 = {
  fontFamily: "Gagalin",
  "@media (max-width:900px)": {
    fontSize: "2.5rem",
  },
  "@media (max-width:600px)": {
    fontSize: "2rem",
  },
  "@media (max-width:400px)": {
    fontSize: "1.5rem",
  },

  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2.4rem',
  // },
}

export default theme

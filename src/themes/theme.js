import { createTheme } from "@mui/material/styles"
// import Gagalin from '../fonts/TTF/gagalin.ttf';

// const defaultTheme = createTheme({})
// const { breakpoints, typography: { pxToRem } } = defaultTheme

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffc246",
      main: "#ff9100",
      dark: "#c56200",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#8b6b61",
      main: "#5d4037",
      dark: "#321911",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Gagalin",
  },
})

export default theme

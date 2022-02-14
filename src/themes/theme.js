import { createTheme } from "@mui/material/styles"
// import Gagalin from '../fonts/TTF/gagalin.ttf';

// const defaultTheme = createTheme({})
// const { breakpoints, typography: { pxToRem } } = defaultTheme

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#005B71",
    },
    secondary: {
      main: "#079395",
    },
    background: {
      default: "#031219",
      paper: "#fffcfc",
    },
    text: {
      primary: "rgba(170,31,31,0.87)",
    },
  },
  typography: {
    fontFamily: "Gagalin",
  },
})

// theme.typography.h3 = {
//   fontFamily: "Gagalin",
//   fontSize: '1.6rem',
//   '@media (min-width:600px)': {
//     fontSize: '2rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

export default theme

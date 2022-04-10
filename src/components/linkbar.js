import React from "react"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import { loadCSS } from "fg-loadcss"

const Linkbar = () => {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    )

    return () => {
      node.parentNode.removeChild(node)
    }
  }, [])

  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: 5,
        borderColor: "#000",
        background:
          "linear-gradient(0deg, rgba(3,18,25,1) 0%, rgba(88,204,32,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                fontFamily: "Gagalin",
                color: "#fff",
              }}
            >
              © {new Date().getFullYear()}, Muscle Dummies
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Linkbar

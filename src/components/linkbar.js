import * as React from "react"
import { loadCSS } from "fg-loadcss"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Icon from "@mui/material/Icon"

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
            <IconButton
              aria-label="Instagram"
              aria-controls="Link to Instagram"
              aria-haspopup="false"
              color="inherit"
              href="https://www.instagram.com/muscledummiesnft/"
            >
              <Icon
                className=" fab fa-instagram"
                sx={{
                  fontSize: { xs: 30, md: 45 },
                  width: "fit-content",
                  marginX: 2,
                  color: "#FFF"
                }}
              />
            </IconButton>

            <IconButton
              aria-label="Twitter"
              aria-controls="Link to Twitter"
              aria-haspopup="false"
              color="inherit"
              href="https://twitter.com/muscledummynft"
            >
              <Icon
                className=" fab fa-twitter"
                sx={{
                  fontSize: { xs: 30, md: 45 },
                  width: "fit-content",
                  marginX: 2,
                  color: "#FFF"
                }}
              />
            </IconButton>

            <IconButton
              aria-label="Discord"
              aria-controls="Link to Discord"
              aria-haspopup="false"
              color="inherit"
              href="https://discord.gg/CCyjkz8S6m"
            >
              <Icon
                className=" fab fa-discord"
                sx={{
                  fontSize: { xs: 30, md: 45 },
                  width: "fit-content",
                  marginX: 2,
                  color: "#FFF"
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Linkbar

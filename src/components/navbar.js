import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import { StaticImage } from "gatsby-plugin-image"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Grid from "@mui/material/Grid"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const pages = [
  "Home",
  "What is Muscle Dummies",
  "Instant Utility",
  "Roadmap",
  "The Team",
  "Faqs",
]

const settings = ["Profile", "Account", "Dashboard", "Logout"]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppBar
      data-aos="fade-down"
      sx={{
        backgroundColor: "rgba(0,0,0,0.85)",
        paddingY: { xs: 1, md: 4 },
        position: { xs: "static", md: "sticky" },
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid container spacing={0}>
              <Grid item md={6}>
                <Box
                  sx={{
                    height: 2,
                    backgroundColor: "#FFF",
                    marginX: 8,
                  }}
                ></Box>
              </Grid>

              <Grid item md={6}>
                <Box
                  sx={{
                    height: 2,
                    backgroundColor: "#FFF",
                    marginX: 8,
                  }}
                ></Box>
              </Grid>

              <Grid
                item
                md={5.75}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  textAlign: "center",
                  color: "#FFF",
                  alignItems: "center",
                }}
              >
                <AnchorLink to="#home" title="Home" className="anchor-link">
                  <Typography>Home</Typography>
                </AnchorLink>
                
                <AnchorLink to="#about" title="What is it?" className="anchor-link">
                  <Typography>What is it?</Typography>
                </AnchorLink>

                <AnchorLink to="#utility" title="Instant Utility" className="anchor-link">
                  <Typography>Instant Utility</Typography>
                </AnchorLink>
              </Grid>
              <Grid
                item
                md={0.5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StaticImage
                  src="../images/shakerLogo.png"
                  alt="Muscle Shaker"
                  placeholder="blurred"
                  layout="fixed"
                  width={75}
                  height={75}
                />
              </Grid>
              <Grid
                item
                md={5.75}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  textAlign: "center",
                  color: "#FFF",
                  alignItems: "center",
                  maxHeight: 75,
                }}
              >
                <AnchorLink to="#roadmap" title="Roadmap" className="anchor-link">
                <Typography>Roadmap</Typography>
                </AnchorLink>

                <AnchorLink to="#team" title="The Team" className="anchor-link">
                <Typography>The Team</Typography>
                </AnchorLink>

                <AnchorLink to="#faqs" title="Faqs" className="anchor-link">
                <Typography>Faqs</Typography>
                </AnchorLink>

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    paddingX: 2,
                    marginY: 3,
                    color: "text.primary",
                    flex: "right",
                    border: 4,
                    borderColor: "#FFF",
                    background:
                      "linear-gradient(0deg, rgba(134, 252, 77, 1) 0%, rgba(78, 162, 38, 1) 8%, rgba(140, 235, 94, 1) 100%)",
                  }}
                  href="https://www.google.com"
                >
                  <Typography>Click here to mint</Typography>
                </Button>
              </Grid>

              <Grid item md={6}>
                <Box
                  sx={{
                    height: 2,
                    backgroundColor: "#FFF",
                    marginX: 5,
                  }}
                ></Box>
              </Grid>

              <Grid item md={6}>
                <Box
                  sx={{
                    height: 2,
                    backgroundColor: "#FFF",
                    marginX: 5,
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <StaticImage
              src="../images/sand.png"
              alt="Muscle Shaker"
              placeholder="blurred"
              layout="fixed"
              width={75}
              height={75}
            />

            <div>
              <Button
                variant="contained"
                sx={{
                  borderRadius: { xs: 5, sm: 10 },
                  paddingX: 2,
                  marginY: { xs: 0, sm: 3 },
                  color: "text",
                  flex: "right",
                  border: 1,
                  borderColor: "#FFF",
                  background:
                    "linear-gradient(0deg, rgba(134, 252, 77, 1) 0%, rgba(78, 162, 38, 1) 8%, rgba(140, 235, 94, 1) 100%)",
                }}
                href="https://www.google.com"
                endIcon={<ShoppingCartIcon />}
              >
                <Typography>Buy on OpenSea</Typography>
              </Button>
            </div>
          </Box>

          {/* 
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

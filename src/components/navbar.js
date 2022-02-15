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
        backgroundColor: "#000",
        paddingTop: {xs: 0, md: 4},
        position: { xs: "sticky", md: "sticky" },
        border: {xs: "1px solid white", md: "none"}
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
                <Typography>HOME</Typography>

                <Typography>What is it?</Typography>

                <Typography>Instant Utility</Typography>
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
                <Typography>Roadmap</Typography>

                <Typography>The Team</Typography>

                <Typography>Faqs</Typography>

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
                  <Typography variantMapping="">Click here to mint</Typography>
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: 'center'}}>
            <StaticImage
              src="../images/keeper.png"
              alt="Muscle Shaker"
              placeholder="blurred"
              layout="fixed"
              width={100}
              height={100}
            />

            <div>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: {xs: 5, sm: 10},
                  paddingX: {xs: 2, sm: 2},
                  marginY: {xs: 0, sm: 3},
                  backgroundColor: "",
                  flex: "right",
                }}
                href="https://www.google.com"
              >
                <Typography sx={{display: {xs: 'none', sm: 'inherit'}}}>Buy on OpenSea</Typography>
                <ShoppingCartIcon/>
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

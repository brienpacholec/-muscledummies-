import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { StaticImage } from "gatsby-plugin-image"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Grid from "@mui/material/Grid"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = () => {
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
                    marginX: 10,
                  }}
                ></Box>
              </Grid>

              <Grid item md={6}>
                <Box
                  sx={{
                    height: 2,
                    backgroundColor: "#FFF",
                    marginX: 10,
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
                  maxHeight: 75,
                }}
              >
                <AnchorLink 
                  to="#home" 
                  title="Home" 
                  className="anchor-link" 
                >
                  <Typography sx={{ fontFamily: "Cooper Hewitt" }}>
                    Home
                  </Typography>
                </AnchorLink>

                <AnchorLink
                  to="#about"
                  title="What is it?"
                  className="anchor-link"
                >
                  <Typography sx={{ fontFamily: "Cooper Hewitt" }}>
                    About
                  </Typography>
                </AnchorLink>

                <AnchorLink
                  to="#utility"
                  title="Instant Utility"
                  className="anchor-link"
                >
                  <Typography sx={{ fontFamily: "Cooper Hewitt" }}>
                    Instant Utility
                  </Typography>
                </AnchorLink>
              </Grid>

              <Grid
                item
                md={0.5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  maxHeight: 75,
                }}
              >
                <StaticImage
                  className="shake"
                  src="../images/logos/md_nft_shaker.png"
                  alt="Muscle Shaker"
                  placeholder="blurred"
                  layout="constrained"
                  height={75}
                  width={50}
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
                <AnchorLink
                  to="#roadmap"
                  title="Roadmap"
                  className="anchor-link"
                >
                  <Typography sx={{ fontFamily: "Cooper Hewitt" }}>
                    Roadmap
                  </Typography>
                </AnchorLink>

                <AnchorLink 
                  to="#team" 
                  title="The Team" 
                  className="anchor-link"
                >
                  <Typography sx={{ fontFamily: "Cooper Hewitt" }}>
                    The Team
                  </Typography>
                </AnchorLink>

                <AnchorLink 
                  to="#faq" 
                  title="Faqs" 
                  className="anchor-link"
                >
                  <Typography sx={{ fontFamily: "Cooper Hewitt" }}>
                    FAQs
                  </Typography>
                </AnchorLink>

                <Button
                  id="mint-btn"
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    paddingX: 2,
                    marginY: 3,
                    color: "text.primary",
                    flex: "right",
                    border: 4,
                    borderColor: "#FFF",
                  }}
                  href="https://www.google.com"
                >
                  <Typography
                    sx={{ fontFamily: "Cooper Hewitt", lineHeight: 1.2 }}
                  >
                    Click here to mint
                  </Typography>
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
              src="../images/dummies/sandbag.png"
              alt="Muscle Shaker"
              placeholder="blurred"
              layout="fixed"
              width={75}
              height={75}
            />

            <div>
              <Button
                id="mint-btn"
                variant="contained"
                sx={{
                  borderRadius: 10,
                  paddingX: 2,
                  marginY: 3,
                  color: "text",
                  flex: "right",
                  border: 3,
                  borderColor: "#FFF",
                }}
                href="https://www.google.com"
                endIcon={<ShoppingCartIcon />}
              >
                <Typography
                  sx={{ fontFamily: "Cooper Hewitt", lineHeight: 1.2 }}
                >
                  Buy on OpenSea
                </Typography>
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

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
      <Container >
        <Toolbar disableGutters>

          {/* DESKTOP NAV */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }  }}>
            <Grid container spacing={0}>
              <Grid
                item
                md={5.5}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  textAlign: "center",
                  color: "#FFF",
                  alignSelf: "center",
                }}
              >

                <Grid container spacing={0}>
                  <Grid item md={12}>
                    <Box
                      sx={{
                        height: 2,
                        backgroundColor: "#FFF",
                        marginX: 10,
                        marginBottom: 1
                      }}
                    ></Box>
                  </Grid>

                  <Grid item md={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                      color: "#FFF",
                      alignSelf: "center",
                    }}
                  >
                    <AnchorLink 
                      to="#home" 
                      title="Home" 
                      className="anchor-link" 
                    >
                      <Typography sx={{ 
                        fontFamily: "Cooper Hewitt" ,
                        fontSize: { md: "1.2rem" ,lg: "1.5rem"},
                      }}>
                        HOME
                      </Typography>
                    </AnchorLink>

                    <AnchorLink
                      to="#about"
                      title="What is it?"
                      className="anchor-link"
                    >
                      <Typography sx={{ 
                        fontFamily: "Cooper Hewitt" ,
                        fontSize: { md: "1.2rem" ,lg: "1.5rem"}
                      }}>
                        ABOUT
                      </Typography>
                    </AnchorLink>

                    <AnchorLink
                      to="#utility"
                      title="Instant Utility"
                      className="anchor-link"
                    >
                      <Typography sx={{ 
                        fontFamily: "Cooper Hewitt" ,
                        fontSize: { md: "1.2rem" ,lg: "1.5rem"}
                      }}>
                        INSTANT UTILITY
                      </Typography>
                    </AnchorLink>
                  </Grid>

                  {/* BOTTOM LEFT BORDER */}
                  <Grid item md={12}>
                    <Box
                      sx={{
                        height: 2,
                        backgroundColor: "#FFF",
                        marginX: 5,
                        marginTop: 1
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StaticImage
                  className="shake"
                  src="../images/logos/md_nft_shaker.png"
                  alt="Muscle Shaker"
                  placeholder="blurred"
                  layout="constrained"
                  height={100}
                  width={66}
                />
              </Grid>

              <Grid
                item
                md={5.5}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  textAlign: "center",
                  color: "#FFF",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={0}>
                  {/* TOP RIGHT border */}
                  <Grid item md={12}>
                    <Box
                      sx={{
                        height: 2,
                        backgroundColor: "#FFF",
                        marginX: 10,
                        marginBottom: 1
                      }}
                    ></Box>
                  </Grid>

                  <Grid item md={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                      color: "#FFF",
                      alignItems: "center",
                    }}
                  >
                <AnchorLink
                  to="#roadmap"
                  title="Roadmap"
                  className="anchor-link"
                >
                  <Typography sx={{ 
                    fontFamily: "Cooper Hewitt" ,
                    fontSize: { md: "1.2rem" ,lg: "1.5rem"}
                  }}>
                    ROADMAP
                  </Typography>
                </AnchorLink>

                <AnchorLink 
                  to="#team" 
                  title="The Team" 
                  className="anchor-link"
                >
                  <Typography sx={{ 
                    fontFamily: "Cooper Hewitt" ,
                    fontSize: { md: "1.2rem" ,lg: "1.5rem"}
                  }}>
                    THE TEAM
                  </Typography>
                </AnchorLink>

                <AnchorLink 
                  to="#faq" 
                  title="Faqs" 
                  className="anchor-link"
                >
                  <Typography sx={{ 
                    fontFamily: "Cooper Hewitt" ,
                    fontSize: { md: "1.2rem" ,lg: "1.5rem"}
                  }}>
                    FAQS
                  </Typography>
                </AnchorLink>

                <Button
                  id="mint-btn"
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    color: "text.primary",
                    flex: "right",
                    border: 4,
                    borderColor: "#FFF",
                  }}
                  href="https://www.google.com"
                >
                  <Typography
                    sx={{ 
                      fontFamily: "Cooper Hewitt", 
                      lineHeight: 1.2 
                    }}
                  >
                    CLICK TO MINT
                  </Typography>
                </Button>
                  </Grid>

                  {/* BOTTOM RIGHT BORDER */}
                  <Grid item md={12}>
                    <Box
                      sx={{
                        height: 2,
                        backgroundColor: "#FFF",
                        marginX: 5,
                        marginTop: 1
                      }}
                    ></Box>
                  </Grid>
                </Grid>
                
              </Grid>
              
            </Grid>
          </Box>
          
          {/* MOBILE NAV */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: {xs: 2, sm: 5}
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

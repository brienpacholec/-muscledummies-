import React, { useState } from "react"

import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Box,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Modal,
  Paper,
  Button,
} from "@mui/material"

import { styled, ThemeProvider, createTheme } from "@mui/material/styles"

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import SportsKabaddiSharpIcon from "@mui/icons-material/SportsKabaddiSharp"
import SportsFootballSharpIcon from "@mui/icons-material/SportsFootballSharp"
import ManSharpIcon from "@mui/icons-material/ManSharp"
import WomanSharpIcon from "@mui/icons-material/WomanSharp"
import ArticleIcon from "@mui/icons-material/Article"
import InfoIcon from "@mui/icons-material/Info"
import GppGoodIcon from "@mui/icons-material/GppGood"
import MapIcon from "@mui/icons-material/Map"
import GroupIcon from "@mui/icons-material/Group"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ContactForm from "../components/contact_form"

const DummieNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
  paper: {
    background: "red",
  },
})

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "1rem",
  p: 3,
  color: "black",
}

const siteData = [
  {
    icon: <RemoveRedEyeIcon />,
    label: "Vision",
    href: "/$vision",
  },
  { icon: <GroupIcon />, label: "The Team", href: "/#team" },
]

const shopData = [
  {
    icon: <SportsKabaddiSharpIcon />,
    label: "Athletes",
    href: "/shop/athletes",
  },
  {
    icon: <SportsFootballSharpIcon />,
    label: "Football",
    href: "/shop/football",
  },
  { icon: <ManSharpIcon />, label: "Mens", href: "/shop/mens" },
  { icon: <WomanSharpIcon />, label: "Womens", href: "/shop/womens" },
]

const nftData = [
  { icon: <ArticleIcon />, label: "Plans", href: "/plans" },
  { icon: <InfoIcon />, label: "About", href: "/nft#about" },
  { icon: <GppGoodIcon />, label: "Instant Utility", href: "/nft#utility" },
  { icon: <MapIcon />, label: "Roadmap", href: "/nft#roadmap" },
  { icon: <QuestionAnswerIcon />, label: "Faqs", href: "/nft#faq" },
]

export default function DefaultNavbar() {
  const [displayContactModal, setDisplayContactModal] = useState(false)
  const handleOpen = () => setDisplayContactModal(true)
  const handleClose = () => setDisplayContactModal(false)

  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "#051000" },
        },
      })}
    >
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : "75vw",
        }}
        role="presentation"
      >
        <Box sx={{ display: "flex" }}>
          <Paper elevation={0} sx={{ width: "75vw" }}>
            <DummieNav component="nav" disablePadding>
              <ListItemButton component="a" href="/">
                <ListItemText
                  sx={{ my: 0 }}
                  primary="Muscle Dummies"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                    letterSpacing: 0,
                    fontFamily: "Gagalin",
                    textAlign: "center",
                  }}
                />
              </ListItemButton>

              <ListItemButton
                alignItems="flex-start"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StaticImage
                  src="../images/logos/md_logo.png"
                  alt="MD LOGO"
                  placeholder="blurred"
                  layout="constrained"
                  height={25}
                />
                <ListItemText
                  primary="PROJECT"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                    fontFamily: "Gagalin",
                    marginLeft: 1,
                  }}
                />
              </ListItemButton>
              <Box>
                {siteData.map(item => (
                  <ListItemButton
                    key={item.label}
                    sx={{
                      py: 0,
                      marginLeft: 2.5,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                    }}
                    component="a"
                    href={item.href}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        fontFamily: "Gagalin",
                      }}
                    />
                  </ListItemButton>
                ))}

                <ListItemButton
                  sx={{
                    py: 0,
                    marginLeft: 2.5,
                    minHeight: 32,
                    color: "rgba(255,255,255,.8)",
                  }}
                  component="a"
                  onClick={handleOpen}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <HelpOutlineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Inquire"}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                      fontFamily: "Gagalin",
                    }}
                  />
                </ListItemButton>
              </Box>

              <Divider />

              <Box>
                <ListItemButton
                  alignItems="flex-start"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StaticImage
                    src="../images/logos/md_logo.png"
                    alt="MD LOGO"
                    placeholder="blurred"
                    layout="constrained"
                    height={25}
                  />
                  <ListItemText
                    primary="SHOP"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: "medium",
                      fontFamily: "Gagalin",
                      marginLeft: 1,
                    }}
                  />
                </ListItemButton>
                {shopData.map(item => (
                  <ListItemButton
                    key={item.label}
                    sx={{
                      py: 0,
                      marginLeft: 2.5,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                    }}
                    component="a"
                    href={item.href}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        fontFamily: "Gagalin",
                      }}
                    />
                  </ListItemButton>
                ))}
              </Box>

              <Divider />

              <Box>
                <ListItemButton
                  alignItems="flex-start"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StaticImage
                    src="../images/logos/md_logo.png"
                    alt="MD LOGO"
                    placeholder="blurred"
                    layout="constrained"
                    height={25}
                  />
                  <ListItemText
                    primary="NFT"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: "medium",
                      fontFamily: "Gagalin",
                      marginLeft: 1,
                    }}
                  />
                </ListItemButton>
                {nftData.map(item => (
                  <ListItemButton
                    key={item.label}
                    sx={{
                      py: 0,
                      marginLeft: 2.5,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                    }}
                    component="a"
                    href={item.href}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        fontFamily: "Gagalin",
                      }}
                    />
                  </ListItemButton>
                ))}
              </Box>
            </DummieNav>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  )

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 99,
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          backgroundColor: "rgba(0,0,0,0.85)",
        }}
      >
        {["left"].map(anchor => (
          <React.Fragment key={anchor}>
            <Container
              maxWidth={false}
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                aria-label="delete"
                sx={{
                  color: "white",
                  left: 0,
                }}
              >
                <MenuIcon />
              </IconButton>

              <Link to="/">
                <StaticImage
                  className="shake"
                  src="../images/logos/md_logo.png"
                  alt="Muscle Shaker"
                  placeholder="blurred"
                  layout="constrained"
                  width={45}
                />
              </Link>
              <IconButton
                onClick={handleOpen}
                aria-label="delete"
                sx={{
                  color: "white",
                  left: 0,
                }}
              >
                <HelpOutlineIcon />
              </IconButton>
            </Container>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}

        <Modal
          open={displayContactModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Gagalin",
                textAlign: "-webkit-center",
              }}
            >
              INTERESTED? LET US GUIDE YOU
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                fontFamily: "Cooper Hewitt",
                textAlign: "-webkit-center",
              }}
            >
              Submit an inquiry below so we can point you in the best direction!
            </Typography>
            <ContactForm />
          </Box>
        </Modal>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <AppBar
          sx={{
            backgroundColor: "rgba(0,0,0,0.75)",
            paddingY: { xs: 1, md: 4 },
            position: { xs: "static", md: "sticky" },
            display: { xs: "none", md: "flex" },
          }}
        >
          <Container>
            <Toolbar disableGutters>
              {/* DESKTOP NAV */}
              <Box sx={{ flexGrow: 1 }}>
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
                            marginBottom: 1,
                          }}
                        ></Box>
                      </Grid>

                      <Grid
                        item
                        md={12}
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          textAlign: "center",
                          color: "#FFF",
                          alignSelf: "center",
                          paddingTop: 1,
                        }}
                      >
                        <AnchorLink
                          to="/#team"
                          title="Meet the team"
                          className="anchor-link"
                        >
                          <Typography
                            sx={{
                              fontFamily: "Cooper Hewitt",
                              fontSize: { md: "1.2rem", lg: "1.5rem" },
                            }}
                          >
                            TEAM
                          </Typography>
                        </AnchorLink>

                        <AnchorLink
                          to="/#vision"
                          title="Vision"
                          className="anchor-link"
                        >
                          <Typography
                            sx={{
                              fontFamily: "Cooper Hewitt",
                              fontSize: { md: "1.2rem", lg: "1.5rem" },
                            }}
                          >
                            VISION
                          </Typography>
                        </AnchorLink>

                        <Button
                          variant="text"
                          title="inquire"
                          className="anchor-link"
                          onClick={handleOpen}
                          sx={{
                            padding: 0,
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Cooper Hewitt",
                              fontSize: { md: "1.2rem", lg: "1.5rem" },
                            }}
                          >
                            INQUIRE
                          </Typography>
                        </Button>
                      </Grid>

                      {/* BOTTOM LEFT BORDER */}
                      <Grid item md={12}>
                        <Box
                          sx={{
                            height: 2,
                            backgroundColor: "#FFF",
                            marginX: 5,
                            marginTop: 1,
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
                    <Link to="/">
                      <StaticImage
                        className="shake"
                        src="../images/icon.png"
                        alt="Muscle Shaker"
                        placeholder="blurred"
                        layout="constrained"
                        height={70}
                      />
                    </Link>
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
                            marginBottom: 1,
                          }}
                        ></Box>
                      </Grid>

                      <Grid
                        item
                        md={12}
                        sx={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          textAlign: "center",
                          color: "#FFF",
                          alignItems: "center",
                          paddingTop: 1,
                        }}
                      >
                        <AnchorLink
                          to="/shop"
                          title="Shop"
                          className="anchor-link"
                        >
                          <Typography
                            sx={{
                              fontFamily: "Cooper Hewitt",
                              fontSize: { md: "1.2rem", lg: "1.5rem" },
                            }}
                          >
                            SHOP
                          </Typography>
                        </AnchorLink>

                        <AnchorLink
                          to="/nft"
                          title="NFT"
                          className="anchor-link"
                        >
                          <Typography
                            sx={{
                              fontFamily: "Cooper Hewitt",
                              fontSize: { md: "1.2rem", lg: "1.5rem" },
                            }}
                          >
                            NFT
                          </Typography>
                        </AnchorLink>

                        {/* <AnchorLink
                          to="/coaching"
                          title="Faqs"
                          className="anchor-link"
                        >
                          <Typography
                            sx={{
                              fontFamily: "Cooper Hewitt",
                              fontSize: { md: "1.2rem", lg: "1.5rem" },
                            }}
                          >
                            COACHING
                          </Typography>
                        </AnchorLink> */}
                      </Grid>

                      {/* BOTTOM RIGHT BORDER */}
                      <Grid item md={12}>
                        <Box
                          sx={{
                            height: 2,
                            backgroundColor: "#FFF",
                            marginX: 5,
                            marginTop: 1,
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </Container>
  )
}

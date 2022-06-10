import React, { useState } from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Container from "@mui/material/Container"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

import { styled, ThemeProvider, createTheme } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
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
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

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
  {
    icon: <FitnessCenterIcon />,
    label: "Body Builders",
    href: "/shop/bodybuilders",
  },
]

const nftData = [
  { icon: <ArticleIcon />, label: "Plans", href: "/plans" },
  { icon: <InfoIcon />, label: "About", href: "/nft#about" },
  { icon: <GppGoodIcon />, label: "Instant Utility", href: "/nft#utility" },
  { icon: <MapIcon />, label: "Roadmap", href: "/nft#roadmap" },
  { icon: <GroupIcon />, label: "The Team", href: "/nft#team" },
  { icon: <QuestionAnswerIcon />, label: "Faqs", href: "/nft#faq" },
]

export default function DefaultNavbar() {
  const [openNft, setOpenNft] = useState(true)
  const [openShop, setOpenShop] = useState(true)

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

              <Box
                sx={{
                  bgcolor: openShop ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: openShop ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpenShop(!openShop)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: openShop ? 0 : 2.5,
                    "&:hover, &:focus": {
                      "& svg": { opacity: openShop ? 1 : 0 },
                    },
                  }}
                >
                  <ListItemText
                    primary="Muscle Dummies Shop"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "medium",
                      lineHeight: "20px",
                      mb: "2px",
                      fontFamily: "Cooper Hewitt",
                    }}
                    secondary="Checkout out all of the health plans Muscle Dummies has to offer."
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: openShop
                        ? "rgba(0,0,0,0)"
                        : "rgba(255,255,255,0.5)",
                      fontFamily: "Cooper Hewitt",
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: openShop ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
                {openShop &&
                  shopData.map(item => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
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

              <Box
                sx={{
                  bgcolor: openNft ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: openNft ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpenNft(!openNft)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: openNft ? 0 : 2.5,
                    "&:hover, &:focus": {
                      "& svg": { opacity: openNft ? 1 : 0 },
                    },
                  }}
                >
                  <ListItemText
                    primary="Muscle Dummies NFT"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "medium",
                      lineHeight: "20px",
                      mb: "2px",
                      fontFamily: "Cooper Hewitt",
                    }}
                    secondary="A unique NFT Collection offering instant utility."
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: openNft
                        ? "rgba(0,0,0,0)"
                        : "rgba(255,255,255,0.5)",
                      fontFamily: "Cooper Hewitt",
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: openNft ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
                {openNft &&
                  nftData.map(item => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
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
        background: "#12201af5",
        zIndex: 99,
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
    </Container>
  )
}

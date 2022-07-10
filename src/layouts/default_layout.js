import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/system"

import Loading from "../components/loading"
import DefaultNavbar from "./default_navbar"
import DummieFooter from "../components/dummie_footer"
import Linkbar from "../components/linkbar"
import theme from "../themes/theme"

const DefaultLayout = ({ src, children }) => {
  const [loading, setLoading] = useState(true)
  const loadDuration = Math.random() * (2000 - 1000) + 1000

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, loadDuration)
  }, [])

  return (
    <>
      <Helmet>
        <title>Muscle Dummies</title>
        <html lang="en" />
        <meta name="Healht & Wealth" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Muscle Dummies" />
        <meta property="og:url" content="https://www.muscledummies.com/" />
        <meta property="og:image" content="/images/logos/md_logo.png" />
        <meta name="facebook-domain-verification" content="acu03i5tz2k|2r68bt1pn1pq8x0z91" />
      </Helmet>
      {loading ? (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Loading rednderText={true} src={src} />
        </Container>
      ) : (
        <ThemeProvider theme={theme}>
          <div id="home"></div>
          {src !== "404" && <DefaultNavbar />}
          <main>{children}</main>
          {/* FOOTER */}
          <Container maxWidth={false} disableGutters>
            <DummieFooter />
            <Linkbar />
          </Container>
        </ThemeProvider>
      )}
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
}

export default DefaultLayout

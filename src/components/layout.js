import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/system"

import Navbar from "./navbar"
import Loading from "./loading"

import theme from "../themes/theme"

const Layout = ({ src, children }) => {
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
        <meta
          property="og:image"
          content="https://gateway.pinata.cloud/ipfs/QmWYTnEWVyWvj73VxZwZojbsdZtTRDD9zAeDfQtoBSMvHH"
        />
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
          {src !== "404" && <Navbar src={src}/>}
          <main>{children}</main>
        </ThemeProvider>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
}

export default Layout

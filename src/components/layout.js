import React from "react"
import PropTypes from "prop-types"
import theme from "../themes/theme"
import { ThemeProvider } from "@mui/system"
import Navbar from "./navbar"
import { Helmet } from "react-helmet"

const Layout = ({ src, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Muscle Dummies</title>
        <html lang="en" />
        <meta name="Healht & Wealth" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <div id="home"></div>
        {src === "index" && <Navbar />}
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
}

export default Layout

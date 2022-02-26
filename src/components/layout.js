import React from "react"
import PropTypes from "prop-types"
import theme from "../themes/theme"
import { ThemeProvider } from "@mui/system"
import Navbar from "./navbar"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Muscle Dummies</title>
        <html lang="en" />
        <meta name="Healht & Wealth" />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@alch/alchemy-web3@latest/dist/alchemyWeb3.min.js"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <div id="home"></div>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

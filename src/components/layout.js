import * as React from "react"
import PropTypes from "prop-types"
import theme from "../themes/theme"
import { ThemeProvider } from "@mui/system"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

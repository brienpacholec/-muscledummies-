import * as React from "react"
import Typography from "@mui/material/Typography"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      <Typography>© {new Date().getFullYear()}, Muscle Dummies</Typography>
    </footer>
  )
}

export default Footer

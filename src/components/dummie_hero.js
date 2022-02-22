import * as React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"

const DummieHero = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ placeItems: "center" }}>
        <StaticImage
          src="../images/dummies/dummie_banner.png"
          alt="Muscle Shaker"
          placeholder="blurred"
          layout="constrained"
        />
      </Box>
    </Container>
  )
}
export default DummieHero

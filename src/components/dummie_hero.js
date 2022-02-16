import * as React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"

const DummieHero = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: { xs: "none", md: "flex" }, placeItems: 'center'}}>
        <div data-aos="fade-right" data-aos-duration="1500">
          <StaticImage
            src="../images/robot.png"
            alt="Muscle Shaker"
            placeholder="blurred"
            layout="constrained"
            imgStyle={{
              padding: 50,
            }}
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="2500">
          <StaticImage
            src="../images/sand.png"
            alt="Muscle Shaker"
            placeholder="blurred"
            layout="constrained"
            data-aos="fade-up"
          />
        </div>

        <div data-aos="fade-left" data-aos-duration="1500">
          <StaticImage
            src="../images/robot.png"
            alt="Muscle Shaker"
            placeholder="blurred"
            layout="constrained"
            imgStyle={{
              padding: 50,
            }}
            data-aos="fade-right"
          />
        </div>
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" }, paddingX: 7}}>
        <div data-aos="fade-up" data-aos-duration="1500">
          <StaticImage
            src="../images/robot.png"
            alt="Muscle Shaker"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </Box>
    </Container>
  )
}
export default DummieHero

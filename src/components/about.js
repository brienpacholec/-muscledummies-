import React from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"

import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Container
      id="about"
      //data-aos="fade-up-right"
      sx={{
        paddingY: { xs: 5, sm: 10 },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "initial" },
            }}
          >
            <StaticImage
              className="spin"
              src="../images/canva_components/dummie_circle.png"
              alt="Muscle Dummy"
              placeholder="blurred"
              layout="constrained"
              width={400}
              height={400}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          sx={{
            textAlign: "left",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#FFF",
              fontFamily: "Gagalin",
            }}
          >
            What are
          </Typography>

          <Typography
            variant="h3"
            display="inline"
            sx={{
              color: "primary.main",
              fontFamily: "Gagalin",
            }}
          >
            Muscle Dummies
          </Typography>

          <Typography
            variant="h3"
            display="inline"
            sx={{
              color: "#FFF",
              fontFamily: "Gagalin",
            }}
          >
            ?
          </Typography>

          <hr />

          <Typography
            variant="h5"
            sx={{
              color: "#FFF",
              fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
              fontFamily: "Cooper Hewitt",
            }}
          >
            <FitnessCenterIcon
              sx={{
                fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
              }}
            />{" "}
            Muscle Dummies are a unique collection of 333 one-of-one NFTs on the
            Ethereum blockchain.
          </Typography>

          <br />

          <Typography
            variant="h5"
            sx={{
              color: "#FFF",
              fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
              fontFamily: "Cooper Hewitt",
            }}
          >
            <FitnessCenterIcon
              sx={{
                fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
              }}
            />{" "}
            Muscle Dummies' mission is to build the best Health and Fitness
            community on the planet.
          </Typography>

          <hr />
        </Grid>
      </Grid>
    </Container>
  )
}
export default About

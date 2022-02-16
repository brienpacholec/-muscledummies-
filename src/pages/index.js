import React, { useEffect } from "react"
import Layout from "../components/layout"
import Container from "@mui/material/Container"
import Linkbar from "../components/linkbar"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import AppsIcon from "@mui/icons-material/Apps"
import Box from "@mui/material/Box"
import DummieHero from "../components/dummie_hero"
import AOS from "aos"
import "aos/dist/aos.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])

  return (
    <Layout>
      <Container>
        <Grid
          container
          spacing={0}
          sx={{ display: "flex", marginTop: { xs: 0, md: 3 } }}
          data-aos="fade-up"
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#FFF",
              }}
            >
              Ready to take over the Fitness Industry
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "#FFF",
              }}
            >
              Join&nbsp;
            </Typography>

            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "primary.main",
              }}
            >
              Muscle Dummies
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
              }}
            >
              Muscle Dummies is your chance to be a part of the greatest
              takeover in the Health and Fitness Industry
            </Typography>
          </Grid>
        </Grid>

        <DummieHero />
      </Container>

      <Container
        sx={{ marginY: { xs: 2, md: 5 } }}
        data-aos="fade-up-left"
        data-aos-duration="1500"
      >
        <Grid
          container
          sx={{
            display: "flex",
            marginTop: { xs: 0, md: 3 },
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                fontSize: { xs: "2rem", sm: "3rem" },
              }}
            >
              Welcome to Muscle Dummies
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            sx={{
              textAlign: "center",
              justifyContet: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#FFF",
                fontSize: { xs: 16, md: "inherit" },
              }}
            >
              Join this exclusive NFT project that offers instant utility valued
              higher than the cost to mint, one of a kind art, and great
              long-term benefits!
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", marginTop: -3 }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              textAlign: "center",
              justifyContet: "center",
            }}
          >
            <Link to="https://www.google.com">
              <StaticImage
                src="../images/view_collection.png"
                alt="Muscle Shaker"
                placeholder="blurred"
                layout="constrained"
                imgStyle={{
                  marginTop: 30,
                }}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>

      <Container
        id="about"
        sx={{ marginY: { xs: 2, md: 5 } }}
        data-aos="fade-up-left"
        data-aos-duration="1500"
      >
        <Grid
          container
          sx={{
            display: "flex",
            marginTop: { xs: 0, md: 3 },
            justifyContent: "center",
            placeItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: {xs: "none", md: "initial"}
              }}
            >
              <StaticImage
                src="../images/circle_robot.png"
                alt="Muscle Shaker"
                placeholder="blurred"
                layout="full_width"
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              textAlign: "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#FFF",
              }}
            >
              What are
            </Typography>

            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "primary.main",
              }}
            >
              Muscle Dummies
            </Typography>

            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "#FFF",
              }}
            >
              ?
            </Typography>

            <hr />

            <Typography
              variant="h5"
              display="inline"
              sx={{
                color: "#FFF",
                fontSize: { sm: "1rem", md: "1.2rem" },
              }}
            >
              <FitnessCenterIcon
                sx={{
                  fontSize: { sm: "1rem", md: "1.2rem" },
                }}
              />{" "}
              Muscle Dummies are a unique collection of 3,333 one-ofone NFTs on
              the{" "}
            </Typography>

            <Typography
              variant="h5"
              display="inline"
              sx={{
                color: "#edc443",
                fontSize: { sm: "1rem", md: "1.2rem" },
              }}
            >
              blank{" "}
            </Typography>
            <Typography
              variant="h5"
              display="inline"
              sx={{
                color: "#FFF",
                fontSize: { sm: "1rem", md: "1.2rem" },
              }}
            >
              blockchain
            </Typography>

            <br />
            <br />

            <Typography
              variant="h5"
              sx={{
                color: "#FFF",
                fontSize: { sm: "1rem", md: "1.2rem" },
              }}
            >
              <FitnessCenterIcon
                sx={{
                  fontSize: { sm: "1rem", md: "1.2rem" },
                }}
              />{" "}
              Muscle Dummies' mission is to build the best Health and Fitness
              community on the planet. we want to give back to the industry that
              has given so much to us
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Linkbar />
    </Layout>
  )
}

export default IndexPage

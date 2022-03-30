import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Button from "@mui/material/Button"

const Community = () => {
  return (
    <Container
      id="community"
      sx={{
        paddingY: { xs: 5, sm: 10 },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          paddingX: 5,
          borderLeft: "4mm ridge rgb(77, 255, 0, .6)",
          borderRight: { xs: "4mm ridge rgb(77, 255, 0, .6)", md: "none" },
          placeItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{
            paddingRight: { xs: 0, md: 5 },
          }}
          data-aos="fade-up"
        >
          <Typography
            variant="h5"
            sx={{
              color: "#FFF",
              fontSize: { xs: 16, sm: "1rem", md: "1.3rem" },
              fontFamily: "Cooper Hewitt",
              lineHeight: 2,
            }}
          >
            Joining the Muscle Dummies community means joining a family of
            like-minded individuals who are passionate about their health and
            fitness. This can be an individual who is new to the field looking
            to transform their body, or a vet looking for an opportunity to
            share their experiences, give advice, and help guide others through
            their process.
          </Typography>

          <Box
            sx={{
              display: "flex",
              placeItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "unset" } }}>
              <Link to="https://discord.gg/CCyjkz8S6m">
                <StaticImage
                  src="../images/canva_components/discord.png"
                  alt="Muscle Shaker"
                  placeholder="blurred"
                  layout="constrained"
                  height={88}
                  width={100}
                />
              </Link>
            </Box>

            <Button
              variant="contained"
              href="https://discord.gg/CCyjkz8S6m"
              sx={{
                textAlign: "center",
                padding: { xs: 0.5, sm: 1 },
                marginY: { xs: 3, sm: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "2.7rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                JOIN OUR DISCORD
              </Typography>
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          md={4}
          data-aos="fade-up"
          sx={{
            textAlign: "center",
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
            }}
          >
            <Grid item md={12}>
              <StaticImage
                src="../images/canva_components/dummie_community.png"
                alt="Dummie World"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width={586}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Community

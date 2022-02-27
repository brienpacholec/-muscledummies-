import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"

const DummieFooter = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        data-aos="fade-right"
      >
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Gagalin",
              color: "primary.main",
            }}
          >
            WE UNDERSTAND SOME OF OUR CUSTOMERS MAY BE NEW TO THIS OR THE
            WORLD OF NFT'S MAY SEEM FOREIGN, BUT WE MADE SURE TO PROVIDE YOU
            ALL THE INFO YOU NEED IN OUR DISCORD. SOME MAY EVEN BE NEW TO
            DISCORD.. NO WORRIES! DISCORD IS AN INCREDIBLY EASY APP TO
            NAVIGATE AND WE HAVE A TUTORIAL VIDEO ON HOW TO JOIN AND BE
            ENGAGED BELOW! CLICK THE LINK
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          marginY: 5,
          alignItems: "center",
        }}
        data-aos="zoom-in"
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            JOIN
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "primary.main",
              marginTop: -2,
            }}
          >
            MUSCLE DUMMIES
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Be apart of the best Health and Fitness Community in the World!
          </Typography>
        </Grid>

        <Grid
          item
          md={4}
          sx={{
            textAlign: "center",
            display: { xs: "none", md: "unset" },
          }}
        >
          <StaticImage
            src="../images/canva_components/footer_shaker.png"
            alt="The Athlete"
            placeholder="blurred"
            layout="constrained"
            height={150}
            height={150}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            MINT
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Gagalin",
              color: "primary.main",
              marginTop: -2,
            }}
          >
            TBA
          </Typography>
        </Grid>
      </Grid>

      {/* <Typography>© {new Date().getFullYear()}, Muscle Dummies</Typography> */}
    </Container>
  )
}

export default DummieFooter

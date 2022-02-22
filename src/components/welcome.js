import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Welcome = () => {
  return (
    <Container
      data-aos="fade-up-left"
      data-aos-duration="1500"
      sx={{
        paddingY: 5,
      }}
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
            className="neon"
            variant="h3"
            sx={{
              color: "primary.main",
              fontSize: { xs: "2rem", sm: "3rem" },
              fontFamily: "Cooper Hewitt",
            }}
          >
            WELCOME TO MUSCLE DUMMIES
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
              fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
              fontFamily: "Cooper Hewitt",
            }}
          >
            Join this exclusive NFT project that offers instant utility valued
            higher than the cost to mint, one of a kind art, and great long-term
            benefits!
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
              src="../images/canva_components/view_collection.png"
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
  )
}

export default Welcome

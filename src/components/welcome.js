import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Welcome = () => {
  return (
    <Container
      sx={{
        paddingY: { xs: 5, sm: 10 },
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
              fontFamily: "Cooper Hewitt",
            }}
          >
            WELCOME
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          sx={{
            textAlign: "center",
            justifyContet: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#FFF",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontFamily: "Cooper Hewitt",
            }}
          >
            Join this exclusive NFT project that offers instant utility valued
            higher than the cost to mint, one-of-a-kind art, and great long-term
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
          <Link to="https://opensea.io/collection/muscle-dummies">
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

import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"

const DummieHeader = () => {
  return (
    <Container
      sx={{
        paddingTop: { xs: 0, md: 30 },
      }}
    >
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
              fontFamily: "Cooper Hewitt",
            }}
          >
            READY TO CONQUER THE HEALTH AND FITNESS INDUSTRY
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
              fontFamily: "Gagalin",
            }}
          >
            Join{" "}
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
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            marginY: { xs: 0, md: 2 },
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
            }}
          >
            Muscle Dummies is your chance to be a part of the greatest takeover
            in the Health and Fitness Industry
          </Typography>
        </Grid>
      </Grid>

      {/* TODO - remove height and add hero image */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Box sx={{ placeItems: "center" }}>
          <StaticImage
            src="../images/dummies/dummie_banner.png"
            alt="Muscle Shaker"
            placeholder="blurred"
            layout="constrained"
          />
        </Box> */}
      </Container>
    </Container>
  )
}

export default DummieHeader

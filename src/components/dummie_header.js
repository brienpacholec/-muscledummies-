import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

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
    </Container>
  )
}

export default DummieHeader

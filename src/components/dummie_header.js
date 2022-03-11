import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const DummieHeader = () => {
  return (
    <Container
      sx={{
        paddingTop: { xs: 10, md: 50 },
      }}
    >
      <Grid container spacing={0} sx={{ display: "flex" }} data-aos="fade-up">
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
              fontSize: { xs: "1.5rem", sm: "2rem" },
              textShadow: "4px 4px black",
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
            marginTop: { xs: 10, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            display="inline"
            sx={{
              color: "#FFF",
              fontFamily: "Gagalin",
              textShadow: "4px 4px black",
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
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              textShadow: "4px 4px black",
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

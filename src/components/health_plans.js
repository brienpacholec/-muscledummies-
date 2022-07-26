import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import DocumentLoader from "./document_loader"

const HealthPlans = ({ fitness_plans }) => {
  return (
    <Container
      sx={{
        paddingY: { xs: 5 },
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
            HEALTH & FITNESS PLANS
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
            For purchasing one of the Muscle Dummy NFT's you have been granted
            access to a variety of nutritional and workout plans. These plans
            have proven success for many and now it's your turn!
          </Typography>
        </Grid>
      </Grid>

      {/* WORKOUT PLANS */}
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContet: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Gagalin",
              textAlign: "center",
            }}
          >
            WORKOUT PLANS
          </Typography>

          <DocumentLoader plans={fitness_plans.fitness_plans} />
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Gagalin",
              textAlign: "center",
            }}
          >
            NUTRITION PLANS
          </Typography>
          <DocumentLoader plans={fitness_plans.health_plans} />
        </Grid>
      </Grid>

      {/* NUTRITION PLANS */}
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
      ></Grid>
    </Container>
  )
}
export default HealthPlans

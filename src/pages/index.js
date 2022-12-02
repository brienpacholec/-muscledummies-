import React from "react"

import DefaultLayout from "../layouts/default_layout"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material"

import ElevatorPitch from "../components/elevator_pitch"
import TheTeam from "../components/the_team"
import Roadmap from "../components/roadmap"
import Redirects from "../components/redirects"
import NotableDummies from "../components/notable_dummies"
import FeaturedPlan from "../components/featured_plan"

const IndexPage = () => {
  return (
    <DefaultLayout src="index">
      <Container
        className="bg-2"
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ElevatorPitch />
        <Grid sx={{
          marginY: 5
        }}>
          <Grid
            item
            xs={12}
          >
            <Typography
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  paddingTop: { xs: 2, sm: 0 },
                  textAlign: "center"
                }}
              >
                Checkout our newest plans!
              </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "wrap",
            }}
          >

            <FeaturedPlan imgPath={'/images/featured/mens-total-package-cover.jpeg'} url={"https://isaachadac2234.clickfunnels.com/sales-page1659791156504"} ignore-description={true} sx={{ marginX: 5 }} />
            <FeaturedPlan imgPath={'/images/featured/womens-total-package-cover.jpeg'} url={"https://isaachadac2234.clickfunnels.com/sales-page1665450012712"} ignore-description={true} sx={{ marginX: 5 }} />
            {/* <FeaturedPlan plan={data.allShopifyProduct.edges[0].node} type="homepage" ignore-description={true} sx={{ marginX: 5 }} />
            <FeaturedPlan plan={data.allShopifyProduct.edges[1].node} type="homepage" ignore-description={true} sx={{ marginX: 5 }} /> */}
          </Grid>
        </Grid>
      </Container>

      {/* MEET THE TEAM */}
      <Container id="team" className="bg-dummy" sx={{}}>
        <TheTeam />
      </Container>

      {/* ROADMAP */}
      <Container
        className="bg-3"
        maxWidth={false}
        disableGutters
        sx={{
          paddingY: 5,
        }}
      >
        <Roadmap />
      </Container>

      {/* REDIRECTS */}
      <Container
        id="redirects"
        sx={{
          marginY: { xs: 2, md: 5 },
        }}
      >
        <Redirects />
        <NotableDummies />
      </Container>
    </DefaultLayout>
  )
}

export default IndexPage

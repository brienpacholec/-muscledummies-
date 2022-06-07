import React from "react"

import DefaultLayout from "../layouts/default_layout"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

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
          height: "100%",
          paddingBottom: 20,
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingTop: 10,
            paddingBottom: 5,
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
              sx={{
                color: "primary.main",
                fontFamily: "Cooper Hewitt",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
              }}
            >
              WELCOME TO MUSCLE DUMMIES
            </Typography>
          </Grid>
          {/* <Grid item xs={12} sm={8} md={6} sx={{ textAlign: "-webkit-center" }}>
            <Typography
              sx={{
                fontFamily: "Cooper Hewitt",
              }}
            >
              Muscle Dummies is a Health and Fitness brand taking a new approach
              to the field. The brand is based on the foundation of making
              better humans and athletes through simple, but highly effective
              workout plans, meal plans, and personal coaching. Everything we
              offer comes from our team consisting of experts who specialize in
              different fields that can offer alternative perspectives to best
              help YOU achieve your goals!
            </Typography>
          </Grid> */}
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "space-evenly",
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            sx={{
              textAlign: "center",
              backgroundColor: "rgba(150, 150, 150, 0.25)",
              border: "2px solid #000",
              borderRadius: 4,
              padding: 1,
              marginY: { xs: 2, md: 0 },
              marginX: { xs: 2, sm: 0 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Gagalin",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                color: "white",
                textShadow: "2px 2px green",
              }}
            >
              HEALTH PLANS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Cooper Hewitt",
              }}
            >
              Explore a wide range of unique health plans customzied to help you
              meet your goals! With fitness plans ranging from athletes to body
              builders, the Muscle Dummies plans can apply to both men and women
              alike. Beyond that, Muscle Dummies offer's amazing nutritional
              plans to help you meet your goals in the kitchen!
            </Typography>
            <Button
              size="small"
              variant="contained"
              href="/shop"
              sx={{ marginY: 2, fontFamily: "Cooper Hewitt" }}
            >
              SHOP ALL HEALTH PLANS
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            sx={{
              textAlign: "center",
              backgroundColor: "rgba(150, 150, 150, 0.25)",
              border: "2px solid #000",
              borderRadius: 4,
              padding: 1,
              marginY: { xs: 2, md: 0 },
              marginX: { xs: 2, sm: 0 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Gagalin",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                color: "white",
                textShadow: "2px 2px green",
              }}
            >
              NFTS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Cooper Hewitt",
              }}
            >
              Muscle Dummies launched an exclusive NFT project, attempting to
              bridge the realms of technology with health & fitness. Beyond
              owning an amazing asset that can appreciate in value, when you
              become a Muscle Dummy NFT owner you will be able to access all of
              the health plans Muscle Dummies has to offer!
            </Typography>
            <Button
              size="small"
              variant="contained"
              href="/nft"
              sx={{ marginY: 2, fontFamily: "Cooper Hewitt" }}
            >
              CHECK OUT THE COLLECTION
            </Button>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  )
}

export default IndexPage

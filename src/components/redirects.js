import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const Redirects = () => {
  return (
    <Container>
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
            alike. Beyond that, Muscle Dummies offer's amazing nutritional plans
            to help you meet your goals in the kitchen!
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
            bridge the realms of technology with health & fitness. Beyond owning
            an amazing asset that can appreciate in value, when you become a
            Muscle Dummy NFT owner you will be able to access all of the health
            plans Muscle Dummies has to offer!
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
  )
}
export default Redirects

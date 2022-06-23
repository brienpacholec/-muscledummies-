import React from "react"
import { graphql } from "gatsby"
import { Container, Grid, Typography } from "@mui/material/Container"
import { loadStripe } from "@stripe/stripe-js"
import DefaultLayout from "../layouts/default_layout"
import PlanPicker from "../components/plan_picker"
import PlanCard from "../components/plan_card"
import Closed from "../components/closed"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

const ShopPlans = ({ pageContext, data }) => {
  const workouts = data.workout.edges
  const nutritions = data.nutrition.edges
  const bundles = data.bundle.edges
  const misc = data.miscellaneous.edges

  const redirectToCheckout = async productId => {
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: productId, quantity: 1 }],
      successUrl: `${process.env.GATSBY_SITE_URL}/success`,
      cancelUrl: `${process.env.GATSBY_SITE_URL}/shop/${pageContext.nickname
        .replace(" ", "-")
        .toLowerCase()}`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <DefaultLayout src={pageContext.nickname}>
      <Container
        className="bg-3"
        maxWidth={false}
        disableGutters
        sx={{ paddingY: 5 }}
      >
        <Closed />

        {/* <PlanPicker current={pageContext.nickname} /> */}

        {/* WORKOUTS */}
        {/* {workouts.length > 0 && (
          <Grid container sx={{ marginY: 3 }}>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  paddingTop: { xs: 2, sm: 0 },
                }}
              >
                WORKOUTS
              </Typography>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexFlow: "wrap",
                }}
              >
                {workouts.map((product, index) => (
                  <PlanCard
                    plan={product.node}
                    redirectToCheckout={redirectToCheckout}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )} */}

        {/* MISCELLANEOUS */}
        {/* {misc.length > 0 && (
          <Grid container sx={{ marginY: 3 }}>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  paddingTop: { xs: 2, sm: 0 },
                }}
              >
                EXTRAS
              </Typography>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexFlow: "wrap",
                }}
              >
                {misc.map((product, index) => (
                  <PlanCard
                    plan={product.node}
                    redirectToCheckout={redirectToCheckout}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )} */}

        {/* NUTRITION */}
        {/* {nutritions.length > 0 && (
          <Grid container sx={{ marginY: 3 }}>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  paddingTop: { xs: 2, sm: 0 },
                }}
              >
                NUTRITION
              </Typography>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexFlow: "wrap",
                }}
              >
                {nutritions.map((product, index) => (
                  <PlanCard
                    plan={product.node}
                    redirectToCheckout={redirectToCheckout}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )} */}

        {/* BUNDLES */}
        {/* {bundles.length > 0 && (
          <Grid container sx={{ marginY: 3 }}>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  paddingTop: { xs: 2, sm: 0 },
                }}
              >
                BUNDLES
              </Typography>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexFlow: "wrap",
                }}
              >
                {bundles.map((product, index) => (
                  <PlanCard
                    plan={product.node}
                    redirectToCheckout={redirectToCheckout}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )} */}
      </Container>
    </DefaultLayout>
  )
}

export default ShopPlans

export const query = graphql`
  query stripeProductByNickname($nickname: String!) {
    workout: allStripePrice(
      filter: {
        nickname: { eq: $nickname }
        product: { metadata: { type: { eq: "Workout" } }, active: { eq: true } }
      }
      sort: { fields: unit_amount, order: ASC }
    ) {
      edges {
        node {
          id
          product {
            name
            description
            images
            metadata {
              type
            }
          }
          nickname
          unit_amount
          type
        }
      }
    }
    nutrition: allStripePrice(
      filter: {
        nickname: { eq: $nickname }
        product: {
          metadata: { type: { eq: "Nutrition" } }
          active: { eq: true }
        }
      }
      sort: { fields: unit_amount, order: ASC }
    ) {
      edges {
        node {
          id
          product {
            name
            description
            images
            metadata {
              type
            }
          }
          nickname
          unit_amount
          type
        }
      }
    }
    bundle: allStripePrice(
      filter: {
        nickname: { eq: $nickname }
        product: { metadata: { type: { eq: "Bundle" } }, active: { eq: true } }
      }
      sort: { fields: unit_amount, order: ASC }
    ) {
      edges {
        node {
          id
          product {
            name
            description
            images
            metadata {
              type
            }
          }
          nickname
          unit_amount
          type
        }
      }
    }
    miscellaneous: allStripePrice(
      filter: {
        nickname: { eq: $nickname }
        product: {
          metadata: { type: { eq: "Miscellaneous" } }
          active: { eq: true }
        }
      }
      sort: { fields: unit_amount, order: ASC }
    ) {
      edges {
        node {
          id
          product {
            name
            description
            images
            metadata {
              type
            }
          }
          nickname
          unit_amount
          type
        }
      }
    }
  }
`

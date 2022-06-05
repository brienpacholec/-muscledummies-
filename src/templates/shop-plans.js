import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/default_layout"
import PlanPicker from "../components/plan_picker"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import { loadStripe } from "@stripe/stripe-js"

import Typography from "@mui/material/Typography"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

const ShopPlans = ({ pageContext, data }) => {
  const products = data.allStripePrice.edges

  const redirectToCheckout = async productId => {
    const stripe = await getStripe()
    console.log(stripe)
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
        <PlanPicker current={pageContext.nickname} />
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "wrap",
              marginTop: 5,
            }}
          >
            {products.map((product, index) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexBasis: { xs: "55%", sm: "40%", md: "25%", lg: "15%" },
                  margin: 1,
                }}
                key={index}
              >
                <CardHeader
                  title={product.node.product.name}
                  subheader={"$" + (product.node.unit_amount / 100).toFixed(2)}
                  titleTypographyProps={{
                    fontSize: "0.875rem",
                  }}
                  subheaderTypographyProps={{
                    fontSize: "0.75rem",
                  }}
                  sx={{
                    "& .MuiCardHeader-content": {
                      display: "inline-flex",
                      justifyContent: "space-between",
                    },
                    height: "70px",
                    alignItems: "flex-start",
                  }}
                />
                {product.node.product.images[0] ? (
                  <CardMedia
                    component="img"
                    height="194"
                    image={product.node.product.images[0]}
                    alt="An image of an individual working out"
                    sx={{
                      objectFit: "fill",
                    }}
                  />
                ) : (
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://library.kissclipart.com/20180914/ire/kissclipart-weight-lifting-transparent-clipart-weight-training-63c0acb956da6802.png"
                    alt="Paella dish"
                    sx={{
                      objectFit: "fill",
                    }}
                  />
                )}

                <CardContent
                  sx={{
                    textAlign: "left",
                    marginBottom: "auto",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cooper Hewitt",
                      fontSize: ".8rem",
                    }}
                  >
                    <em>{product.node.product.description}</em>
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    paddingTop: 0,
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => redirectToCheckout(product.node.id)}
                  >
                    BUY NOW
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  )
}

export default ShopPlans

export const query = graphql`
  query stripeProductByNickname($nickname: String!) {
    allStripePrice(
      filter: { nickname: { eq: $nickname } }
      sort: { fields: unit_amount, order: ASC }
    ) {
      edges {
        node {
          id
          product {
            name
            description
            images
          }
          nickname
          unit_amount
        }
      }
    }
  }
`

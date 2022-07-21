import React from "react"
import { graphql } from "gatsby"
import { Container, Grid, Typography } from "@mui/material"
import DefaultLayout from "../layouts/default_layout"
import PlanPicker from "../components/plan_picker"
import PlanCard from "../components/plan_card"

const ShopPlans = ({ pageContext, data }) => {
  const workouts = []
  const nutritions = []
  const bundles = []
  const extras = []
  const subscriptions = []
  data.allShopifyProduct.edges.forEach(plan => {
    if(plan.node.tags.includes("Workout")){
      workouts.push(plan.node)
    } else if(plan.node.tags.includes("Nutrition")){
      nutritions.push(plan.node)
    } else if(plan.node.tags.includes("Bundle")){
      bundles.push(plan.node)
    } else if(plan.node.tags.includes("Extras")){
      extras.push(plan.node)
    }
    
    // CHECK to see if it also includes a subscription
    if(plan.node.tags.includes("Subscription")){
      subscriptions.push(plan.node)
    }
  })
  return (
    <DefaultLayout src={pageContext.name}>
      <Container
        className="bg-3"
        maxWidth={false}
        disableGutters
        sx={{ paddingY: 5 }}
      >
        <PlanPicker current={pageContext.name} />

        {/* WORKOUTS */}
        {workouts.length > 0 && (
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
                    plan={product}
                    type={"workouts"}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}

        {/* MISCELLANEOUS */}
        {extras.length > 0 && (
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
                {extras.map((product, index) => (
                  <PlanCard
                    plan={product}
                    type={"extras"}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}

        {/* NUTRITION */}
        {nutritions.length > 0 && (
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
                    plan={product}
                    type={"nutritions"}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}

        {/* BUNDLES */}
        {bundles.length > 0 && (
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
                    plan={product}
                    type={"bundles"}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}

        {/* Subscriptions */}
        {subscriptions.length > 0 && (
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
                SUBSCRIPTIONS
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
                {subscriptions.map((product, index) => (
                  <PlanCard
                    plan={product}
                    type={"subscriptions"}
                    key={index}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </DefaultLayout>
  )
}

export default ShopPlans

export const query = graphql`
  query ShopifyProductsByTag($tag: [String]) {
    allShopifyProduct(
        filter: {tags: {in: $tag}}
        sort: {fields: priceRange___maxVariantPrice___amount, order: ASC}
    ) {
      edges {
        node {
          title
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          descriptionHtml
          tags
          media {
            preview {
              image {
                src
              }
            }
          }
          onlineStorePreviewUrl
          sellingPlanGroupCount
        }
      }
    }
  }
`

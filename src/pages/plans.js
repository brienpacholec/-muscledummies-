import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Container, Grid, Alert, Typography, Divider } from "@mui/material"
import DefaultLayout from "../layouts/default_layout"
import HealthPlans from "../components/health_plans"
import { checkOwnership } from "../utils/interact.js"

const PlansPage = ({ data }) => {
  const [dummieOwner, setDummieOwner] = useState("")

  useEffect(() => {
    async function fetchData() {
      const owner = await checkOwnership()
      setDummieOwner(owner)
    }
    fetchData()
  }, [])

  return (
    <DefaultLayout src="plans">
      {/* PLANS */}
      <Container
        className="bg-4"
        maxWidth={false}
        disableGutters
        sx={{
          paddingY: 5,
        }}
      >
        {dummieOwner ? (
          <>
            <Container
              sx={{
                paddingY: { xs: 5 },
                height: "50vh",
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
                  sm={6}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <Alert severity="error" style={{ fontFamily: "Cooper Hewitt" }}>
                    <Typography
                      sx={{
                        fontFamily: "Cooper Hewitt",
                      }}
                    >
                      Our plans are currently unavailable. Please email <a href="mailto:info@muscledummies.com">info@muscledummies.com</a> for further assistance.
                    </Typography>
                  </Alert>
                </Grid>
              </Grid>
            </Container>
          </>
        ) : (
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
                sm={6}
                sx={{
                  textAlign: "left",
                }}
              >
                <Alert severity="error" style={{ fontFamily: "Cooper Hewitt" }}>
                  <Typography
                    sx={{
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    Our records indicate you do not own a Muscle Dummy and
                    therfore you do not have access to the Muscle Dummy Health &
                    Fitness plans.
                  </Typography>
                  <Divider sx={{ marginY: 1 }} />
                  Trouble shooting:
                  <ul>
                    <li>
                      If you just purchased a Muscle Dummy, verify that the
                      transaction has completed through Metamask's activity
                      panel.
                    </li>
                    <li>
                      Please ensure that you have connected your Metamask wallet
                      and refresh this page.
                    </li>

                    <li>
                      If the issue persists, please contact{" "}
                      <a
                        href="mailto:info@muscledummies.com"
                        style={{
                          color: "inherit",
                          textDecoration: "underline",
                        }}
                      >
                        info@muscledummies.com
                      </a>
                    </li>
                  </ul>
                </Alert>
              </Grid>
            </Grid>
          </Container>
        )}
      </Container>
    </DefaultLayout>
  )
}

export default PlansPage

// export const query = graphql`
//   query DirectusQuery {
//     directus {
//       fitness_plans {
//         document {
//           id
//         }
//         name
//         id
//       }
//       health_plans {
//         document {
//           id
//         }
//         name
//         id
//       }
//     }
//   }
// `

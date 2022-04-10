import React, { useEffect, useState } from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Alert from "@mui/material/Alert"
import Typography from "@mui/material/Typography"

import Layout from "../components/layout"
import HealthPlans from "../components/health_plans"
import DummieFooter from "../components/dummie_footer"
import Linkbar from "../components/linkbar"

import { checkOwnership } from "../utils/interact.js"

const PlansPage = () => {
  const [dummieOwner, setDummieOwner] = useState("")

  useEffect(() => {
    async function fetchData() {
      const owner = await checkOwnership()
      setDummieOwner(owner)
    }
    fetchData()
  }, [])

  return (
    <Layout src="plans">
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
          <HealthPlans />
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
                <Alert severity="error">
                  <Typography
                    sx={{
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    Our records indicate you do not own a Muscle Dummy and
                    therfore you do not have access to the Muscle Dummy Health &
                    Fitness plans.
                  </Typography>
                  <hr />
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

      {/* FOOTER */}
      <Container>
        <DummieFooter />
      </Container>

      <Linkbar />
    </Layout>
  )
}

export default PlansPage

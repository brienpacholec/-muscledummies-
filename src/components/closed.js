import React from "react"
import { Container, Grid, Typography, Alert, Divider } from "@mui/material"

const Closed = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: "flex",
          }}
        >
          <Alert severity="warning">
            <Typography
              sx={{
                fontFamily: "Cooper Hewitt",
              }}
            >
              The Muscle Dummies shop is currently unavailable. We are working
              to restore this issue and we thank you for your patience.
            </Typography>

            <Divider sx={{ marginY: 1 }} />

            <Typography
              sx={{
                fontFamily: "Cooper Hewitt",
                textAlign: "left",
              }}
            >
              If you are seeking available plans, please contact{" "}
              <a
                href="mailto:info@muscledummies.com"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                info@muscledummies.com
              </a>{" "}
              or direct message{" "}
              <a
                href="https://www.instagram.com/isaac_hadac/"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                @isaac_hadac
              </a>{" "}
              on Instagram.
            </Typography>
          </Alert>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Closed

import * as React from "react"
import DefaultLayout from "../layouts/default_layout"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const SuccessPage = () => {
  return (
    <DefaultLayout src="404">
      <Container
        className="bg-1"
        maxWidth={false}
        disableGutters
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={10}
            sm={8}
            md={6}
            sx={{
              textAlign: "center",
              backgroundColor: "rgba(150, 150, 150, 0.25)",
              border: "2px solid #000",
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Gagalin",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              <span style={{ color: "white", textShadow: "2px 2px green" }}>
                SUCCESSFULLY PURCHASED
              </span>
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "Cooper Hewitt",
                fontSize: "1rem",
              }}
            >
              Within the next 48 hours you will emailed your health plans!
              <br />
              If you experience any issues or have any questions about your
              purchase please contact{" "}
              <a
                href="mailto:info@muscledummies.com"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                }}
              >
                info@muscledummies.com
              </a>
              .
              <br />
            </Typography>
            <Button
              size="small"
              variant="contained"
              href="/"
              sx={{ marginY: 2, fontFamily: "Cooper Hewitt" }}
            >
              BACK TO MUSCLE DUMMIES
            </Button>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  )
}

export default SuccessPage

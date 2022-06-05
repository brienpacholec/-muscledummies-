import * as React from "react"
import DefaultLayout from "../layouts/default_layout"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const message404 = [
  {
    title: "Sorry, our developers are at the gym.",
    subtitle: "You get your session in today?",
  },
  {
    title: "WHOOPS, forgot about this page!",
    subtitle: "We'll get to this later...",
  },
  {
    title: "How'd you get to this page?",
    subtitle: "I'm out getting a pump!",
  },
]

const displayMessage = message404[Math.floor(Math.random() * message404.length)]

const NotFoundPage = () => {
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
              <span style={{ color: "white", textShadow: "2px 2px red" }}>
                PAGE NOT FOUND
              </span>
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Cooper Hewitt",
                fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.2rem" },
              }}
            >
              <span style={{ color: "white", textShadow: "2px 2px black" }}>
                {displayMessage.title}
              </span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "Cooper Hewitt",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.7rem" },
              }}
            >
              <span style={{ color: "white", textShadow: "2px 2px black" }}>
                {displayMessage.subtitle}
              </span>
            </Typography>

            <Button
              variant="contained"
              href="/"
              sx={{
                margin: 1,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                }}
              >
                BACK TO MUSCLE DUMMIES
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  )
}

export default NotFoundPage

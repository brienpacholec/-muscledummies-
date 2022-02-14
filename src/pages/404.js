import * as React from "react"
import Layout from "../components/layout"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"

const message404 = [
  {
    title: "Sorry, I'm busy repping out 315.",
    subtitle: "You hit 225 yet?",
    image: "404_2.png",
  },
  {
    title: "BRB I am at the gym!",
    subtitle: "We'll get to this later...",
    image: "404_2.png",
  },
  {
    title: "Go somewhere else on the site,",
    subtitle: "I'm out getting a pump!",
    image: "404_2.png",
  },
]

const displayMessage = message404[Math.floor(Math.random() * message404.length)]

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "",
  color: theme.palette.text.secondary,
}))

const NotFoundPage = () => {
  return (
    <Layout>
      <Container sx={{ marginTop: 3, marginBottom: 45 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ textAlign: { xs: "left", md: "center" } }}
            >
              <Item sx={{ paddingY: 10 }}>
                <Typography variant="h2">404 Page Not Found</Typography>
                <Typography variant="h4">{displayMessage.title}</Typography>
                <Typography variant="h5">{displayMessage.subtitle}</Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ paddingY: 10 }}>
                <StaticImage
                  src="../images/404_2.png"
                  alt="A dinosaur"
                  aspectRatio={4 / 5}
                  transfromOptions={{ fit: "fill", scaleX: -1 }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

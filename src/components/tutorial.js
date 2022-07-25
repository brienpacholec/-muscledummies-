import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import Embed from "./embed"

const Tutorial = () => {
  return (
    <Container>
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
            textAlign: "center",
          }}
        >
          <Embed
            videoSrcURL={"https://www.youtube.com/embed/g95VAeOe0YQ"}
            videoTitle={"How to mint a Muscle Dummy"}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Tutorial

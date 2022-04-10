import React from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

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
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Gagalin",
              color: "primary.main",
            }}
          >
            WE UNDERSTAND SOME OF OUR CUSTOMERS MAY BE NEW TO THIS OR THE WORLD
            OF NFT'S MAY SEEM FOREIGN, BUT WE MADE SURE TO PROVIDE YOU ALL THE
            INFO YOU NEED IN OUR DISCORD. SOME MAY EVEN BE NEW TO DISCORD. NO
            WORRIES! DISCORD IS AN INCREDIBLY EASY APP TO NAVIGATE AND WE HAVE A{" "}
            <a
              href="https://youtu.be/4XFSR8M8usc"
              style={{ color: "#86FC4D", textDecoration: "underline" }}
            >
              TUTORIAL VIDEO
            </a>{" "}
            ON HOW TO JOIN AND BE ENGAGED.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Tutorial

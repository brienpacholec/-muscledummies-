import React from "react"
import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const NotableDummies = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        marginBottom: 2,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
          paddingY: { xs: 2, md: 0 },
        }}
      >
        <StaticImage
          src="../images/canva_components/footer.png"
          alt="The Athlete"
          placeholder="blurred"
          layout="constrained"
          height={450}
        />
      </Grid>
    </Grid>
  )
}

export default NotableDummies

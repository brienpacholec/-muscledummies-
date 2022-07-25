import React from "react"
import PropTypes from "prop-types"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"

const PlanPicker = ({ current }) => {
  const currentCollections = [
    {
      name: "Athletes",
      tag: "Athlete",
    },
    {
      name: "Football",
      tag: "Football",
    },
    {
      name: "Mens",
      tag: "Men",
    },
    {
      name: "Womens",
      tag: "Women",
    },
  ]
  return (
    <Container>
      <Grid
        container
        sx={{
          backgroundColor: "rgba(150, 150, 150, 0.25)",
          border: "2px solid #000",
        }}
      >
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
            SHOP OUR PROFESSIONAL PLANS
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {currentCollections.map((collection, index) => (
            <MenuItem
              component="a"
              href={`/shop/${collection.name.replace(" ", "-").toLowerCase()}`}
              value={collection.name}
              key={index}
              sx={{
                fontFamily: "Cooper Hewitt",
                color:
                  collection.name === current || current === ""
                    ? "white"
                    : "gray",
              }}
            >
              {collection.name}
            </MenuItem>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

PlanPicker.propTypes = {
  current: PropTypes.string,
}

export default PlanPicker

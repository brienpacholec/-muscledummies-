import React from "react"
import PropTypes from "prop-types"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"

import Typography from "@mui/material/Typography"

const PlanCard = ({ plan, redirectToCheckout }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexBasis: { xs: "55%", sm: "40%", md: "25%", lg: "15%" },
        margin: 1,
      }}
    >
      {plan.product.images[0] ? (
        <CardMedia
          component="img"
          height="194"
          image={plan.product.images[0]}
          alt="An image of an individual working out"
          sx={{
            objectFit: "fill",
          }}
        />
      ) : (
        <CardMedia
          component="img"
          height="194"
          image="/images/logos/md_logo.png"
          alt="Paella dish"
          sx={{
            objectFit: "fill",
            backgroundColor: "black",
            padding: { xs: 2, sm: 3, md: 5 },
          }}
        />
      )}

      <CardContent
        sx={{
          textAlign: "left",
          marginBottom: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gagalin",
            fontSize: "1rem",
            textAlign: "-webkit-center"
          }}
        >
          {"$" + (plan.unit_amount / 100).toFixed(2)}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Cooper Hewitt",
            fontSize: ".8rem",
          }}
        >
          <em>{plan.product.description}</em>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          paddingTop: 0,
        }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={() => redirectToCheckout(plan.id)}
        >
          BUY NOW
        </Button>
      </CardActions>
    </Card>
  )
}

PlanCard.propTypes = {
  plan: PropTypes.object.isRequired,
  redirectToCheckout: PropTypes.func.isRequired,
}

export default PlanCard

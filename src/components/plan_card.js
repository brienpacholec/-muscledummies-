import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material"

const PlanCard = ({ plan, type }) => {

  var checkoutUrl = plan.onlineStorePreviewUrl;
  if(plan.sellingPlanGroupCount !== 0 ){
    checkoutUrl += "?recurpay_preview=true&snippet_status=false"
  }

  console.log(plan.tags);

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
      {plan.media.length > 0 ? (
        <CardMedia
          component="img"
          height="194"
          src={plan.media[0].preview.image.src}
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
            textAlign: "-webkit-center",
          }}
        >
          
          {type !== "subscriptions"&& (
            <>
              {"$" + (plan.priceRange.maxVariantPrice.amount / 100).toFixed(2)}{" "}
            </>
          )}
          
        </Typography>
        <Typography
          sx={{
            fontFamily: "Cooper Hewitt",
            fontSize: ".8rem",
          }}
        >
          <div dangerouslySetInnerHTML={ {__html: plan.descriptionHtml}}></div>
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
          href={checkoutUrl}
        >
          
          {type !== "subscriptions" ? (
            <>
              BUY NOW
            </>
          ) : (
            <>
              SUBSCRIBE
            </>
          )}
        </Button>
      </CardActions>
    </Card>
  )
}

PlanCard.propTypes = {
  plan: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}

export default PlanCard

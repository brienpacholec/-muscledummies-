import React from "react"
import PropTypes from "prop-types"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
const Loading = ({ rednderText, src }) => {
  let displayText = ""
  if (src === "index") {
    displayText = "READY TO CONQUER THE HEALTH AND FITNESS INDUSTRY"
  } else if (src === "plans") {
    displayText = "LOADING YOUR PERSONALIZED HEALTH AND FITNESS PLANS"
  }
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {rednderText && (
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              textShadow: "4px 4px black",
            }}
          >
            {displayText}
          </Typography>
        )}

        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
        </div>
      </Grid>
    </>
  )
}

Loading.propTypes = {
  rednderText: PropTypes.bool.isRequired,
  src: PropTypes.string,
}
export default Loading

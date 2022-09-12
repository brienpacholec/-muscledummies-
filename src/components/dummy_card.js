import React from "react"
import PropTypes from "prop-types"
import { Card, CardMedia, CardContent, Button, Typography } from "@mui/material"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
const DummyCard = ({ id }) => {
  const base_src =
    "https://gateway.pinata.cloud/ipfs/QmUQxFc96UxhZxKji9htK6pq279o1YyS1EX9cL7dnwbtpA/"
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: 1,
        backgroundColor: "rgba(200, 200, 200, .4)",
      }}
    >
      <CardMedia
        component="img"
        src={base_src + id + ".png"}
        alt="Recent Muscle Dumy"
        sx={{
          objectFit: "fill",
          maxHeight: "300px",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginY: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gagalin",
            fontSize: "2rem",
            color: "white",
            textAlign: "-webkit-center",
            marginY: 0,
          }}
        >
          #{id}
        </Typography>

        <Button
          href={`https://opensea.io/assets/ethereum/0x8ad9bd8a106ba70dfe3f58e60f95c09be63df5fd/${id}`}
          target="_blank"
          variant="contained"
          color="primary"
          size="small"
          sx={{
            minWidth: "unset",
          }}
        >
          <OpenInNewIcon
            sx={{
              fontSize: "16px",
            }}
          />
        </Button>
      </CardContent>
    </Card>

    // href=
  )
}
DummyCard.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DummyCard

import React, { useEffect, useState } from "react"
import { Container, Grid, Typography, IconButton } from "@mui/material"
import { Link } from "gatsby"
import { getCurrentStatus } from "../utils/interact.js"
import DummyCard from "./dummy_card.js"

const MostRecentDummies = () => {
  const [totalSupply, setTotalSupply] = useState("")
  const [mostRecentDummies, setMostRecentDummies] = useState([])
  useEffect(() => {
    async function fetchData() {
      const { totalSupply } = await getCurrentStatus()
      const recentDummyIds = [
        (totalSupply - 2).toString(),
        (totalSupply - 1).toString(),
        totalSupply.toString(),
      ]
      setMostRecentDummies(recentDummyIds)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
            <Typography
            variant="h3"
            display="inline"
            sx={{
              fontFamily: "Gagalin",
            }}
          >
            THE NEW KIDS ON THE BLOCK
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "wrap",
          }}
        >
          {mostRecentDummies.map((id, index) => (
            <DummyCard id={id} key={index} />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default MostRecentDummies

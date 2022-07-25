import React, { useEffect, useState } from "react"

import { Container, Grid, Box, Typography, Button } from "@mui/material"

import Countdown from "react-countdown"
import CountUp from "react-countup"

import { getCurrentStatus, checkOwnership } from "../utils/interact.js"
import Minter from "./minter"

const Status = () => {
  const [isPaused, setIsPaused] = useState(true)
  const [maxSupply, setMaxSupply] = useState("")
  const [totalSupply, setTotalSupply] = useState("")
  const [mintingDatePassed, setMintingDatePassed] = useState("")
  const [dummieOwner, setDummieOwner] = useState(false)

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span>
        {days > 0 && <>{days} days</>} {hours > 0 && <>{hours} hours</>}{" "}
        {minutes > 0 && <>{minutes} minutes</>} {seconds} seconds
      </span>
    )
  }

  useEffect(() => {
    async function fetchData() {
      const { currentStatus, maxSupply, totalSupply, mintingDatePassed } =
        await getCurrentStatus()
      setIsPaused(currentStatus)
      setMaxSupply(maxSupply)
      setTotalSupply(totalSupply)
      setMintingDatePassed(mintingDatePassed)

      const owner = await checkOwnership()
      setDummieOwner(owner)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingY: 2,
        }}
      >
        <Grid
          item
          xs={8}
          sm={6}
          md={4}
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(150, 150, 150, 0.25)",
            border: "2px solid #000",
            borderRadius: 4,
          }}
        >
          {mintingDatePassed ? (
            <>
              {isPaused ? (
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Gagalin",
                    fontSize: { xs: "2rem", md: "3rem" },
                    paddingY: 1,
                  }}
                >
                  <span style={{ color: "white", textShadow: "2px 2px red" }}>
                    MINTING PAUSED
                  </span>
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Gagalin",
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    <span
                      style={{ color: "white", textShadow: "2px 2px green" }}
                    >
                      MINT NOW!
                    </span>
                  </Typography>

                  <Box
                    sx={{
                      display: { xs: "none", sm: "block" },
                      marginY: 1,
                    }}
                  >
                    <Minter />
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "block", sm: "none" },
                      marginBottom: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Cooper Hewitt",
                        fontSize: "10px",
                      }}
                    >
                      Minting is only supported on desktop.
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    <span
                      style={{ color: "white", textShadow: "2px 2px black" }}
                    >
                      Minted{" "}
                      <CountUp
                        id="counter-up"
                        end={totalSupply}
                        duration={3}
                        separator=","
                      />{" "}
                      out of {maxSupply} Muscle Dummies
                    </span>
                  </Typography>

                  {dummieOwner && (
                    <>
                      <Button
                        size="small"
                        variant="contained"
                        href="/plans"
                        sx={{ marginY: 2, fontFamily: "Cooper Hewitt" }}
                      >
                        VIEW YOUR HEALTH & FITNESS PLANS
                      </Button>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "2rem", md: "3rem" },
                  color: "white",
                  textShadow: "2px 2px green",
                }}
              >
                Minting in
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cooper Hewitt",
                  fontSize: { xs: "1rem" },
                  color: "white",
                  textShadow: "1px 1px green",
                }}
              >
                <Countdown
                  date={new Date("May 14, 2022 14:30:00")}
                  onComplete={() => setMintingDatePassed(true)}
                  renderer={renderer}
                />
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Status

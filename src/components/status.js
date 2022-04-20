import React, { useEffect, useState } from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Countdown from "react-countdown"
import CountUp from "react-countup"

import { getCurrentStatus } from "../utils/interact.js"
import Minter from "./minter"

const Status = () => {
  const [isPaused, setIsPaused] = useState(true)
  const [maxSupply, setMaxSupply] = useState("")
  const [totalSupply, setTotalSupply] = useState("")
  const [mintingDatePassed, setMintingDatePassed] = useState("")
  
  //TODO - maybe? lol
  // const [dummieOwner, setDummieOwner] = useState(false)

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span>
        {days > 0 && <>{days} days</>} {hours > 0 && <>{hours} hours</>} {minutes > 0 && <>{minutes} minutes</>} {seconds} seconds
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

      //TODO - maybe? lol
      // const owner = await checkOwnership()
      // setDummieOwner(owner)
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
                      marginY: 1,
                    }}
                  >
                    <Minter />
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
                  date={new Date("May 14, 2022 19:00:00")}
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

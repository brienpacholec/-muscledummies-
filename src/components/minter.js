import React, { useEffect, useState } from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"

import {
  connectWallet,
  getCurrentWalletConnected,
  getCurrentStatus,
  mintNFT,
} from "../utils/interact.js"

const Minter = () => {
  // STATE init
  const [walletAddress, setWallet] = useState("")
  const [status, setStatus] = useState("")
  const [mintStatus, setMintStatus] = useState("")
  const [mintMessage, setMintMessage] = useState("")
  const [isPaused, setIsPaused] = useState(true)
  const [mintingDatePassed, setMintingDatePassed] = useState("")
  const [userMintedTotal, setUserMintedTotal] = useState(0)
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setMintMessage("")
  }

  //ON load - CHECK if they are connected - INIT wallet change listener and minter
  useEffect(() => {
    async function fetchData() {
      addWalletListener()

      const { address, status, userMintedTotal } =
        await getCurrentWalletConnected()
      const { currentStatus, mintingDatePassed } = await getCurrentStatus()

      setWallet(address)
      setStatus(status)
      setIsPaused(currentStatus)
      setMintingDatePassed(mintingDatePassed)
      setUserMintedTotal(userMintedTotal)

      setLoaded(true)
    }
    fetchData()
  }, [])

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accounts => {
        if (accounts.length > 0) {
          setWallet(accounts[0])
          setStatus("MINT")
        } else {
          setWallet("")
          setStatus("CONNECT 🦊")
        }
      })
    } else {
      setStatus(
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          GET 🦊
        </a>
      )
    }
  }

  const connectWalletPressed = async () => {
    const { status, address, userMintedTotal } = await connectWallet()
    setStatus(status)
    setWallet(address)
    setUserMintedTotal(userMintedTotal)
  }

  const onMintPressed = async () => {
    const { mintStatus, mintMessage, addedAmount } = await mintNFT(
      walletAddress,
      1
    )
    setMintStatus(mintStatus)
    setMintMessage(mintMessage)
    if (mintMessage === "") {
      setUserMintedTotal(addedAmount)
    }
  }

  return (
    <>
      {loaded && (
        <>
          {}
          {walletAddress.length > 0 ? (
            <>
              <Button
                id="mint-btn"
                variant="contained"
                onClick={handleOpen}
                disabled={isPaused || !mintingDatePassed}
              >
                <Typography
                  sx={{
                    fontFamily: "Cooper Hewitt",
                    lineHeight: 1,
                  }}
                >
                  {status}
                </Typography>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 400, sm: 600 },
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    borderRadius: 4,
                    boxShadow: 24,
                    p: 4,
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h3"
                    sx={{
                      fontFamily: "Gagalin",
                    }}
                  >
                    MINT YOUR DUMMIES
                  </Typography>

                  <br />

                  {/* MAKE SURE USER MINTED is updated accordingly */}
                  {userMintedTotal < 5 ? (
                    <Button variant="contained" onClick={onMintPressed}>
                      MINT a Muscle Dummy
                    </Button>
                  ) : (
                    <Typography
                      sx={{
                        color: "#1b5704",
                        fontFamily: "Gagalin",
                        fontSize: "1.5rem",
                      }}
                    >
                      Congrats! You have minted the maximum amount of Muscle
                      Dummies!
                    </Typography>
                  )}

                  {mintMessage.length > 0 ? (
                    <Typography
                      sx={{ color: mintStatus, fontFamily: "Gagalin" }}
                    >
                      <p>{mintMessage}</p>
                    </Typography>
                  ) : (
                    " "
                  )}
                </Box>
              </Modal>
            </>
          ) : (
            <Button
              id="mint-btn"
              variant="contained"
              onClick={connectWalletPressed}
            >
              <Typography
                sx={{
                  fontFamily: "Cooper Hewitt",
                }}
              >
                {status}
              </Typography>
            </Button>
          )}
        </>
      )}
    </>
  )
}

export default Minter

import React from "react"
import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Slider from '@mui/material/Slider'
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
  getCurrentStatus
} from "../utils/interact.js"

const Minter = () => {
  //State variables
  const [walletAddress, setWallet] = useState("")
  const [status, setStatus] = useState("")
  const [amount, setAmount] = useState("")
  
  const [mintStatus, setMintStatus] = useState("")
  const [mintMessage, setMintMessage] = useState("")

  const [isPaused, setIsPaused] = useState("");

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setAmount(0)
    setMintMessage("")
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs: 400, sm: 600},
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    color: "black",
    textAlign: "center"
  }

  //ON page load - check to see if they have already connected to the site
  //INITs wallet change listener and mint checker
  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();

      setWallet(address)
      setStatus(status)

      const { isPaused } = await getCurrentStatus();
      setIsPaused(isPaused);

      addWalletListener()
    }
    fetchData()
  }, [])

  //CHECK to see if wallet address is ever changed
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
          INSTALL METAMASK 🦊
        </a>
      )
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet()
    setStatus(walletResponse.status)
    setWallet(walletResponse.address)
  }

  //WHEN mint is pressed
  const onMintPressed = async () => {
    const { mintStatus, mintMessage } = await mintNFT(walletAddress, amount)
    setAmount(0);
    setMintStatus(mintStatus);
    setMintMessage(mintMessage);
  }

  return (
    <>
      {}
      {walletAddress.length > 0 ? (
        <>
          <Button
          id="mint-btn"
          variant="contained"
          onClick={handleOpen}
          disabled={isPaused}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              lineHeight: 1
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
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h3"
                sx={{ 
                  fontFamily: "Gagalin",
                }}
              >
                MINT YOUR DUMMIES
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: "Cooper Hewitt",}}>
                How many would you like to mint? 
              </Typography>

              <Slider 
                defaultValue={0} 
                aria-label="Default" 
                valueLabelDisplay="auto"
                min={0}
                max={10}
                sx={{
                  color: "#000",
                  width: "50%"
                }}
                onChange={ (e, val) => setAmount(val)}
              />

              <br/>

              {amount > 0 ? (
                <>
                <Button variant="contained" onClick={onMintPressed}>MINT {amount} Muscle Dummies</Button>
                </>
              ): (
                <Button variant="contained" disabled>MINT {amount} Muscle Dummies</Button>
              )}

              {mintMessage.length > 0  ? (
                <Typography sx={{ color: mintStatus, fontFamily: "Gagalin",}}>
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
          // disabled={isPaused}
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
  )
}

export default Minter

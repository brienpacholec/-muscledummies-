import React from "react"
import ReactDOM from "react-dom"
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
  getTotalMinted,
  getUserMinted,
} from "../utils/interact.js"

const Minter = () => {
  //State variables
  const [walletAddress, setWallet] = useState("")
  const [status, setStatus] = useState("")
  const [amount, setAmount] = useState("")
  
  const [mintStatus, setMintStatus] = useState("")
  const [mintMessage, setMintMessage] = useState("")

  const [totalMinted, setTotalMinted] = useState("")
  const [userMinted, setUserMinted] = useState("")

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
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
      const { address, status } = await getCurrentWalletConnected()
      setWallet(address)
      setStatus(status)
      addWalletListener()
      getMinted(address)
    }
    fetchData()
  }, [])

  //CHECK to see if wallet address is ever changed
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accounts => {
        if (accounts.length > 0) {
          setWallet(accounts[0])
          setStatus("MINT 🌿")
        } else {
          setWallet("")
          setUserMinted("Connect to Metmask to see how many you've minted!")
          setStatus("CONNECT 🦊")
        }
      })
    } else {
      setStatus(
        <a
          target="_blank"
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
    getUserMinted(walletResponse.address).then(value => setUserMinted(value))
  }

  function getMinted(address) {
    getTotalMinted().then(value => setTotalMinted(value))
    getUserMinted(address).then(value => setUserMinted(value))
  }

  //WHEN mint is pressed
  const onMintPressed = async () => {
    const { mintStatus, mintMessage, addedAmount } = await mintNFT(walletAddress, amount)
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
            sx={{
              borderRadius: 10,
              color: "text.primary",
              flex: "right",
              border: 4,
              borderColor: "#FFF",
            }}
            onClick={handleOpen}
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
          sx={{
            borderRadius: 10,
            color: "text.primary",
            flex: "right",
            border: 4,
            borderColor: "#FFF",
          }}
          onClick={connectWalletPressed}
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
      )}
    </>
  )
}

export default Minter

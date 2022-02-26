import React from "react"
import ReactDOM from "react-dom"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
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
  const [totalMinted, setTotalMinted] = useState("")
  const [userMinted, setUserMinted] = useState("")

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
    const { status, addedAmount } = await mintNFT(walletAddress, amount)
    setStatus(status)
    // setUserMinted(userMinted + addedAmount); // TODO
  }

  return (
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
  )
}

export default Minter

import React from "react"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const contractABI = require("../artifacts/contract-abi.json")
const contractAddress = process.env.GATSBY_CONTRACT_ADDRESS
const web3 = createAlchemyWeb3(process.env.GATSBY_ALCHEMY_KEY)

//WHEN no wallet has been autenticated to the site yet
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      window.contract = await new web3.eth.Contract(
        contractABI,
        contractAddress
      )
      const userMintedTotal = await window.contract.methods
        .balanceOf(addressArray[0])
        .call()

      const obj = {
        status: "MINT",
        address: addressArray[0],
        userMintedTotal: Number(userMintedTotal),
      }
      return obj
    } catch (err) {
      alert(err.message)
      return {
        address: "",
        status: "CONNECT 🦊",
        userMintedTotal: 0,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          GET 🦊
        </a>
      ),
      userMintedTotal: 0,
    }
  }
}

//ON page load - check to see if a wallet has been connected
export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      if (addressArray.length > 0) {
        window.contract = await new web3.eth.Contract(
          contractABI,
          contractAddress
        )
        const userMintedTotal = await window.contract.methods
          .balanceOf(addressArray[0])
          .call()
        return {
          address: addressArray[0],
          status: "MINT",
          userMintedTotal: Number(userMintedTotal),
        }
      } else {
        return {
          address: "",
          status: "CONNECT 🦊",
          userMintedTotal: 0,
        }
      }
    } catch (err) {
      return {
        address: "",
        status: err.message,
        userMintedTotal: 0,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          GET 🦊
        </a>
      ),
    }
  }
}

//MINT a single NFT
export const mintNFT = async (walletAddress, amount) => {
  if (walletAddress === "") {
    return {
      mintStatus: "red", //false
      mintMessage: "Please reconnect your wallet!",
    }
  } else if (amount <= 0) {
    return {
      mintStatus: "red", //false
      mintMessage: "Please enter a valid amount",
    }
  }

  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress) //loadContract();
  const currentCost = (await window.contract.methods.cost().call()) * amount

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress,
    from: walletAddress,
    data: window.contract.methods
      .mintUser(walletAddress, parseInt(amount))
      .encodeABI(),
    value: currentCost.toString(16),
  }

  //APPROVE transaction via metamask
  try {
    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    })
    return {
      mintStatus: "#153c06", //SUCCESS
      mintMessage: "",
      addedAmount: parseInt(amount),
    }
  } catch (error) {
    return {
      mintStatus: "red", //FAILURE
      mintMessage: error.message,
      addedAmount: 0,
    }
  }
}

//GET setup information (currentStatus, maxSupply, totalSupply, remainingSupply)
export const getCurrentStatus = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress)
  const currentStatus = await window.contract.methods.paused().call()
  const maxSupply = await window.contract.methods.maxSupply().call()
  const totalSupply = await window.contract.methods.totalSupply().call()
  const mintingDatePassed = Date.now() >= new Date("May 14, 2022 14:30:00")

  return {
    currentStatus: currentStatus,
    maxSupply: maxSupply,
    totalSupply: totalSupply,
    mintingDatePassed: mintingDatePassed,
  }
}

export const checkOwnership = async () => {
  const connected = await getCurrentWalletConnected()
  if (connected.address !== "") {
    window.contract = await new web3.eth.Contract(contractABI, contractAddress)
    const balanceOf = Number(
      await window.contract.methods.balanceOf(connected.address).call()
    )
    if (balanceOf > 0) {
      return true
    }
  }
  return false
}

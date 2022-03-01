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
      const obj = {
        status: "MINT",
        address: addressArray[0],
      }
      return obj
    } catch (err) {
      alert(err.message)
      return {
        address: "",
        status: "CONNECT 🦊",
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
          INSTALL METAMASK 🦊
        </a>
      ),
    }
  }
}

//FUNCTION to mint the NFT
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
    data: window.contract.methods.mintUser(parseInt(amount)).encodeABI(),
    value: currentCost.toString(16),
  }

  //sign transaction via Metamask
  try {
    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    })
    return {
      mintStatus: "black", //true
      mintMessage: "Success! Please check your wallet in a few minutes!",
      addedAmount: parseInt(amount),
    }
  } catch (error) {
    return {
      mintStatus: "red", //false
      mintMessage: error.message,
      addedAmount: 0,
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
        return {
          address: addressArray[0],
          status: "MINT",
        }
      } else {
        return {
          address: "",
          status: "CONNECT 🦊",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: err.message,
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
          INSTALL 🦊
        </a>
      ),
    }
  }
}

//GET the total amount that have been minted
export const getTotalMinted = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress)
  const result = await window.contract.methods.totalSupply().call()
  return result
}

//GET the total amount the user has minted
export const getUserMinted = async address => {
  if (address !== "") {
    window.contract = await new web3.eth.Contract(contractABI, contractAddress)
    const result = await window.contract.methods.balanceOf(address).call()
    return result
  } else {
    return "Connect to Metmask to see how many you've minted!"
  }
}

export const getCurrentStatus = async () => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddress)
  const status = await window.contract.methods.paused().call()
  const totalMinted = await window.contract.methods.totalSupply().call()
  return {
    isPaused: status,
    totalMinted: totalMinted,
  }
}

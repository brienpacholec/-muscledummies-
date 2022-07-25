import React from "react"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Faq = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontFamily: "Gagalin",
          letterSpacing: 10,
          color: "primary.main",
          textShadow:
            "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15), 4px 5px 3px rgba(0,0,0,0.48)",
        }}
      >
        FAQ
      </Typography>

      <hr />

      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "#FFF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            HOW MANY MUSCLE DUMMIES ARE THERE?
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingY: 0,
            marginY: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            There is a fixed, competitive amount of 333 Muscle Dummies
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "#FFF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            HOW MUCH DO THEY COST TO MINT?
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingY: 0,
            marginY: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            During our normal public sale, each Dummy will cost .07 ETH.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "#FFF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            WHAT WALLETS CAN I USE TO MINT?
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingY: 0,
            marginY: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Metamask will be the only accepted wallet to mint Muscle Dummies. Be
            sure you have enough ETH in your Metamask to cover the mint price as
            well as the gas fees. We recommend having 0.9 ETH in your wallet to
            ensure your spot.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "#FFF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            WHERE CAN I SEE MY MUSCLE DUMMY?
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingY: 0,
            marginY: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            You can view your Muscle Dummy by linking your Metamask wallet to
            OpenSea.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "#FFF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            WHY WOULD I EVEN CONSIDER BUYING A MUSCLE DUMMY?
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingY: 0,
            marginY: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Muscle Dummies are one of the only NFTs on the market that offer
            instant utility. The immediate, all-inclusive access to different
            workouts and meal plans that are worth more than the NFTs themselves
            make us unique. We also have ambitious plans post-mint so make sure
            to check out our vision.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "#FFF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            WHY WOULDN'T I JUST BUY A WORKOUT/MEAL PLAN?
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingY: 0,
            marginY: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            NFTs are the future and hold value in themselves. At Muscle Dummies,
            we want to give our community as much value as we can. Although this
            will be an option in the future with the limited number of NFTs
            offered, we want to make sure those who believe in our project and
            those who mint are compensated with more value than they pay!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "#FFF",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            CAN YOU FURTHER CONVINCE ME TO BUY A MUSCLE DUMMY?
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            paddingY: 0,
            marginY: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Yes! Muscle Dummies are an incredible collection of NFTs that not
            only provide their holders with instant utility, but also provide
            access to an amazing community full of like-minded individuals and
            untapped fitness opportunities in the real world and METAVERSE!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <hr />
    </>
  )
}

export default Faq

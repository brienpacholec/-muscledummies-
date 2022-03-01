import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Utility = () => {
  return (
    <Container
      id=""
      sx={{
        marginY: { xs: 2, md: 5 },
      }}
    >
      <Grid
        container
        sx={{
          display: { sm: "flex", md: "none" },
          marginTop: { xs: 0, md: 3 },
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
          }}
          data-aos="fade-right"
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "#FFF",
              fontSize: { xs: "2rem", sm: "3.5rem" },
            }}
          >
            BENEFITS AND UTILITY
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          marginTop: { xs: 0, md: 3 },
        }}
        data-aos="fade-right"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            textAlign: { sm: "left", md: "center" },
            marginY: { sm: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "primary.main",
            }}
          >
            IMMEDIATE ACCESS TO OUR WORKOUT & MEAL PLAN VAULT
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Mint one of our Dummies, verify your wallet and gain access to our
            various workout and meal plans for individuals with a variety of
            goals - valued at more than the price to mint a Dummy. Only the
            first 3,333 minters will have immediate access!
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            textAlign: "center",
            display: { xs: "none", md: "unset" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "#FFF",
              fontSize: { xs: "2rem", sm: "3.5rem" },
            }}
          >
            BENEFITS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "primary.main",
              fontSize: { xs: "2rem", sm: "3.5rem" },
            }}
          >
            AND
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "#FFF",
              fontSize: { xs: "2rem", sm: "3.5rem" },
            }}
          >
            UTILITY
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            textAlign: { sm: "left", md: "center" },
            marginY: { sm: 2, md: 0 },
            alignSelf: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            VALUE OF YOUR DUMMY
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Be one of the lucky few to mint our super-rare NFTs or the legendary
            metallic Dummy to win exclusive prizes, such as ETH, gym
            memberships, and more!
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          marginTop: { xs: 0, md: 3 },
        }}
        data-aos="fade-left"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            textAlign: { sm: "left", md: "center" },
            alignSelf: "center",
            marginY: { sm: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            PRIVATE ACCESS
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Hold your Dummies to gain access to exclusive events, networking
            opportunities, updated research, and private discord channels.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            textAlign: { sm: "left", md: "center" },
            marginY: { sm: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            COMMUNITY
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Our community will be free to enter, but we will have another
            community for our true believers. This will be where you can talk
            and network with our collab influencers. This will also be where you
            will get private insights into our next steps.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            textAlign: { sm: "left", md: "center" },
            alignSelf: "center",
            marginY: { sm: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            OUR METAVERSE
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            The Muscle Dummies metaverse will be something truly special. A
            place where you can earn $MUSL coins to redeem for Merch, Supps,
            Memberships + More!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Utility

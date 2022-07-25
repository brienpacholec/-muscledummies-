import React from "react"
import { Grid, Typography, IconButton } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

const ElevatorPitch = () => {
  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          paddingTop: 10,
          paddingBottom: 5,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            className="neon"
            sx={{
              color: "primary.main",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
            }}
          >
            WELCOME TO MUSCLE DUMMIES
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} sx={{ textAlign: "-webkit-center" }}>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Muscle Dummies is a revolutionary health and fitness brand geared
            towards making better humans and athletes through the usage of
            plans, personal coaching, and first-hand experience. Our goal is to
            help anyone achieve their health and fitness goals in the most
            efficient way possible. MD was founded by 3 lifelong friends who are
            passionate about Health and Fitness, but more specifically taking
            control of your own life, living happier, being a better member of
            society, and offering alternatives to Modern Medicine.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "-webkit-center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Gagalin",
              color: "white",
              fontSize: "3rem",
              textShadow: "2px 2px #0F6907",
            }}
          >
            FOLLOW US!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "-webkit-center",
          }}
        >
          <IconButton
            aria-label="Instagram"
            sx={{ color: "white" }}
            href="https://www.instagram.com/muscledummies/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>

          <Typography
            display="inline"
            sx={{
              fontFamily: "Gagalin",
              color: "white",
              textShadow: "2px 2px #0F6907",
            }}
          >
            @muscledummies
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "-webkit-center",
          }}
        >
          <IconButton
            aria-label="Tiktok"
            sx={{ color: "white" }}
            href="https://www.tiktok.com/@muscle_dummies"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </IconButton>

          <Typography
            display="inline"
            sx={{
              fontFamily: "Gagalin",
              color: "white",
              textShadow: "2px 2px #0F6907",
            }}
          >
            @muscle_dummies
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default ElevatorPitch

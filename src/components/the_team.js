import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"

const TheTeam = () => {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            className="neonPink"
            variant="h2"
            display="inline"
            sx={{
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "2rem", sm: "2.25rem", md: "3.75rem" },
            }}
          >
            MEET THE{" "}
          </Typography>
          <Typography
            variant="h1"
            display="inline"
            sx={{
              fontFamily: "Gagalin",
              color: "#0003FF",
              fontSize: { xs: "3rem", sm: "4.5rem", md: "6rem" },
            }}
          >
            FOUNDERS
          </Typography>
        </Grid>
      </Grid>

      {/* ISAAC */}
      <Grid
        container
        sx={{
          display: "flex",
          marginY: 2,
        }}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "right" },
            paddingRight: { xs: 0, md: 5 },
          }}
        >
          <StaticImage
            src="../images/dummies/athlete.png"
            alt="The Athlete"
            placeholder="blurred"
            layout="constrained"
            height={200}
            width-={200}
            imgStyle={{
              borderRadius: "50%",
              border: "5px solid #86FC4D",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "primary.main",
            }}
          >
            THE ATHLETE
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Isaac founded Muscle Dummies. Isaac is a Division 1 American
            Football player, artist, and hustling entrepreneur.
          </Typography>
        </Grid>
      </Grid>

      {/* JOHNNY */}
      <Grid
        container
        sx={{
          display: "flex",
          marginY: 2,
        }}
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "right" },
            paddingRight: { xs: 0, md: 5 },
          }}
        >
          <StaticImage
            src="../images/dummies/doctor.png"
            alt="The Athlete"
            placeholder="blurred"
            layout="constrained"
            height={200}
            width-={200}
            imgStyle={{
              borderRadius: "50%",
              border: "5px solid #9420CB",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          sx={{
            textAlign: { xs: "center", sm: "left" },
            alignSelf: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "#9420CB",
            }}
          >
            THE DOCTOR
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Johnny is a Student Doctor studying to become a Doctor of
            Osteopathic Medicine. Johnny has helped multiple clients lose
            weight, overcome their medical problems, and put serious muscle on.
          </Typography>
        </Grid>
      </Grid>

      {/* JAKE */}
      <Grid
        container
        sx={{
          display: "flex",
          marginY: 2,
        }}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <Grid
          item
          xs={12}
          sm={2}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "right" },
            paddingRight: { xs: 0, md: 5 },
          }}
        >
          <StaticImage
            src="../images/dummies/specialist.png"
            alt="The Athlete"
            placeholder="blurred"
            layout="constrained"
            height={200}
            width-={200}
            imgStyle={{
              borderRadius: "50%",
              border: "5px solid #FF0018",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          sx={{
            textAlign: { xs: "center", sm: "left" },
            alignSelf: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "#FF0018",
            }}
          >
            THE SPECIALIST
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Jake is an absolute grinder. Jake is a pilot, drone specialist, and
            now an extreme racing guru.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TheTeam

import React from "react"
import { Container, Grid, Typography, IconButton } from "@mui/material"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const TheTeam = () => {
  return (
    <Container
      sx={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
      }}
    >
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
              textShadow: "2px 2px white",
            }}
          >
            TEAM
          </Typography>
        </Grid>
      </Grid>

      {/* ISAAC */}
      <Grid
        container
        sx={{
          display: "flex",
          paddingY: 2,
        }}
        //data-aos="fade-right"
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
          <Link>
            <StaticImage
              src="../images/team/owner.jpeg"
              alt="The Athlete"
              placeholder="blurred"
              layout="constrained"
              height={200}
              width-={200}
              imgStyle={{
                borderRadius: "50%",
                border: "3px solid #86FC4D",
              }}
            />
          </Link>
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
            Our founder, performance expert, and artist, Isaac is a current
            collegiate football player producing high performing, disciplined,
            and future premier athletes. From recruiting, to scholarships, Isaac
            teaches all things massive action and effectiveness in training to
            develop and accelerate athletic capability.
          </Typography>
          <IconButton
            aria-label="faLinkedin"
            sx={{ color: "white" }}
            href="https://www.linkedin.com/in/isaac-hadac-a71063234/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
          <IconButton
            aria-label="Tiktok"
            sx={{ color: "white" }}
            href="https://www.tiktok.com/@coach_isaac"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            sx={{ color: "white" }}
            href="https://www.instagram.com/isaac_hadac/?hl=en"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Grid>
      </Grid>

      {/* JOHNNY */}
      <Grid
        container
        sx={{
          display: "flex",
          paddingY: 2,
        }}
        //data-aos="fade-left"
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
          <Link>
            <StaticImage
              src="../images/team/doctor.jpeg"
              alt="The Doctor"
              placeholder="blurred"
              layout="constrained"
              height={200}
              width-={200}
              imgStyle={{
                borderRadius: "50%",
                border: "3px solid #9420CB",
              }}
            />
          </Link>
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
            Johnny is our Student Doctor, Culinary Medicine Specialist, and
            health curator. Johnny specializes in holistic medicine, weight
            management, and mental health to optimize human performance. Johnny
            has helped thousands of clients through a comprehensive approach to
            healing, medicine, and well-being.
          </Typography>

          <IconButton
            aria-label="Linkedin"
            sx={{ color: "white" }}
            href="https://www.linkedin.com/in/johnny-hadac-6a38aa126/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
          <IconButton
            aria-label="Tiktok"
            sx={{ color: "white" }}
            href="https://www.tiktok.com/@johnnydhadac?lang=en"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            sx={{ color: "white" }}
            href="https://www.instagram.com/johnnydhadac/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Grid>
      </Grid>

      {/* JAKE */}
      <Grid
        container
        sx={{
          display: "flex",
          paddingY: 2,
        }}
        //data-aos="fade-right"
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
          <Link>
            <StaticImage
              src="../images/team/specialist.jpeg"
              alt="The Specialist"
              placeholder="blurred"
              layout="constrained"
              height={200}
              width-={200}
              imgStyle={{
                borderRadius: "50%",
                border: "3px solid #FF0018",
              }}
            />
          </Link>
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
            Jake is our research executive and racing specialist. From Iron
            Man’s to marathons, Jake is trained in endurance, mental toughness,
            and functionality. Between running 40 miles a week, intense weight
            training, and enhancing the group on all things health related, Jake
            is deeply educated in recovery and time management.
          </Typography>

          <IconButton
            aria-label="Linkedin"
            sx={{ color: "white" }}
            href="https://www.linkedin.com/in/jacob-cook-0a14581b7/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
          <IconButton
            aria-label="Tiktok"
            sx={{ color: "white" }}
            href="https://www.tiktok.com/@jakecookmd?lang=en"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            sx={{ color: "white" }}
            href="https://www.instagram.com/jakecookmd/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Grid>
      </Grid>

      {/* BRIEN */}
      <Grid
        container
        sx={{
          display: "flex",
          paddingY: 2,
        }}
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
          <Link>
            <StaticImage
              src="../images/team/developer.jpeg"
              alt="The Developer"
              placeholder="blurred"
              layout="constrained"
              height={200}
              width-={200}
              imgStyle={{
                borderRadius: "50%",
                border: "3px solid #00dfeb",
              }}
            />
          </Link>
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
              color: "#00dfeb",
            }}
          >
            THE DEVELOPER
          </Typography>

          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
            }}
          >
            Brien is our Web3 developer, software technologist, and
            environmentalist. Self taught, Brien manages Web3 integration and
            all things blockchain. Catch Brien conquering novel US national
            parks weekly by training for supreme cardiovascular fitness while
            defending the beauty of the planet.
          </Typography>

          <IconButton
            aria-label="Linkedin"
            sx={{ color: "white" }}
            href="https://www.linkedin.com/in/brien-pacholec-a59b6ab4/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            sx={{ color: "white" }}
            href="https://www.instagram.com/brienpacholec/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TheTeam

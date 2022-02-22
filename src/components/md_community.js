import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"

const MDCommunity = () => {
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
          display: "flex",
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
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Gagalin",
              color: "#FFF",
              fontSize: { xs: "2rem", sm: "3.5rem" },
            }}
          >
            MUSCLE DUMMIES COMMUNITY
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            marginBottom: { xs: 2, md: 4 },
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <StaticImage
            src="../images/canva_components/holders_trainings.png"
            alt="Muscle Shaker"
            placeholder="blurred"
            layout="constrained"
            height={91}
            width={300}
          />
        </Grid>

        <Grid
          className="neonPink"
          item
          xs={6}
          sx={{
            textAlign: "center",
            marginBottom: 3,
          }}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
              fontSize: { xs: "1.5rem", sm: "1.9rem", md: "3rem" },
            }}
          >
            Physical Training
          </Typography>
        </Grid>

        <Grid
          className="neonPink"
          item
          xs={6}
          sx={{
            textAlign: "center",
            marginBottom: 3,
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
              fontSize: { xs: "1.5rem", sm: "1.9rem", md: "3rem" },
            }}
          >
            Mental Training
          </Typography>
        </Grid>

        <Grid
          className="neonPink"
          item
          xs={12}
          sx={{
            textAlign: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
              fontSize: { xs: "1.5rem", sm: "1.9rem", md: "3rem" },
            }}
          >
            Mindset Training
          </Typography>
        </Grid>

        <Grid
          className="neonPink"
          item
          xs={6}
          sx={{
            textAlign: "center",
            marginTop: 3,
          }}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
              fontSize: { xs: "1.5rem", sm: "1.9rem", md: "3rem" },
            }}
          >
            Nutritional Training
          </Typography>
        </Grid>

        <Grid
          className="neonPink"
          item
          xs={6}
          sx={{
            textAlign: "center",
            marginTop: 3,
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Cooper Hewitt",
              color: "#FFF",
              fontSize: { xs: "1.5rem", sm: "1.9rem", md: "3rem" },
            }}
          >
            Spiritual Training
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MDCommunity

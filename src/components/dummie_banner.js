import React, { useState } from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"

const DummierBanner = () => {
  const [activeImage1, setActiveImage1] = useState(false)
  const [activeImage2, setActiveImage2] = useState(false)
  const [activeImage3, setActiveImage3] = useState(false)
  const [activeImage4, setActiveImage4] = useState(false)

  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        container
        sx={{
          display: "flex",
          placeItems: "center",
        }}
      >
        {/* IMAGE 1 */}
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "#69bfee",
            paddingTop: 0,
            paddingBottom: 3,
          }}
        >
          <div
            onMouseOver={() => setActiveImage1("1")}
            onMouseLeave={() => setActiveImage1("2")}
          >
            {activeImage1 === "1" ? (
              <StaticImage
                src="../images/dummies/1.png"
                alt="Muscle Dummie Robot"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            ) : (
              <StaticImage
                id="hover"
                src="../images/dummies/2.png"
                alt="Muscle Dummie Sandbag"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            )}
          </div>
        </Grid>

        {/* IMAGE 2 */}
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "#55AE96",
            paddingTop: 0,
            paddingBottom: 3,
          }}
        >
          <div
            onMouseOver={() => setActiveImage2("3")}
            onMouseLeave={() => setActiveImage2("4")}
          >
            {activeImage2 === "3" ? (
              <StaticImage
                src="../images/dummies/3.png"
                alt="Muscle Dummie Sandbag"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            ) : (
              <StaticImage
                id="hover"
                src="../images/dummies/4.png"
                alt="Muscle Dummie Robot"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            )}
          </div>
        </Grid>

        {/* IMAGE 3 */}
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "flex" },
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "#D7C56E",
            paddingTop: 0,
            paddingBottom: 3,
          }}
        >
          <div
            onMouseOver={() => setActiveImage3("5")}
            onMouseLeave={() => setActiveImage3("6")}
          >
            {activeImage3 === "5" ? (
              <StaticImage
                src="../images/dummies/5.png"
                alt="Muscle Dummie Robot"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            ) : (
              <StaticImage
                id="hover"
                src="../images/dummies/6.png"
                alt="Muscle Dummie Sandbag"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            )}
          </div>
        </Grid>

        {/* IMAGE 4 */}
        <Grid
          item
          md={3}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "#BF2F40",
            paddingTop: 0,
            paddingBottom: 3,
          }}
        >
          <div
            onMouseOver={() => setActiveImage4("7")}
            onMouseLeave={() => setActiveImage4("8")}
          >
            {activeImage4 === "7" ? (
              <StaticImage
                src="../images/dummies/7.png"
                alt="Muscle Dummie Sandbag"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            ) : (
              <StaticImage
                id="hover"
                src="../images/dummies/8.png"
                alt="Muscle Dummie Robot"
                placeholder="blurred"
                layout="constrained"
                height={500}
                width-={500}
              />
            )}
          </div>
        </Grid>

        {/* TEXT */}
        <Grid
          item
          lg={12}
          sx={{
            display: "flex",
            position: "absolute",
            width: "-webkit-fill-available",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Gagalin",
              letterSpacing: 5,
              fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
              color: "#FFF",
              textShadow:
                "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15), 4px 5px 3px rgba(0,0,0,0.48)",
            }}
          >
            MUSCLE DUMMIES
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default DummierBanner

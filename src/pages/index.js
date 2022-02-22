import React, { useEffect } from "react"
import Layout from "../components/layout"
import Container from "@mui/material/Container"
import Linkbar from "../components/linkbar"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import DummieHero from "../components/dummie_hero"
import AOS from "aos"
import "aos/dist/aos.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import Button from "@mui/material/Button"
import DummierBanner from "../components/dummie_banner"
import Utility from "../components/utility"
import MDCommunity from "../components/md_community"
import Roadmap from "../components/roadmap"
import TheTeam from "../components/the_team"
import Faq from "../components/faq"

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])

  return (
    <Layout>
      {/* HEADER & WELCOME */}
      <Container
        className="bg-1"
        maxWidth={false}
        disableGutters
        sx={{
          marginTop: { xs: 0, md: -30 },
        }}
      >
        {/* HEADER */}
        <Container
          sx={{
            paddingTop: { xs: 0, md: 30 },
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{ display: "flex", marginTop: { xs: 0, md: 3 } }}
            data-aos="fade-up"
          >
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#FFF",
                  fontFamily: "Cooper Hewitt",
                }}
              >
                READY TO CONQUER THE HEALTH AND FITNESS INDUSTRY
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h3"
                display="inline"
                sx={{
                  color: "#FFF",
                  fontFamily: "Gagalin",
                }}
              >
                Join{" "}
              </Typography>

              <Typography
                variant="h3"
                display="inline"
                sx={{
                  color: "primary.main",
                  fontFamily: "Gagalin",
                }}
              >
                Muscle Dummies
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
                marginY: { xs: 0, md: 2 },
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Cooper Hewitt",
                }}
              >
                Muscle Dummies is your chance to be a part of the greatest
                takeover in the Health and Fitness Industry
              </Typography>
            </Grid>
          </Grid>

          <DummieHero />
        </Container>

        {/* Welcome */}
        <Container
          data-aos="fade-up-left"
          data-aos-duration="1500"
          sx={{
            paddingY: 5,
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
            >
              <Typography
                className="neon"
                variant="h3"
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "2rem", sm: "3rem" },
                  fontFamily: "Cooper Hewitt",
                }}
              >
                WELCOME TO MUSCLE DUMMIES
              </Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              sx={{
                textAlign: "center",
                justifyContet: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
                  fontFamily: "Cooper Hewitt",
                }}
              >
                Join this exclusive NFT project that offers instant utility
                valued higher than the cost to mint, one of a kind art, and
                great long-term benefits!
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ display: "flex", justifyContent: "center", marginTop: -3 }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                textAlign: "center",
                justifyContet: "center",
              }}
            >
              <Link to="https://www.google.com">
                <StaticImage
                  src="../images/canva_components/view_collection.png"
                  alt="Muscle Shaker"
                  placeholder="blurred"
                  layout="constrained"
                  imgStyle={{
                    marginTop: 30,
                  }}
                />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Container>

      {/* Parallax Dummies */}
      <Container maxWidth={false} disableGutters>
        <DummierBanner />
      </Container>

      {/* ABOUT & COMMUNITY */}
      <Container
        className="bg-2"
        maxWidth={false}
        disableGutters
        sx={{
          marginY: 0,
        }}
      >
        {/* About */}
        <Container id="about" data-aos="fade-up-right" data-aos-duration="1500">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              placeItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "initial" },
                }}
              >
                <StaticImage
                  className="spin"
                  src="../images/canva_components/robot_circle.png"
                  alt="Muscle Dummie"
                  placeholder="blurred"
                  layout="constrained"
                  width={400}
                  height={400}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              sx={{
                textAlign: "left",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFF",
                  fontFamily: "Gagalin",
                }}
              >
                What are
              </Typography>

              <Typography
                variant="h3"
                display="inline"
                sx={{
                  color: "primary.main",
                  fontFamily: "Gagalin",
                }}
              >
                Muscle Dummies
              </Typography>

              <Typography
                variant="h3"
                display="inline"
                sx={{
                  color: "#FFF",
                  fontFamily: "Gagalin",
                }}
              >
                ?
              </Typography>

              <hr />

              <Typography
                variant="h5"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
                  fontFamily: "Cooper Hewitt",
                }}
              >
                <FitnessCenterIcon
                  sx={{
                    fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
                  }}
                />{" "}
                Muscle Dummies are a unique collection of 3,333 one-ofone NFTs
                on the ETH blockchain
              </Typography>

              <br />

              <Typography
                variant="h5"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
                  fontFamily: "Cooper Hewitt",
                }}
              >
                <FitnessCenterIcon
                  sx={{
                    fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
                  }}
                />{" "}
                Muscle Dummies' mission is to build the best Health and Fitness
                community on the planet. we want to give back to the industry
                that has given so much to us
              </Typography>

              <hr />
            </Grid>
          </Grid>
        </Container>

        {/* Community */}
        <Container id="community" sx={{ marginY: { xs: 2, md: 5 } }}>
          <Grid
            container
            sx={{
              display: "flex",
              marginTop: { xs: 0, md: 3 },
              paddingX: 5,
              borderLeft: "4mm ridge rgb(77, 255, 0, .6)",
              borderRight: { xs: "4mm ridge rgb(77, 255, 0, .6)", md: "none" },
              placeItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{
                paddingRight: { xs: 0, md: 5 },
              }}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: 16, sm: "1rem", md: "1.3rem" },
                  fontFamily: "Cooper Hewitt",
                  lineHeight: 2,
                }}
              >
                Joining the Muscle Dummies community means joining a family of
                like-minded individuals who are passionate about their health
                and fitness. This can be an individual who is new to the field
                looking to transform their body, or a vet looking for an
                opportunity to share their experiences, give advice, and help
                guide others through their process.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  placeItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Link to="https://discord.gg/CCyjkz8S6m">
                  <StaticImage
                    src="../images/canva_components/discord.png"
                    alt="Muscle Shaker"
                    placeholder="blurred"
                    layout="constrained"
                    height={88}
                    width={100}
                  />
                </Link>

                <Button
                  variant="outlined"
                  href="https://discord.gg/CCyjkz8S6m"
                  sx={{
                    textAlign: "center",
                    padding: { xs: 0.5, sm: 1 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "Gagalin",
                      fontSize: { xs: "1rem", sm: "2rem", md: "2rem" },
                    }}
                  >
                    JOIN OUR DISCORD
                  </Typography>
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              md={4}
              data-aos="fade-up"
              data-aos-duration="1500"
              sx={{
                textAlign: "center",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  border: "5px solid",
                  borderColor: "#FFF",
                  padding: 0.5,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "transparent",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Grid
                      item
                      md={12}
                      sx={{
                        paddingTop: 2,
                      }}
                    >
                      <StaticImage
                        className="instant_shake"
                        src="../images/logos/md_nft_shaker.png"
                        alt="Muscle Shaker"
                        placeholder="blurred"
                        layout="constrained"
                        height={200}
                        width={132}
                      />
                    </Grid>

                    <Grid item md={12}>
                      <Typography
                        sx={{
                          fontFamily: "Gagalin",
                          letterSpacing: 10,
                          color: "#FFF",
                          fontSize: { md: "3rem" },
                        }}
                      >
                        COMMUNITY
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <br />

      {/* INSTANT UTILITY */}
      <Container
        id="utility"
        sx={{
          marginY: { xs: 2, md: 5 },
        }}
      >
        <Utility />
      </Container>

      {/* MUSCLE DUMMIES COMMUNITY */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          marginY: 0,
          paddingBottom: 10,
        }}
      >
        <MDCommunity />
      </Container>

      {/* ROADMAP */}
      <Container
        id="roadmap"
        maxWidth={false}
        disableGutters
        sx={{
          marginY: 0,
          paddingBottom: 10,
        }}
      >
        <Roadmap />
      </Container>

      {/* MEET THE TEAM */}
      <Container
        id="team"
        sx={{
          marginY: { xs: 2, md: 5 },
        }}
      >
        <TheTeam />
      </Container>

      {/* FAQ */}
      <Container
        id="faq"
        sx={{
          marginY: { xs: 2, md: 5 },
        }}
        data-aos="fade-up-right"
        data-aos-duration="1500"
      >
        <Faq />
      </Container>

      <Linkbar />
    </Layout>
  )
}

export default IndexPage

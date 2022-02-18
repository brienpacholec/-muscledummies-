import React, { useEffect, useState } from "react"
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
import DummieAccordion from "../components/dummie_accordion"

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])

  const [activeImage1, setActiveImage1]= useState(false);
  const [activeImage2, setActiveImage2]= useState(false);
  const [activeImage3, setActiveImage3]= useState(false);
  const [activeImage4, setActiveImage4]= useState(false);

  return (
    <Layout>
      {/* HEADER & WELCOME */}
      <Container
        className="bg-1"
        maxWidth={false}
        disableGutters
        sx={{
          marginTop:{xs: 0, md: -30},
        }}
      >
        {/* HEADER */}
        <Container
          sx={{
            paddingTop:{xs: 0, md: 30},
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
              padding: 3,
            }}
          >

            <div onMouseOver={()=> setActiveImage1("robot")} onMouseLeave={() => setActiveImage1("sandbag")}>
              {activeImage1 === "robot" ? 
                <StaticImage
                  src="../images/dummies/robot.png"
                  alt="Muscle Dummie Robot"
                  placeholder="blurred"
                  layout="constrained"
                  height={300}
                  width-={281}
                />
                : 
                <StaticImage
                    id="hover"
                    src="../images/dummies/sandbag.png"
                    alt="Muscle Dummie Sandbag"
                    placeholder="blurred"
                    layout="constrained"
                    height={300}
                    width-={281}
                  />
              }
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
              padding: 3,
            }}
          >

            <div onMouseOver={()=> setActiveImage2("sandbag")} onMouseLeave={() => setActiveImage2("robot")}>
              {activeImage2 === "sandbag" ? 
                <StaticImage
                  src="../images/dummies/sandbag.png"
                  alt="Muscle Dummie Sandbag"
                  placeholder="blurred"
                  layout="constrained"
                  height={300}
                  width-={281}
                />
                : 
                <StaticImage
                    id="hover"
                    src="../images/dummies/robot.png"
                    alt="Muscle Dummie Robot"
                    placeholder="blurred"
                    layout="constrained"
                    height={300}
                    width-={281}
                  />
              }
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
              padding: 3,
            }}
          >
             <div onMouseOver={()=> setActiveImage3("robot")} onMouseLeave={() => setActiveImage3("sandbag")}>
              {activeImage3 === "robot" ? 
                <StaticImage
                  src="../images/dummies/robot.png"
                  alt="Muscle Dummie Robot"
                  placeholder="blurred"
                  layout="constrained"
                  height={300}
                  width-={281}
                />
                : 
                <StaticImage
                    id="hover"
                    src="../images/dummies/sandbag.png"
                    alt="Muscle Dummie Sandbag"
                    placeholder="blurred"
                    layout="constrained"
                    height={300}
                    width-={281}
                  />
              }
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
              padding: 3,
            }}
          >
             <div onMouseOver={()=> setActiveImage4("sandbag")} onMouseLeave={() => setActiveImage4("robot")}>
              {activeImage4 === "sandbag" ? 
                <StaticImage
                  src="../images/dummies/sandbag.png"
                  alt="Muscle Dummie Sandbag"
                  placeholder="blurred"
                  layout="constrained"
                  height={300}
                  width-={281}
                />
                : 
                <StaticImage
                    id="hover"
                    src="../images/dummies/robot.png"
                    alt="Muscle Dummie Robot"
                    placeholder="blurred"
                    layout="constrained"
                    height={300}
                    width-={281}
                  />
              }
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
                  lineHeight: 2
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

      <br/>
      
      {/* INSTANT UTILITY */}
      <Container
        id="utility"
        sx={{
          marginY: { xs: 2, md: 5 },
        }}

      >
        <Grid
          container
          sx={{
            display: {sm: "flex", md: "none"},
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
          data-aos-duration="1500"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              textAlign: {sm: "left", md: "center"},
              marginY: {sm: 2, md: 0}
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Cooper Hewitt",
                color: "primary.main",
              }}
            >
              IMMEDIATE ACCES TO OUR WORKOUT & MEAL PLAN VAULT
            </Typography>

            <Typography
              sx={{
                fontFamily: "Cooper Hewitt",
                color: "#FFF",
              }}
            >
            Mint one of our Dummies, verify your wallet, and gain acces to our various workout and meal plans for individuals with a variety of goals - valued at more than the price to mint a Dummy. Only the first 3,333 minters will have immediete access!
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              textAlign: "center",
              display: {xs: "none", md: "unset"},
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
              textAlign: {sm: "left", md: "center"},
              marginY: {sm: 2, md: 0},
              alignSelf: "center"
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
            Be one of the lucky few to mint our super rare NFTs or the legendary metallic Dummy to win exclusive prizes, such as ETH,  gym memeberships, and more!
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: { xs: 0, md: 3 },
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              textAlign: {sm: "left", md: "center"},
              alignSelf: "center",
              marginY: {sm: 2, md: 0},
              
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
            Hold your Dummies to gain access to exclusive events, networking oppritunities, updated research, and private discord channels. 
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              textAlign: {sm: "left", md: "center"},
              marginY: {sm: 2, md: 0},
              
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
            Our community will be free to enter, but we will have another community for our true beleivers. This will be where you can talk and network with our collab influencers. This will also be where you will get private insights to our next steps.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              textAlign: {sm: "left", md: "center"},
              alignSelf: "center",
              marginY: {sm: 2, md: 0},
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
            The Muscle Dummies metaverse will be something truly special. A place where you can earn $MUSL coins to redeem for Merch, Supps, Memberships + More!
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* MUSCLE DUMMIES COMMUNITY */}
      <Container
        className="bg-3"
        maxWidth={false}
        disableGutters
        sx={{
          marginY: 0,
          paddingBottom: 10,
        }}
      >
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
      </Container>

      {/* ROADMAP */}
      <Container
        className="bg-4"
        maxWidth={false}
        disableGutters
        sx={{
          marginY: 0,
          paddingBottom: 10,
        }}
      >
        <Container
          id="roadmap"
          data-aos="fade-up-right" 
          data-aos-duration="1500"
        >
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
              sx={{
                textAlign: "center"
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
                ROADMAP
              </Typography>

            </Grid>


          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
            }}
          >
            {/* LEFT SIDE */}
            <Grid
              item
              sm={12}
              md={4}
            >
              <Box>
                  <Typography
                      className="neonPink"
                      variant="h4"
                      sx={{
                        color: "#FFF",
                        fontFamily: "Cooper Hewitt",
                      }}
                    >
                      COLLECTION 1 - SELLOUT
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    Once all of the 3,333 Dummies are sold out and revealed we will do our special giveaways to our lucky winners! All of our other minters will then be able to access our vault of plans to start their next Health and Fitness journey.
                  </Typography>
              </Box>

              <Box>
                <Typography
                    className="neonPink"
                    variant="h4"
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    MUSCLE DUMMY MEETUP
                </Typography>

                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Cooper Hewitt",
                  }}
                >
                  The first Muscle Dummy Meetup location is TBA. We want to see where the majority of our holders are so we can have everyone in attendance. Exclusive merch, info, and networking opportunities will be available to all in attendance. 
                </Typography>
              </Box>

              <Box>
                <Typography
                    className="neonPink"
                    variant="h4"
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    $MUSL, MERCH, SUPPS, MORE
                  </Typography>

                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    Development of the $MUSL coin that will be redeemable for all things Muscle Dummies. Merch store opens, Muscle Dummies' supplements released, BIG ANNOUNCEMENT SOON.
                  </Typography>
              </Box>

              <Box>
                <Typography
                    className="neonPink"
                    variant="h4"
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    CHAPTER 2 ANNOUNCEMENT
                  </Typography>

                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                  Chapter 2 will begin with two very big announcements that we at Muscle Dummies HQ cannot wait for! We imagine with the great success of the project, Chapter 2 will begin shortly after our sellout! Here, true believers of the BRAND will be rewarded greatly.                   </Typography>
              </Box>
            </Grid>


            {/* MAP */}
            <Grid
              item
              sm={12}
              md={4}
              sx={{
                display: {sm: "none", md: "unset"}
              }}
            >
              <StaticImage
                src="../images/canva_components/roadmap.png"
                alt="Muscle Shaker"
                placeholder="blurred"
                layout="constrained"
              />

            </Grid>

            {/* RIGHT SIDE */}
            <Grid
              item
              sm={12}
              md={4}
            >
              

              <Box>
                <Typography
                    className="neonPink"
                    variant="h4"
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    COMMUNITY ASSET AQUIREMENT
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Cooper Hewitt",
                  }}
                >
                  Our first reinvestment will be to acquire land in the metaverse. This early reinvestment is necessary so we can start working with developers to get our Workout-to-Earn game rolling as quickly as possible!
                </Typography>
              </Box>

              <Box>
                <Typography
                    className="neonPink"
                    variant="h4"
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    MUSCLE DUMMIES APP
                </Typography>

                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Cooper Hewitt",
                  }}
                >
                  Our Muscle Dummies official app will be a total healh and fitness app. Through devices such as the Apple Watch, you'll be able to track your workouts, macros, sleep, hydration, and everything else essential for maximizing your Health and Fitness potential and attaining your goals as quick as possible. You can do all this while earning $MUSL coins to redeem in our store!
                </Typography>
              </Box>

              <Box>
                <Typography
                    className="neonPink"
                    variant="h4"
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    $MUSL, MERCH, SUPPS, MORE
                  </Typography>

                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Cooper Hewitt",
                    }}
                  >
                    Development of the $MUSL coin that will be redeemable for all things Muscle Dummies. Merch store opens, Muscle Dummies' supplements released, BIG ANNOUNCEMENT SOON.
                  </Typography>
              </Box>

            </Grid>

          </Grid>

        </Container>

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
        <DummieAccordion />
        <hr />
      </Container>

     

      <Linkbar />
    </Layout>
  )
}

export default IndexPage

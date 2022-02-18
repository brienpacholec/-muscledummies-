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
import DummieAccordion from "../components/dummie_accordion";

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
          marginY: 0
        }}
      >
        {/* HEADER */}
        <Container>
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
                READY TO TAKE OVER THE FITNESS INDUSTRY
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
            paddingY: 5
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
                Join this exclusive NFT project that offers instant utility valued
                higher than the cost to mint, one of a kind art, and great
                long-term benefits!
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
      <Container
          maxWidth={false}
          disableGutters
        >
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
                padding: 3
              }}
            >
              <StaticImage
                src="../images/dummies/sandbag.png"
                alt="Muscle Dummie Sandbag"
                placeholder="blurred"
                layout="constrained"
                height={300}
                width-={264}
              />
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
              <StaticImage
                src="../images/dummies/sandbag.png"
                alt="Muscle Dummie Robot"
                placeholder="blurred"
                layout="constrained"
                height={300}
                width-={264}
              />
            </Grid>

            {/* IMAGE 3 */}
            <Grid 
              item 
              sm={4}
              md={3}
              sx={{
                display: {xs: "none", sm: "flex"}, 
                textAlign: "center", 
                justifyContent: "center",
                backgroundColor: "#D7C56E",
                padding: 3
              }}
            >
              <StaticImage
                src="../images/dummies/sandbag.png"
                alt="Muscle Dummie Sandbag"
                placeholder="blurred"
                layout="constrained"
                height={300}
                width-={264}
              />
            </Grid>

            {/* IMAGE 4 */}
            <Grid 
              item 
              md={3}
              sx={{
                display: {xs: "none", sm: "none", md: "flex"}, 
                textAlign: "center", 
                justifyContent: "center",
                backgroundColor: "#BF2F40",
                padding: 3
              }}
            >
              <StaticImage
                src="../images/dummies/sandbag.png"
                alt="Muscle Dummie Robot"
                placeholder="blurred"
                layout="constrained"
                height={300}
                width-={264}
              />
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
                  fontSize: {xs: "2.5rem", sm: "4rem", md: "6rem"},
                  color: "#FFF",
                  textShadow: "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15), 4px 5px 3px rgba(0,0,0,0.48)"
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
          marginY: 0
        }}
      >
        {/* About */}
        <Container
          id="about"
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
                Muscle Dummies are a unique collection of 3,333 one-ofone NFTs on
                the ETH blockchain
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
                community on the planet. we want to give back to the industry that
                has given so much to us
              </Typography>

              <hr />
            </Grid>
          </Grid>
        </Container>

         {/* Community */}
        <Container
          id="community"
          sx={{ marginY: { xs: 2, md: 5 } }}
        >

          <Grid
            container
            sx={{
              display: "flex",
              marginTop: { xs: 0, md: 3 },
              paddingX: 5,
              borderLeft: "4mm ridge rgb(77, 255, 0, .6)",
              borderRight: {xs: "4mm ridge rgb(77, 255, 0, .6)", md: "none"},
              placeItems: "center",
            }}
          >
            <Grid 
              item 
              xs={12} 
              sm={12} 
              md={8}
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
              data-aos="fade-up"
              data-aos-duration="1500"   
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#FFF",
                  fontSize: { xs: 16, sm: "1rem", md: "1.2rem" },
                  fontFamily: "Cooper Hewitt",
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
                  display:"flex", 
                  placeItems: "center", 
                  justifyContent: "space-evenly"
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
                    padding: {xs: 0.5, sm: 1}
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ 
                      fontFamily: "Gagalin",
                      fontSize: {xs: "1rem", sm: "2rem", md: "3rem"}
                    }}
                  >
                    JOIN OUR DISCORD
                  </Typography>
                </Button>
              </Box>
              
            </Grid>

            <Grid 
              item md={4}
              data-aos="fade-up"
              data-aos-duration="1500"
              sx={{
                textAlign: "center", 
                display: {xs: "none", md: "flex"}, 
                justifyContent: "center"
              }}
            >

              <Box
                sx={{
                  border: "5px solid",
                  borderColor: "primary.main",
                  padding: 0.5
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
                    item md={12}
                    sx={{
                      paddingTop: 2
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

                  <Grid 
                    item md={12}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Gagalin",
                        letterSpacing: 5,
                        color: "#FFF",
                        fontSize: {md: "2rem"}
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
                marginBottom: {xs: 2, md: 4},
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
                  fontSize: {xs: "1.5rem", sm: "1.9rem", md: "3rem"}
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
                  fontSize: {xs: "1.5rem", sm: "1.9rem", md: "3rem"}
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
                  fontSize: {xs: "1.5rem", sm: "1.9rem", md: "3rem"}
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
                marginTop: 3
              }}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Cooper Hewitt",
                  color: "#FFF",
                  fontSize: {xs: "1.5rem", sm: "1.9rem", md: "3rem"}
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
                marginTop: 3
              }}
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Cooper Hewitt",
                  color: "#FFF",
                  fontSize: {xs: "1.5rem", sm: "1.9rem", md: "3rem"}
                }}
              >
                Spiritual Training
              </Typography>
            </Grid>

          </Grid>


        </Container>
      </Container>


      {/* Benefits and Utility - HOLD */}
        {/* <Container
          id="utility"
          sx={{ marginY: { xs: 2, md: 5 } }}
        >
          <Grid
            container
            sx={{
              display: "flex",
            }}
          >

            <Grid 
              item 
              xs={12} 
              sm={4} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#FFF",
                  fontFamily: "Gagalin",
                }}
              >
                BENEFITS
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: "primary.main",
                  fontFamily: "Cooper Hewitt",
                }}
              >
                AND
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: "#FFF",
                  fontFamily: "Gagalin",
                }}
              >
                UTILITY
              </Typography>
            </Grid>

            <Grid 
              item 
              xs={12} 
              sm={4} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Cooper Hewitt",
                }}
              >
                OUR METAVERSE
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cooper Hewitt",
                }}
              >
                The Muscle Dummies metaverse will be something truly special. A place where you can earn $MUSL coins to redeem for Merch, Supps, Memberships + More!
              </Typography>
            </Grid>

            <Grid 
              item 
              xs={12} 
              sm={4} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Cooper Hewitt",
                }}
              >
                VALUE OF YOUR DUMMY
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cooper Hewitt",
                }}
              >
                Be one of the lucky few to mint our super rare NFTs or the legendary metallic Dummy to win exclusive prizes, such as ETH,  gym memeberships, and more!
              </Typography>
            </Grid>


          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
            }}
          >

            <Grid 
              item 
              xs={12} 
              sm={4} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
              <Typography
                sx={{
                  color: "primary.main",
                  fontFamily: "Cooper Hewitt",
                }}
              >
                IMMEDIATE ACCES TO OUR WORKOUT & MEAL PLAN VAULT
              </Typography>
            </Grid>

            <Grid 
              item 
              xs={12} 
              sm={6} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
              <StaticImage
                  src="../images/canva_components/robot_head.png"
                  alt="Muscle Shaker"
                  placeholder="blurred"
                  layout="constrained"
                  
                />
            </Grid>

            <Grid 
              item 
              xs={12} 
              sm={2} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
            </Grid>


          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
            }}
          >

            <Grid 
              item 
              xs={12} 
              sm={4} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
            </Grid>

            <Grid 
              item 
              xs={12} 
              sm={4} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
            </Grid>

            <Grid 
              item 
              xs={12} 
              sm={4} 
              sx={{
                paddingRight: {xs: 0, md: 5}
              }}
            >
            </Grid>


          </Grid>

        </Container> */}
      {/* Benefits and Utility - HOLD */}

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
            textShadow: "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15), 4px 5px 3px rgba(0,0,0,0.48)"
          }}
        >
          FAQ
        </Typography>

        <hr/>
        <DummieAccordion/>
        <hr/>
      </Container>


      


      <Linkbar />
    </Layout>
  )
}

export default IndexPage

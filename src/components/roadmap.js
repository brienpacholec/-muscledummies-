import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"

const Roadmap = () => {
  return (
    <Container id="roadmap" >
      {/* TOP */}
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
            textAlign: "center",
          }}
        >
          <Typography
            className="neon"
            variant="h3"
            sx={{
              color: "primary.main",
              fontSize: { xs: "2rem", md: "3rem" },
              fontFamily: "Cooper Hewitt",
            }}
          >
            ROADMAP
          </Typography>
        </Grid>
      </Grid>

      {/* DISPLAY LG */}
      <Grid
        container
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      >
        {/* LEFT SIDE */}
        <Grid item lg={4}>
          <Box
            sx={{
              display: { md: "none", lg: "flex" },
              justifyContent: "center",
              marginTop: -10,
            }}
          >
            <StaticImage
              src="../images/canva_components/turret.png"
              alt="Turret"
              placeholder="blurred"
              layout="constrained"
              height={165}
              width={253}
            />
          </Box>

          <Box
            sx={{
              marginTop: 6,
            }}
            data-aos="fade-right"
          >
            <Typography
              className="neonPink"
              variant="h4"
              sx={{
                color: "#FFF",
                fontFamily: "Cooper Hewitt",
                fontSize: "1.6rem",
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
              Once all of the 3,333 Dummies are sold out and revealed we will do
              our special giveaways to our lucky winners! All of our other
              minters will then be able to access our vault of plans to start
              their next Health and Fitness journey.
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: 3,
            }}
            data-aos="fade-right"
          >
            <Typography
              className="neonPink"
              variant="h4"
              sx={{
                color: "#FFF",
                fontFamily: "Cooper Hewitt",
                fontSize: "1.6rem",
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
              The first Muscle Dummy Meetup location is TBA. We want to see
              where the majority of our holders are so we can have everyone in
              attendance. Exclusive merch, info, and networking opportunities
              will be available to all in attendance.
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: 5,
            }}
            data-aos="fade-right"
          >
            <Typography
              className="neonPink"
              variant="h4"
              sx={{
                color: "#FFF",
                fontFamily: "Cooper Hewitt",
                fontSize: "1.6rem",
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
              Development of the $MUSL coin that will be redeemable for all
              things Muscle Dummies. Merch store opens, Muscle Dummies'
              supplements released, BIG ANNOUNCEMENT SOON.
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: 6,
            }}
            data-aos="fade-right"
          >
            <Typography
              className="neonPink"
              variant="h4"
              sx={{
                color: "#FFF",
                fontFamily: "Cooper Hewitt",
                fontSize: "1.6rem",
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
              Chapter 2 will begin with two very big announcements that we at
              Muscle Dummies HQ cannot wait for! We imagine with the great
              success of the project, Chapter 2 will begin shortly after our
              sellout! Here, true believers of the BRAND will be rewarded
              greatly.{" "}
            </Typography>
          </Box>
        </Grid>

        {/* MAP */}
        <Grid
          item
          md={12}
          lg={4}
          sx={{
            display: { xs: "none", lg: "flex" },
          }}
        >
          <StaticImage
            src="../images/canva_components/roadmap.png"
            alt="Muscle Shaker"
            placeholder="blurred"
            layout="constrained"
            imgStyle={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>

        {/* RIGHT SIDE */}
        <Grid
          item
          lg={4}
          sx={{
            paddingLeft: 2,
          }}
        >
          <Box
            sx={{
              display: { md: "none", lg: "flex" },
              justifyContent: "center",
              marginTop: -10,
            }}
          >
            <StaticImage
              src="../images/canva_components/map.png"
              alt="Map"
              placeholder="blurred"
              layout="constrained"
              height={253}
              width={253}
            />
          </Box>

          <Box
            sx={{
              marginTop: 4,
            }}
            data-aos="fade-left"
          >
            <Typography
              className="neonPink"
              variant="h4"
              sx={{
                color: "#FFF",
                fontFamily: "Cooper Hewitt",
                fontSize: "1.6rem",
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
              Our first reinvestment will be to acquire land in the metaverse.
              This early reinvestment is necessary so we can start working with
              developers to get our Workout-to-Earn game rolling as quickly as
              possible!
            </Typography>
          </Box>

          <Box
            sx={{
              display: { md: "none", lg: "flex" },
              justifyContent: "center",
              marginTop: 6,
            }}
          >
            <StaticImage
              src="../images/canva_components/barbell.png"
              alt="Map"
              placeholder="blurred"
              layout="constrained"
              height={65}
              width={200}
            />
          </Box>

          <Box
            sx={{
              marginTop: 10,
            }}
            data-aos="fade-left"
          >
            <Typography
              className="neonPink"
              variant="h4"
              sx={{
                color: "#FFF",
                fontFamily: "Cooper Hewitt",
                fontSize: "1.6rem",
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
              Our Muscle Dummies official app will be a total healh and fitness
              app. Through devices such as the Apple Watch, you'll be able to
              track your workouts, macros, sleep, hydration, and everything else
              essential for maximizing your Health and Fitness potential and
              attaining your goals as quick as possible. You can do all this
              while earning $MUSL coins to redeem in our store!
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            className="neon"
            variant="h4"
            sx={{
              color: "primary.main",
              fontFamily: "Cooper Hewitt",
            }}
          >
            CHAPTER 2: TBA
          </Typography>
        </Grid>
      </Grid>

      {/* DISPLAY MOBILE */}
      <Grid
        container
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            marginY: 1,
          }}
        >
          <Typography
            className="neonPink"
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "1.45rem", sm: "1.6rem" },
            }}
          >
            20% - COLLECTION 1 - SELLOUT
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
            }}
          >
            Once all of the 3,333 Dummies are sold out and revealed we will do
            our special giveaways to our lucky winners! All of our other minters
            will then be able to access our vault of plans to start their next
            Health and Fitness journey.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            marginY: 1,
          }}
        >
          <Typography
            className="neonPink"
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "1.45rem", sm: "1.6rem" },
            }}
          >
            30% - COMMUNITY ASSET AQUIREMENT
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
            }}
          >
            Our first reinvestment will be to acquire land in the metaverse.
            This early reinvestment is necessary so we can start working with
            developers to get our Workout-to-Earn game rolling as quickly as
            possible!
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            marginY: 1,
          }}
        >
          <Typography
            className="neonPink"
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "1.45rem", sm: "1.6rem" },
            }}
          >
            40% - MUSCLE DUMMY MEETUP
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
            }}
          >
            The first Muscle Dummy Meetup location is TBA. We want to see where
            the majority of our holders are so we can have everyone in
            attendance. Exclusive merch, info, and networking opportunities will
            be available to all in attendance.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            marginY: 1,
          }}
        >
          <Typography
            className="neonPink"
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "1.45rem", sm: "1.6rem" },
            }}
          >
            65% - $MUSL, MERCH, SUPPS, MORE
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
            }}
          >
            Development of the $MUSL coin that will be redeemable for all things
            Muscle Dummies. Merch store opens, Muscle Dummies' supplements
            released, BIG ANNOUNCEMENT SOON.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            marginY: 1,
          }}
        >
          <Typography
            className="neonPink"
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "1.45rem", sm: "1.6rem" },
            }}
          >
            80% - MUSCLE DUMMIES APP
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
            }}
          >
            Our Muscle Dummies official app will be a total healh and fitness
            app. Through devices such as the Apple Watch, you'll be able to
            track your workouts, macros, sleep, hydration, and everything else
            essential for maximizing your Health and Fitness potential and
            attaining your goals as quick as possible. You can do all this while
            earning $MUSL coins to redeem in our store!
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            marginY: 1,
          }}
        >
          <Typography
            className="neonPink"
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
              fontSize: { xs: "1.45rem", sm: "1.6rem" },
            }}
          >
            100% - CHAPTER 2 ANNOUNCEMENT
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Cooper Hewitt",
            }}
          >
            Chapter 2 will begin with two very big announcements that we at
            Muscle Dummies HQ cannot wait for! We imagine with the great success
            of the project, Chapter 2 will begin shortly after our sellout!
            Here, true believers of the BRAND will be rewarded greatly.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Roadmap

import React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import FortIcon from "@mui/icons-material/Fort"
import GroupIcon from "@mui/icons-material/Group"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const Roadmap = () => {
  return (
    <Container id="roadmap">
      <VerticalTimeline>
        {/* LEFT */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<FitnessCenterIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            20% COLLECTION SELLOUT
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Once all of the 333 Dummies are sold out and revealed we will do our
            special giveaways to our lucky winners! All of our other minters
            will then be able to access our vault of plans to start their next
            Health and Fitness journey.
          </Typography>
        </VerticalTimelineElement>

        {/* RIGHT */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<FortIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            30% COMMUNITY ASSET AQUIREMENT
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Our first reinvestment will be to acquire land in the metaverse.
            This early reinvestment is necessary so we can start working with
            developers to get our Workout-to-Earn game rolling as quickly as
            possible!
          </Typography>
        </VerticalTimelineElement>

        {/* LEFT */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<GroupIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            40% MUSCLE DUMMY MEETUP
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            The first Muscle Dummy Meetup location is TBA. We want to see where
            the majority of our holders are so we can have everyone in
            attendance. Exclusive merch, info, and networking opportunities will
            be available to all in attendance.
          </Typography>
        </VerticalTimelineElement>

        {/* RIGHT */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<ShoppingCartIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            65% $MUSL, MERCH, SUPPS, MORE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Development of the $MUSL coin that will be redeemable for all things
            Muscle Dummies. Merch store opens, Muscle Dummies' supplements
            released, BIG ANNOUNCEMENT SOON.
          </Typography>
        </VerticalTimelineElement>

        {/* LEFT */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<PhoneIphoneIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            80% MUSCLE DUMMIES APP
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Our Muscle Dummies official app will be a total health and fitness
            app. Through devices such as the Apple Watch, you'll be able to
            track your workouts, macros, sleep, hydration, and everything else
            essential for maximizing your Health and Fitness potential and
            attaining your goals as quickly as possible. You can do all this
            while earning $MUSL coins to redeem in our store!
          </Typography>
        </VerticalTimelineElement>

        {/* RIGHT */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<RocketLaunchIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            100% CHAPTER 2 ANNOUNCEMENT
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Chapter 2 will begin with two very big announcements that we at
            Muscle Dummies HQ cannot wait for! We imagine with the great success
            of the project, Chapter 2 will begin shortly after our sellout!
            Here, true believers of the BRAND will be rewarded greatly.
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  )
}

export default Roadmap

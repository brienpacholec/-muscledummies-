import React from "react"

import { Container, Grid, Typography } from "@mui/material"

import FortIcon from "@mui/icons-material/Fort"
import SmartphoneIcon from "@mui/icons-material/Smartphone"
import SportsIcon from "@mui/icons-material/Sports"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing"
import GroupsIcon from "@mui/icons-material/Groups"
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"
import PublicIcon from "@mui/icons-material/Public"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const Roadmap = () => {
  return (
    <Container id="vision">
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
            OUR{" "}
          </Typography>
          <Typography
            variant="h1"
            display="inline"
            sx={{
              fontFamily: "Gagalin",
              color: "white",
              fontSize: { xs: "3rem", sm: "4.5rem", md: "6rem" },
              textShadow: "2px 2px #0F6907",
            }}
          >
            VISION
          </Typography>
        </Grid>
      </Grid>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<SmartphoneIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            BUILD SOCIAL MEDIA PRESENCE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Throughout this process, our creators will continue to grow their
            socials and the company's socials to create more brand awareness
            while selling plans, NFTs, and coaching.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<SportsIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            BUILD ELITE ONLINE PERSONAL TRAINING
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Our two founders Isaac and Johnny will become the best personal
            trainers in their field offering plans, knowledge, efficient
            shortcuts, different perspectives, the latest research, and more to
            get their clients the best results in the shortest amount of time.
          </Typography>
        </VerticalTimelineElement>

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
            BUILD A PERSONAL TRAINING FACILITY AND PRIVATE GYM
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            As our trainers establish their credibility online, Isaac will begin
            to build a small personal training facility to privately train his
            clients.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<PhonelinkRingIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            CONTINUE TO ESTABLISH ONLINE PRESENCE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            As we build, we will constantly be working to grow our socials,
            spread brand awareness, bring on new team members, and bring in new
            clients.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<GroupsIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            PUBLIC GYM
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            The Muscle Dummies Gym will be the most uniquely designed,
            state-of-the-art gym and training facility in the nation. We will
            begin to build our public gym with state-of-the-art architecture and
            equipment at a location TBA. The gym will include various MD NFT
            integrations TBA as well.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<DirectionsRunIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            HEALTH & FITNESS TAKEOVER
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            The Muscle Dummies team will constantly be networking, strategizing,
            and taking MASSIVE ACTION to take over the Health and Fitness
            Industry. At this point, the company will have various plans in
            place to create an enormous social media presence and let everyone
            know what Muscle Dummies is and what the company is about.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0F6907", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0F6907" }}
          iconStyle={{ background: "#0F6907", color: "#fff" }}
          icon={<PublicIcon />}
        >
          <Typography
            className="vertical-timeline-element-title"
            variant="h5"
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            EXPANSION
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            After creating massive brand awareness and brand loyalty, Muscle
            Dummies Gym will begin to add new locations at specific locations
            across the United States offering specific exclusive access to our
            NFT holders.
          </Typography>
        </VerticalTimelineElement>

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
            HEALTH & FITNESS MECCA
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cooper Hewitt",
            }}
          >
            Our main goal is to create a Health and Fitness Mecca. We plan to
            create or move into a mall-style facility that offers Holistic
            Health Care options, a HUGE public gym, sports-specific training
            facilities, gains restaurants, resort-style housing, spa options,
            and MORE!
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  )
}

export default Roadmap

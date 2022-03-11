import React, { useEffect } from "react"

import Container from "@mui/material/Container"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import DummieHeader from "../components/dummie_header"
import Status from "../components/status"
import Welcome from "../components/welcome"
import About from "../components/about"
import Community from "../components/community"
import DummierBanner from "../components/dummie_banner"
import Utility from "../components/utility"
import Roadmap from "../components/roadmap"
import TheTeam from "../components/the_team"
import Faq from "../components/faq"
import DummieFooter from "../components/dummie_footer"
import Linkbar from "../components/linkbar"

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      easing: "ease",
    })
    AOS.refresh()
  }, [])

  return (
    <Layout src="index">
      {/* HEADER & WELCOME */}
      <Container
        className="bg-1"
        maxWidth={false}
        disableGutters
        sx={{
          marginTop: { xs: 0, md: -30 },
          paddingTop: { xs: 5, md: 0 },
        }}
      >
        <DummieHeader />
        <Status />
      </Container>

      {/* Dummie Banner */}
      <Container maxWidth={false} disableGutters>
        <DummierBanner />
      </Container>

      {/* ABOUT & COMMUNITY */}
      <Container
        className="bg-2"
        maxWidth={false}
        disableGutters
        sx={{
          paddingY: 5,
        }}
      >
        <Welcome />
        <About />
        <Community />
      </Container>

      {/* INSTANT UTILITY && MUSCLE DUMMIES COMMUNITY */}
      <Container
        id="utility"
        maxWidth={false}
        disableGutters
        sx={{
          paddingY: 5,
        }}
      >
        <Utility />

        {/* <MDCommunity /> */}
      </Container>

      {/* ROADMAP */}
      <Container
        className="bg-3"
        maxWidth={false}
        disableGutters
        sx={{
          paddingY: 5,
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
      >
        <Faq />
      </Container>

      {/* FOOTER */}
      <Container>
        <DummieFooter />
      </Container>

      <Linkbar />
    </Layout>
  )
}

export default IndexPage

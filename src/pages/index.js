import React, { useEffect } from "react"
import Layout from "../components/layout"
import Container from "@mui/material/Container"


import AOS from "aos"
import "aos/dist/aos.css"

import Header from "../components/header"
import Welcome from "../components/welcome"
import About from "../components/about"
import Community from "../components/community"
import DummierBanner from "../components/dummie_banner"
import Utility from "../components/utility"
import MDCommunity from "../components/md_community"
import Roadmap from "../components/roadmap"
import TheTeam from "../components/the_team"
import Faq from "../components/faq"
import Footer from "../components/footer"
import Linkbar from "../components/linkbar"



const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])

  return (

    <Layout>
      {/* TODO - add background images across page */}
      {/* HEADER & WELCOME */}
      <Container
        className="bg-1"
        maxWidth={false}
        disableGutters
        sx={{
          marginTop: { xs: 0, md: -30 },
        }}
      >
        <Header />
        <Welcome />
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
          marginY: 0,
        }}
      >
        <About />
        <Community />
      </Container>

      {/* INSTANT UTILITY */}
      <Container
        id="utility"
        sx={{
          marginY: { xs: 10, md: 15 },
        }}
      >
        <Utility />
      </Container>

      {/* MUSCLE DUMMIES COMMUNITY */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          marginY: { xs: 2, md: 5 },
        }}
      >
        <MDCommunity />
      </Container>

      {/* ROADMAP */}
      <Container id="roadmap" maxWidth={false} disableGutters>
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

      {/* FOOTER */}
      <Container>
        <Footer />
      </Container>

      <Linkbar />
    </Layout>
  )
}

export default IndexPage

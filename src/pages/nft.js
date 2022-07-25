import React, { useEffect } from "react"

import Container from "@mui/material/Container"

import AOS from "aos"
import "aos/dist/aos.css"

import DefaultLayout from "../layouts/default_layout"
import DummieHeader from "../components/dummie_header"
import Status from "../components/status"
import Welcome from "../components/welcome"
import About from "../components/about"
import Community from "../components/community"
import DummierBanner from "../components/dummie_banner"
import Utility from "../components/utility"
import Roadmap from "../components/roadmap"
import Faq from "../components/faq"
import Tutorial from "../components/tutorial"
import NotableDummies from "../components/notable_dummies"

const NFTPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      easing: "ease",
    })
    AOS.refresh()
  }, [])

  return (
    <DefaultLayout src="index">
      {/* HEADER & WELCOME */}
      <Container
        className="bg-1"
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
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
        <Tutorial />
        <NotableDummies />
      </Container>
    </DefaultLayout>
  )
}

export default NFTPage

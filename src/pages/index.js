import React from "react"

import DefaultLayout from "../layouts/default_layout"
import Container from "@mui/material/Container"

import ElevatorPitch from "../components/elevator_pitch"
import TheTeam from "../components/the_team"
import Roadmap from "../components/roadmap"
import Redirects from "../components/redirects"
import NotableDummies from "../components/notable_dummies"

const IndexPage = () => {
  return (
    <DefaultLayout src="index">
      <Container
        className="bg-2"
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          paddingBottom: 10,
        }}
      >
        <ElevatorPitch />
      </Container>

      {/* MEET THE TEAM */}
      <Container id="team" className="bg-dummy" sx={{}}>
        <TheTeam />
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

      {/* REDIRECTS */}
      <Container
        id="redirects"
        sx={{
          marginY: { xs: 2, md: 5 },
        }}
      >
        <Redirects />
        <NotableDummies />
      </Container>
    </DefaultLayout>
  )
}

export default IndexPage

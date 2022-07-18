import React from "react"

import { Container } from "@mui/material"
import DefaultLayout from "../layouts/default_layout"
import PlanPicker from "../components/plan_picker"
import PlanCarousel from "../components/plan_carousel"

const PlansPage = () => {
  return (
    <DefaultLayout src="shop">
      <Container
        className="bg-3"
        maxWidth={false}
        disableGutters
        sx={{ paddingY: 5 }}
      >
        <PlanPicker current="" />
        <PlanCarousel />
      </Container>
    </DefaultLayout>
  )
}

export default PlansPage

import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { Link } from "gatsby"

const PlanCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    arrows: false,
  }
  const slides = [
    <div>
      <Link to="/shop/athletes">
        <StaticImage
          src="../images/plans/athletes.png"
          alt="Athlete Plans"
          placeholder="blurred"
          layout="constrained"
          height={500}
          style={{
            borderRadius: "0.5rem",
            border: "white solid 1px",
          }}
        />
      </Link>
    </div>,
    <div>
      <Link to="/shop/body-builders">
        <StaticImage
          src="../images/plans/body-builders.png"
          alt="Body Builder Plans"
          placeholder="blurred"
          layout="constrained"
          height={500}
          style={{
            borderRadius: "1rem",
            border: "white solid 2px",
          }}
        />
      </Link>
    </div>,
    <div>
      <Link to="/shop/football">
        <StaticImage
          src="../images/plans/football.png"
          alt="Football Plans"
          placeholder="blurred"
          layout="constrained"
          height={500}
          style={{
            borderRadius: "1rem",
            border: "white solid 2px",
          }}
        />
      </Link>
    </div>,
    <div>
      <Link to="/shop/mens">
        <StaticImage
          src="../images/plans/mens.png"
          alt="Mens Plans"
          placeholder="blurred"
          layout="constrained"
          height={500}
          style={{
            borderRadius: "1rem",
            border: "white solid 2px",
          }}
        />
      </Link>
    </div>,
    <div>
      <Link to="/shop/womens">
        <StaticImage
          src="../images/plans/womens.png"
          alt="Womens Plans"
          placeholder="blurred"
          layout="constrained"
          height={500}
          style={{
            borderRadius: "1rem",
            border: "white solid 2px",
          }}
        />
      </Link>
    </div>,
  ]
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
  shuffleArray(slides)
  return (
    <Container sx={{ paddingY: { xs: 2, sm: 5 } }}>
      <Grid container>
        <Grid item xs={12}>
          <Slider {...settings}>{slides}</Slider>
        </Grid>
      </Grid>
    </Container>
  )
}
export default PlanCarousel

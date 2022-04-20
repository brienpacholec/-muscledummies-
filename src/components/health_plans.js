import React, { useState } from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

import { Document, Page, pdfjs } from "react-pdf";

import Loading from "./loading"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const HealthPlans = ({fitness_plans}) => {

  const [workoutPlanName, setWorkoutPlanName] = useState("")
  const [workoutPlanDoc, setWorkoutPlanDoc] = useState("")
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const handleChange = event => {
    setWorkoutPlanName(event.target.value)
    setWorkoutPlanDoc(process.env.GATSBY_DIRECTUS_PROJECT_URL + "/assets/" + event.target.value + ".pdf")
    setNumPages(null)
    setPageNumber(1)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <Container
      //data-aos="fade-up"
      sx={{
        paddingY: { xs: 5 },
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
              fontFamily: "Cooper Hewitt",
            }}
          >
            HEALTH & FITNESS PLANS
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          sx={{
            textAlign: "center",
            justifyContet: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#FFF",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontFamily: "Cooper Hewitt",
            }}
          >
            For purchasing one of the Muscle Dummy NFT's you have been granted
            access to a variety of nutritional and workout plans. These plans
            have proven success for many and now it's your turn!
          </Typography>
        </Grid>
      </Grid>

      {/* WORKOUT PLANS */}
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            justifyContet: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              fontFamily: "Gagalin",
            }}
          >
            WORKOUT PLANS
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} sm={8} md={6}>
          <FormControl fullWidth>
            <Select
              labelId="workout-select"
              id="demo-simple-select"
              value={workoutPlanName}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Workout' }}
              onChange={handleChange}
              sx={{
                backgroundColor: "#FFF",
              }}
            >
              <MenuItem value="">
                <em>Choose a Workout Plan</em>
              </MenuItem>

              {fitness_plans.map((plan) => 
                <MenuItem value={plan.document.id} key={plan.id}>
                  {plan.name}
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {workoutPlanName !== "" && (
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              justifyContet: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "-webkit-center",
              }}
            >

              <IconButton
                variant="contained"
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === 1}
                sx={{
                  "&:disabled": {
                    color: "#757474",
                  },
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                variant="contained"
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}
                sx={{
                  "&:disabled": {
                    color: "#757474",
                  },
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                <ChevronRightIcon />
              </IconButton>

              <Document
                file={workoutPlanDoc}
                loading={<Loading rednderText={false} />}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error} 
              >
                <Page
                  pageNumber={pageNumber}
                  loading={<Loading rednderText={false} />}
                  height={700}
                  scale={1.0}
                  onLoadError={console.error} 
                />
              </Document>

              <IconButton
                variant="contained"
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === 1}
                sx={{
                  "&:disabled": {
                    color: "#757474",
                  },
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                variant="contained"
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}
                sx={{
                  "&:disabled": {
                    color: "#757474",
                  },
                  color: "white",
                  backgroundColor: "transparent",
                }}
              >
                <ChevronRightIcon />
              </IconButton>
              <p style={{ marginTop: -10 }}>
                Page {pageNumber} of {numPages}
              </p>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}
export default HealthPlans


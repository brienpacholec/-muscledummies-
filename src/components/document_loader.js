import React, { useState } from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

import { Document, Page, pdfjs } from "react-pdf"

import Loading from "./loading"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const DocumentLoader = ({ plans }) => {
  const [workoutPlanName, setWorkoutPlanName] = useState("")
  const [workoutPlanDoc, setWorkoutPlanDoc] = useState("")
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const handleChange = event => {
    setWorkoutPlanName(event.target.value)
    setWorkoutPlanDoc(
      process.env.GATSBY_DIRECTUS_PROJECT_URL +
        "/assets/" +
        event.target.value +
        ".pdf"
    )
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

      {/* PLANS */}
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} sm={8} md={6}>
          <FormControl fullWidth>
            <Select
              labelId="workout-select"
              id="demo-simple-select"
              value={workoutPlanName}
              displayEmpty
              inputProps={{ "aria-label": "Select Workout" }}
              onChange={handleChange}
              sx={{
                backgroundColor: "#FFF",
              }}
            >
              <MenuItem value="">
                <em>Choose a Plan</em>
              </MenuItem>

              {plans.map(plan => (
                <MenuItem value={plan.document.id} key={plan.id}>
                  {plan.name}
                </MenuItem>
              ))}
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
                textAlign: ["-webkit-center", "-moz-center"],
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
                  height={550}
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
export default DocumentLoader

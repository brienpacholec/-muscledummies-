import React from "react"
import {
  Container,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material"

const ContactForm = () => {
  return (
    <Container>
      <Box
        component="form"
        autoComplete="off"
        method="post"
        action="https://getform.io/f/9d02b482-7175-4c95-8f02-d46062cf28d0"
      >
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={12} md={6} sx={{ marginY: 1 }}>
            <FormControl fullWidth required>
              <InputLabel
                htmlFor="name-input"
                color="black_override"
                shrink
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Name:
              </InputLabel>
              <Input
                id="name-input"
                name="name-input"
                sx={{ fontFamily: "Cooper Hewitt", marginX: 1 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginY: 1 }}>
            <FormControl fullWidth>
              <InputLabel
                htmlFor="phone-input"
                color="black_override"
                shrink
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Phone:
              </InputLabel>
              <Input
                id="phone-input"
                name="phone-input"
                sx={{ fontFamily: "Cooper Hewitt", marginX: 1 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ marginY: 1 }}>
            <FormControl fullWidth required>
              <InputLabel
                htmlFor="email-input"
                color="black_override"
                shrink
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Email:
              </InputLabel>
              <Input
                id="email-input"
                name="email-input"
                sx={{ fontFamily: "Cooper Hewitt", marginX: 1 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ marginY: 1 }}>
            <FormControl fullWidth required>
              <InputLabel
                htmlFor="reasons-input"
                color="black_override"
                shrink
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                REASONS YOU'RE INTERESTED:
              </InputLabel>
              <Input
                id="reasons-input"
                name="reasons-input"
                rows={3}
                multiline
                sx={{ fontFamily: "Cooper Hewitt", marginX: 1 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ marginY: 1 }}>
            <FormControl fullWidth required>
              <InputLabel
                htmlFor="more-input"
                color="black_override"
                shrink
                sx={{
                  fontFamily: "Gagalin",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                TELL US MORE ABOUT YOU:
              </InputLabel>
              <Input
                id="more-input"
                name="more-input"
                rows={3}
                multiline
                sx={{ fontFamily: "Cooper Hewitt", marginX: 1 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ marginY: 1, textAlign: "-webkit-center" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ fontFamily: "Cooper Hewitt" }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ContactForm

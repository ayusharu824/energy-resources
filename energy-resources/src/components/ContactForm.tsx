import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  Card,
} from "@mui/material";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <Box
        sx={{ marginTop: "2rem", marginBottom: "2rem", marginLeft: "13rem" }}
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight={600}
          color="#1b1763"
          textAlign={"left"}
          marginRight={"4rem"}
        >
          Get in Touch
        </Typography>
      </Box>
      <Container maxWidth="lg">
        {/* <Paper elevation={5} className="modern-form-container"> */}
        <Card
          sx={{
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
            p: 4,
            mx: "auto",
            maxWidth: 1100,
            mb: 6,
          }}
        >
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <TextField label="First Name" variant="outlined" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField label="Last Name" variant="outlined" fullWidth />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Contact Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Address"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Subject"
                  multiline
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Message"
                  multiline
                  rows={3}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      textTransform: "none",
                      color: "#ffffff",
                      borderRadius: "1rem",
                      px: 4, // horizontal padding
                      py: 1.5, // vertical padding
                      mr: 2,
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      textTransform: "none",
                      borderRadius: "1rem",
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default ContactForm;

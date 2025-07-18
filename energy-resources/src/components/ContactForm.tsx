import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import buisnessPhoto2 from "../assets/GetInTouchTransparent.png"; // Replace with your image path
import { useState } from "react";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  query: string;
};

const MultiStepForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    query: "",
  });

  type FormFields = {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    address: string;
    city: string;
    state: string;
    pin: string;
    query: string;
  };

  type Errors = {
    [K in keyof FormFields]?: string;
  };

  const [errors, setErrors] = useState<Errors>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value) newErrors[key] = "This field is required";
    });
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const pinRegex = /^[1-9][0-9]{5}$/;
    if (form.pin && !pinRegex.test(form.pin)) {
      newErrors.pin = "Please enter a valid 6-digit pin code";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetch(
          "http://localhost:8888/.netlify/functions/saveToBlob",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        const result = await res.json();
        if (result.statusCode === 200) {
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            address: "",
            city: "",
            state: "",
            pin: "",
            query: "",
          });
          setOpenSnackbar(true);
          setSnackbarMessage("Your details saved successfully with us!");
          setSnackbarSeverity("success");
        }
      } catch (error) {
        setOpenSnackbar(true);
        setSnackbarMessage("Error saving your details. Please try again.");
        setSnackbarSeverity("error");
      }
    }
  };

  return (
    <>
      <Grid container sx={{ minHeight: "80vh" }}>
        {/* Left Side - Illustration + Steps */}
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            background: "linear-gradient(180deg, #1b1763 0%, #81c784 100%)",
            color: "#fff",
            px: 4,
            py: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight={700} mb={1}>
              Add your information so that we can get in touch with you for
              better tomorrow.
            </Typography>
            <Typography variant="body1" color="#e1bee7"></Typography>
          </Box>

          <Box>
            <img
              src={buisnessPhoto2} // Replace with your image path
              alt="Family Illustration"
              style={{ width: "100%", maxWidth: "20rem" }}
            />
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ px: { xs: 3, md: 8 }, py: 6 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="#1b1763"
            textAlign={"left"}
            gutterBottom
          >
            Get in Touch
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 6,
              borderRadius: 3,
              background: "linear-gradient(90deg, #1b1763 60%, #4fc3f7 100%)",
              mt: 0.5,
              mb: 1.5,
            }}
          />
          <Typography variant="body1" color="text.secondary" mb={4}>
            Fill your details so that we can know you better.
          </Typography>

          <Card sx={{ p: 4, boxShadow: 3, borderRadius: 3 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Contact Number"
                  name="contact"
                  type="number"
                  value={form.contact}
                  onChange={handleChange}
                  error={!!errors.contact}
                  helperText={errors.contact}
                  fullWidth
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Address"
                  fullWidth
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="City"
                  fullWidth
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  label="State"
                  fullWidth
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  error={!!errors.state}
                  helperText={errors.state}
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                  label="Pin Code"
                  fullWidth
                  name="pin"
                  value={form.pin}
                  onChange={handleChange}
                  error={!!errors.pin}
                  helperText={errors.pin}
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Your query"
                  multiline
                  fullWidth
                  name="query"
                  value={form.query}
                  onChange={handleChange}
                  error={!!errors.query}
                  helperText={errors.query}
                  minRows={3}
                  required
                  InputLabelProps={{
                    sx: {
                      "& .MuiInputLabel-asterisk": {
                        color: "red",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    sx: {
                      textAlign: "left",
                      ml: "0rem", // adjust as needed
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography>
                  All fields with{" "}
                  <Typography component="span" sx={{ color: "red" }}>
                    *
                  </Typography>{" "}
                  are required
                </Typography>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={handleSubmit}
                  size="large"
                  sx={{
                    backgroundColor: "linear-gradient(180deg,0%, #81c784 100%)",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#1b1763",
                      color: "#fff",
                    },
                  }}
                >
                  Continue
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage || "Your details saved successfully with us!"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default MultiStepForm;

import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  Divider,
} from "@mui/material";
import familyPhoto from "../assets/happyfamily.png"; // Replace with your image path
import buisnessPhoto from "../assets/businessPeopleContactForm.png"; // Replace with your image path
import buisnessPhoto2 from "../assets/businessPeopleContactForm2.png"; // Replace with your image path

const MultiStepForm = () => {
  return (
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
            Add your infromation so that we can get in touch with you for better
            tomorrow.
          </Typography>
          <Typography variant="body1" color="#e1bee7">
          </Typography>
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
              <TextField label="First Name" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Last Name" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Email Address" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Contact Number" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField label="Address Line 1" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="City" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField label="State" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField label="Pin Code" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2 }} />
              <Button
                variant="contained"
                fullWidth
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
  );
};

export default MultiStepForm;

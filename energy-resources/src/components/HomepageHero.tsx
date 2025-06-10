import { Box, Button, Container, Typography } from "@mui/material";
import HeaderNew from "./HeaderNew"; // <-- Add this import
import backgroundImage from "../assets/solarPanelDarkHR.png";
import backgroundImage1 from "../assets/heroimage2.png";
import backgroundImage2 from "../assets/heroimage3.png";
import backgroundImage3 from "../assets/transparentHeroImgCropped.png";
import "../styles/ContactForm.css"; // Import your CSS file
const HomepageHero = () => {
  return (
    <>
      <HeaderNew />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          py: { xs: 6, md: 10 },
          maxHeight: "90vh",
          minHeight: "80vh",
          backgroundColor: "#e8eefe", // soft pastel background
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, pr: { md: 4 } }}>
          <Typography
            variant="overline"
            sx={{ color: "#00C853", fontWeight: 600 }}
          >
            Energy For The Future
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "#2C3E50",
              maxWidth: 500,
            }}
          >
            Smart, Clean Solar Energy Made Simple
          </Typography>

          <Typography sx={{ mb: 4, color: "#555", maxWidth: 480 }}>
            D-Sun helps carbon-free energy buyers, sellers, and financiers
            connect and get better deals—faster.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#00C853",
              "&:hover": {
                backgroundColor: "#00B44C",
              },
              textTransform: "none",
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              fontWeight: 600,
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Right Section - Illustration */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            mt: { xs: 4, md: 0 },
          }}
        >
          <img
            src={backgroundImage3} // Replace with your illustration
            alt="Clean energy illustration"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "35rem",marginTop:"-4rem", borderRadius: "1rem" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomepageHero;

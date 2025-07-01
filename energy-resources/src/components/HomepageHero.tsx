import { Box, Button, Container, Typography } from "@mui/material";
import HeaderNew from "./HeaderNew"; // <-- Add this import
import backgroundImage3 from "../assets/transparentHeroImgCropped.png";
import greenHeroImage from "../assets/hero_green_img.jpg"; // Example image, replace with your own
import greenEnergyIcon from "../assets/wind_hero_image.jpg"; // Example icon, replace with your own
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
          background: "linear-gradient(135deg, #f5fafd, #ffffff)",
          position: "relative",
          overflow: "hidden",
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
              boxShadow: "0 4px 12px rgba(0, 200, 83, 0.3)",
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Right Section - Image with shadow and smooth scale */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src={greenHeroImage}
            alt="Clean energy illustration"
            sx={{
              minWidth: "25rem",
              maxWidth: "45rem",
              maxHeight: "30rem",
              marginTop: "8rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};


export default HomepageHero;

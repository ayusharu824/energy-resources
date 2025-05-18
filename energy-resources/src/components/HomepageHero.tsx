import { Box, Button, Typography } from "@mui/material";
import HeaderNew from "./HeaderNew"; // <-- Add this import
import backgroundImage from "../assets/solarPanelDarkHR.png";
import backgroundImage1 from "../assets/heroimage2.png";
import backgroundImage2 from "../assets/heroimage3.png";
const HomepageHero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "65vh",
        display: "flex",
        flexDirection: "column", // Stack header and content vertically
        color: "#ffffff",
        textAlign: "center",
        position: "relative",
        imageRendering: "auto",
      }}
    >
      <HeaderNew /> {/* <-- Add your header here */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "200",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
            mt: { xs: 8, md: 0 },
          }}
        >
          Clean Energy, Smart Future,<br />
          Solar Made Simple
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: "2.5rem",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
          }}
        >
          D-Sun Energy Helps Carbon Free Energy Buyers, Sellers and Financiers
          <br /> Get Better Deal Done Faster.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#ffffff",
            marginTop: "3.5rem",
            padding: "0.75rem 2rem",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "1rem",
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HomepageHero;
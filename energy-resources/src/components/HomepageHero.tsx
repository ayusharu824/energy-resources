import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/solarPanelDarkHR.png";
const HomepageHero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, // Replace with your image URL
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        height: "65vh", // Full screen height
        display: "flex", // Enables flexbox for centering text
        justifyContent: "center", // Centers text horizontally
        color: "#ffffff", // White text color
        textAlign: "center", // Center-align text
        position: "relative",
        imageRendering: "auto",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "200",
            fontFamily: "Roboto,Helvetica,Arial sans-serif",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)", // Adds a shadow for better readability
            marginTop: "3rem",
          }}
        >
          Clean Energy, Smart Future,&nbsp; <br></br>
          Solar Made Simple
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: "2.5rem",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)", // Adds a shadow for better readability
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

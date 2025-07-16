import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/AboutUsBackground_1.png";

const WhatWeDo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "0 3%",
        backgroundColor: "#ffffff",
        minHeight: "26rem",
        pt: { xs: 5, md: 6 },
        overflow: "hidden",
      }}
    >
      {/* Gradient overlay for blue shade on left */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.9), rgba(0,123,255,0.1)), url('/assets/AboutUsBackground_1.png')",
          backgroundSize: "cover",
        }}
      />
      {/* Background image, zoomed in */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% auto", // Zoom in
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />
      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={600}
          color="#1b1763"
          textAlign={"left"}
          gutterBottom
        >
          What We Do ?
        </Typography>
        <Box
          sx={{
            width: 64,
            height: 6,
            borderRadius: 3,
            mt: 0.5,
            mb: 1.5,
          }}
        />
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            textAlign: "left",
            lineHeight: 1.8,
            marginTop: "2rem",
            fontWeight: 400,
            fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
            fontSize: "1.1rem",
            letterSpacing: 0.02,
          }}
        >
          We are building India’s most accessible green energy marketplace,
          enabling seamless adoption of renewable energy for corporate,
          industrial, and residential consumers. Our platform simplifies the
          journey toward an electrified, low-carbon future by bringing together
          energy buyers, developers, and financiers — all in one place. Through
          innovative models like Group Captive, Captive, and Third-Party Open
          Access, we make clean energy not only accessible but also
          affordable and scalable.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
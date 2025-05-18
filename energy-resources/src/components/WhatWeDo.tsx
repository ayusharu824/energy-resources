import { Box, Button, Typography } from "@mui/material";

const WhatWeDo = () => {
  return (
    <>
      <Box
        sx={{
          padding: "0 3%",
          backgroundColor: "#eaf7ff",
          minHeight: "26rem",
          pt: { xs: 5, md: 6 }
        }}
      >
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
            background: "linear-gradient(90deg, #1b1763 60%, #4fc3f7 100%)",
            mt: 0.5,
            mb: 1.5,
          }}
        />
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            maxWidth: "800px",
            textAlign: "left",
            lineHeight: 1.8,
            marginTop: "2rem",
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
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "left",
          marginBottom: "2rem",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            color: "#ffffff",
            borderRadius: "1rem",
          }}
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ textTransform: "none", borderRadius: "1rem" }}
        >
          Contact Us
        </Button>
      </Box>
      </Box>
    </>
  );
};
export default WhatWeDo;

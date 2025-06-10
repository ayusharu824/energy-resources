import { Box, Card, Typography, Grid } from "@mui/material";
import icon1 from "../assets/asset2.png";
import icon2 from "../assets/asset6.png";
import animationData from "../assets/lottiesAnimationJson.json";
import Lottie from "lottie-react";

const AboutCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 4 },
        py: 10,
        mx: "auto",
        maxWidth: 1500,
        backgroundColor: "#f5fafd",
        margin: "0 0",
      }}
    >
      <Grid container spacing={4} alignItems="stretch">
        {/* Animation Section */}
        <Grid size={{xs:12,md:6}}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{
                width: "100%",
                maxWidth: 600,
                height: 350,
              }}
            />
          </Box>
        </Grid>

        {/* Card 1 */}
        <Grid size={{xs:12,md:3}}>
          <Card
            sx={{
              height: "100%",
              background: "#fff",
              borderRadius: 4,
              border: "1px solid #f0f0f0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              p: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                background: "#C8E6C9",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <img
                src={icon1}
                alt="Icon 1"
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Accelerate Your Green Shift
            </Typography>
            <Typography variant="body2" sx={{ color: "#444", lineHeight: 1.6 }}>
              Connecting C&I consumers swiftly with captive and group captive
              green energy solutions — cutting down the time to your first green
              power unit.
            </Typography>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid size={{xs:12,md:3}}>
          <Card
            sx={{
              height: "100%",
              background: "#fff",
              borderRadius: 4,
              border: "1px solid #f0f0f0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              p: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                background: "#C8E6C9",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <img
                src={icon2}
                alt="Icon 2"
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Consumer-Centric Contracts
            </Typography>
            <Typography variant="body2" sx={{ color: "#444", lineHeight: 1.6 }}>
              Streamlined, easy-to-understand PPAs designed for faster,
              hassle-free green energy adoption.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCards;

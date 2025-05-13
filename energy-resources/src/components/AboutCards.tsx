import { Box, Card, Typography } from "@mui/material";
import icon1 from "../assets/asset2.png"; // Replace with your actual file name
import icon2 from "../assets/asset6.png"; // Replace with your actual file name

const AboutCards = () => {
    return(
        <Box
          sx={{
            display: "flex", // Align items horizontally
            justifyContent: "space-between", // Space out the icons
            alignItems: "center", // Center the icons vertically
            marginTop: "-3.5rem", // Add spacing above the icons
            padding: "0 18%",
            position: "relative",
            zIndex: 2,
          }}
        >

          <Card
            sx={{
              maxWidth: 320,
              minHeight: 280,
              background: "#fff",
              borderRadius: 4,
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              m: 2,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
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
                  width: 36,
                  height: 36,
                  objectFit: "contain",
                  alignItems: "left",
                }}
              />
            </Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, textAlign: "left", width: "100%" }}
            >
              Accelerate Your Green Shift
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#222",
                textAlign: "left",
                width: "100%",
                fontWeight: 400,
                lineHeight: 1.6,
                mt: 1,
              }}
            >
              Connecting C&I consumers swiftly with captive and group captive
              green energy solutions—cutting down the time to your first green
              power unit.
            </Typography>
          </Card>
          <Card
            sx={{
              maxWidth: 320,
              minHeight: 280,
              background: "#fff",
              borderRadius: 4,
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              m: 2,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
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
                alt="Icon 1"
                style={{
                  width: 36,
                  height: 36,
                  objectFit: "contain",
                  alignItems: "left",
                }}
              />
            </Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, textAlign: "left", width: "100%" }}
            >
              Consumer-Centric Contracts
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#222",
                textAlign: "left",
                width: "100%",
                fontWeight: 400,
                lineHeight: 1.6,
                mt: 1,
              }}
            >
              Streamlined, easy-to-understand PPAs designed for faster,
              hassle-free green energy adoption.
            </Typography>
          </Card>
        </Box>
    );
};

export default AboutCards;
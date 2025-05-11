import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { List, ListItem, ListItemIcon } from "@mui/material";
import CompostOutlinedIcon from "@mui/icons-material/CompostOutlined";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import WindPowerIcon from "@mui/icons-material/WindPower";
import backgroundImage from "../assets/solarPanelsDark.png";
import FloatingForm from "../components/FloatingForm";
import HeaderNew from "../components/HeaderNew";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import icon1 from "../assets/asset2.png"; // Replace with your actual file name
import icon2 from "../assets/asset6.png"; // Replace with your actual file name
import HomepageHero from "../components/HomepageHero";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1714767224216-03054600b3e8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bed",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1716385892488-c04267116943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1694327671697-730cc4c5b9e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1580960062319-b904d81f8b59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Blinds",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1716434644671-f60998647c28?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chairs",
  },
];

export default function About() {
  return (
    <>
      <HeaderNew />
      <HomepageHero />
      <Box
        sx={{
          backgroundColor: "#fbffff",
          minHeight: "100vh",
          padding: "0 0",
        }}
      >
        {/* Hero Section */}
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
        <Typography
          variant="h4"
          component="h1"
          fontWeight={600}
          color="#1b1763"
          textAlign={"center"}
          margin={"2em 0 1.5em 0"}
          gutterBottom
        >
          Solutions
        </Typography>

        <Card
          sx={{
            background: "#fff",
            borderRadius: 4,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
            p: 4,
            mx: "auto",
            maxWidth: 1100,
            mb: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Link to="/consumers" style={{ textDecoration: "none" }}>
                <SolarPowerIcon
                  color="success"
                  fontSize="large"
                  sx={{ height: "2em", width: "2em" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "1rem",
                    fontWeight: "500",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Consumers
                </Typography>
              </Link>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <WindPowerIcon
                color="success"
                fontSize="large"
                sx={{ height: "2em", width: "2em" }}
              />
              <Typography
                variant="h6"
                sx={{
                  marginTop: "1rem",
                  fontWeight: "500",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Developers
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <MonetizationOnIcon
                color="success"
                fontSize="large"
                sx={{ height: "2em", width: "2em" }}
              />
              <Typography
                variant="h6"
                sx={{
                  marginTop: "1rem",
                  fontWeight: "500",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Financiers
              </Typography>
            </Box>
          </Box>
        </Card>

        <Box sx={{ padding: "0 14%", marginTop: "2rem"}}>
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
            journey toward an electrified, low-carbon future by bringing
            together energy buyers, developers, and financiers — all in one
            place. Through innovative models like Group Captive, Captive, and
            Third-Party Open Access, we make clean energy not only accessible
            but also affordable and scalable.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            marginLeft: "14%",
            justifyContent: "left",
            marginBottom: "2rem",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none", color: "#ffffff", borderRadius: "1rem" }}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ textTransform: "none", borderRadius: "1rem"}}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </>
  );
}

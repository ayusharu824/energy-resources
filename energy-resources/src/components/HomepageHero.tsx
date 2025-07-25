import { Box, Button, Typography } from "@mui/material";
import HeaderNew from "./HeaderNew";
import greenHeroImage from "../assets/hero_green_img_1.jpg";
import mainLogo from "../assets/mainLogo.png";
import { Link } from "react-router-dom";

const HomepageHero = () => {
  return (
    <>
      {/* <HeaderNew /> */}
      <Box
        sx={{
          position: "relative",
          minHeight: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundImage: `url(${greenHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "30% 42%",
          backgroundRepeat: "no-repeat",
          px: { xs: 0, md: 0 },
          py: { xs: 6, md: 10 },
          //marginTop:"4.2em"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: 16, md: 32 },
            left: { xs: 16, md: 32 },
            zIndex: 3,
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={mainLogo}
              alt="Logo"
              width="110"
              height="40"
              style={{ marginTop: "-1.2rem", marginLeft: "-1rem" }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            maxWidth: 600,
            //textAlign: { xs: "center", md: "left" },
            textAlign: "left",
            //ml: { xs: 0, md: 4 },
            pl: { xs: 2, md: 8 },
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "#f5c904", fontWeight: 600, letterSpacing: 2 }}
          >
            Energy For The Future
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "2.14rem" },
              mb: 3,
              color: "#fff",
              textShadow: "0 2px 16px rgba(0,0,0,0.25)",
            }}
          >
            Clean Energy, Smart Future, and Open Access Energy Made Simple
          </Typography>
          <Typography
            sx={{
              mb: 4,
              color: "#fff",
              fontSize: "1.2rem",
              textShadow: "0 10rem 8px rgba(0,0,0,0.18)",
              fontWeight: 500,
            }}
          >
            GEM Energy Helps Green Energy Open Access C&I Buyers, Sellers and
            Financiers Get Better Deal Done Faster.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HomepageHero;

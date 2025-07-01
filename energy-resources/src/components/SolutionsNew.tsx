import { Box, Typography, Grid, Button } from "@mui/material";
import consumerImage from "../assets/windturbines.jpg";
import developerImage from "../assets/greenbulb.jpg";
import financiersImage from "../assets/solarpanels.jpg";
import SolutionIcons1 from "../assets/SolutionsIcon1.png";
import SolutionIcons2 from "../assets/SolutionsIcon2.png";
import SolutionIcons3 from "../assets/SolutionsIcon3.png";
import { useNavigate } from "react-router-dom";
import "../styles/ContactForm.css";

const SolutionsNew = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ mb: 6, mt: 8, backgroundColor: "#ffffff", py: 6 }}>
        <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            color="#1b1763"
            textAlign="left"
            sx={{ mb: 1 }}
            gutterBottom
          >
            Our Solutions
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 6,
              borderRadius: 3,
              background: "linear-gradient(90deg, #1b1763 60%, #4fc3f7 100%)",
              mt: 0.5,
            }}
          />
        </Box>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: "6rem", mb: "6rem", mx: "10rem" }}
        >
          {/* Icon 1 */}
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "#1b1763" }}
            >
              C&I Consumers
            </Typography>
            <div className="icon-flip-container">
              <div className="icon-flip-inner">
                <div className="icon-flip-front">
                  <img
                    src={SolutionIcons3}
                    alt="Icon 1"
                    style={{ width: 260, height: 180 }}
                  />
                </div>
                <div className="icon-flip-back consumer">
                  <Box sx={{ fontSize: "0.9rem", color: "#1b1763" }}>
                    Switch To Smarter, Cheaper Power. Whether you're a factory,
                    office, data center, or logistics hub — we make your shift
                    to clean energy seamless and cost-effective.
                    <li>
                      Join Group Captive communities across states under Open
                      Access.
                    </li>
                    <li>
                      Connect with verified developers offering Group Captive
                      and Third-Party models.
                    </li>
                    <li>
                      Access green financing to lower or eliminate upfront
                      investment.
                    </li>
                  </Box>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                color: "#ffffff",
                borderRadius: "1rem",
                marginTop: "3rem",
                minWidth: "90%",
              }}
              onClick={() => navigate("/consumers")}
            >
              Learn More
            </Button>
          </Grid>
          {/* Icon 2 */}
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "#1b1763" }}
            >
              Developers
            </Typography>
            <div className="icon-flip-container">
              <div className="icon-flip-inner">
                <div className="icon-flip-front">
                  <img
                    src={SolutionIcons1}
                    alt="Icon 2"
                    style={{ width: 120, height: 120 }}
                  />
                </div>
                <div className="icon-flip-back developer">
                  <Box sx={{ fontSize: "0.9rem", color: "#1b1763" }}>
                    We connect renewable energy developers with a wide network
                    of open access consumers across India.
                    <li>
                      List Group Captive or Third-Party projects to attract
                      ready buyers.
                    </li>
                    <li>
                      Accelerate group formation with pre-qualified C&I clients
                      by discom.
                    </li>
                    <li>
                      Streamline financing and execution through verified leads
                      and compliance support.
                    </li>
                  </Box>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                color: "#ffffff",
                borderRadius: "1rem",
                marginTop: "3rem",
                minWidth: "90%",
              }}
            >
              Learn More
            </Button>
          </Grid>
          {/* Icon 3 */}
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "#1b1763" }}
            >
              Financiers
            </Typography>
            <div className="icon-flip-container">
              <div className="icon-flip-inner">
                <div className="icon-flip-front">
                  <img
                    src={SolutionIcons2}
                    alt="Icon 3"
                    style={{ width: 120, height: 120 }}
                  />
                </div>
                <div className="icon-flip-back financier">
                  <Box sx={{ fontSize: "0.9rem", color: "#1b1763" }}>
                    Get access to high-quality renewable energy projects with
                    long-term C&I offtake.
                    <li>
                      Invest in Group Captive, Captive and Third-Party PPAs with
                      stable returns.
                    </li>
                    <li>
                      Accelerate green adoption across industries and commercial
                      users.
                    </li>
                    <li>
                      Partner with trusted developers for low-risk,
                      impact-driven opportunities.
                    </li>
                    Fuel clean energy, earn strong returns.
                  </Box>
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                color: "#ffffff",
                borderRadius: "1rem",
                marginTop: "3rem",
                minWidth: "90%",
              }}
              onClick={() => navigate("/consumers")}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SolutionsNew;

import { Box, Card, Typography, Grid } from "@mui/material";
import consumerImage from "../assets/CndIConsumer.avif"; // Replace with your actual image path
import developerImage from "../assets/developerImage.avif"; // Replace with your actual image path
import financiersImage from "../assets/financiersImage.avif"; // Replace with your actual image path
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import WindPowerIcon from "@mui/icons-material/WindPower";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <>
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
        {/* <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid>
                <Link to="/consumers" style={{ textDecoration: "none" }}>
                  <SolarPowerIcon
                    color="success"
                    fontSize="large"
                    sx={{ height: "2.5em", width: "2.5em" }}
                  />
                </Link>
              </Grid>
              <Grid>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    color: "#1b1763",
                  }}
                >
                  Consumers
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Connecting C&I consumers swiftly with captive and group
                  captive green energy solutions.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid>
                <WindPowerIcon
                  color="success"
                  fontSize="large"
                  sx={{ height: "2.5em", width: "2.5em" }}
                />
              </Grid>
              <Grid>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    color: "#1b1763",
                  }}
                >
                  Developers
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Streamlined onboarding for developers to connect projects with
                  buyers.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size =  {{xs:12,md:4}}>
            <Grid container alignItems="center" spacing={2}>
              <Grid>
                <MonetizationOnIcon
                  color="success"
                  fontSize="large"
                  sx={{ height: "2.5em", width: "2.5em" }}
                />
              </Grid>
              <Grid>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "600",
                    color: "#1b1763",
                  }}
                >
                  Financiers
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Enabling financiers to invest in renewable energy projects
                  with ease.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}

        <Grid container spacing={4}>
          <Grid size={6}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                textAlign: "left",
                width: "100%",
                marginTop: "1.5rem",
              }}
            >
              C&I Consumers
            </Typography>
            <Box sx={{ mt: 3 }}>
              <img
                src={consumerImage} // Replace with your actual image path
                alt="C&I Consumers"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                maxWidth: "800px",
                textAlign: "left",
                lineHeight: 1.8,
                marginTop: "4.5rem",
              }}
            >
              Commercial and Industrial (C&amp;I) consumers now have three
              powerful pathways to switch to green energy — without disruption,
              capex, or complexity.
              <br />
              Whether you're a manufacturing plant, corporate office, data
              centers or logistics park, our platform connects you to the most
              efficient and cost-effective clean energy options available today.
              <br />
              <li>
                We foster community for Group Captive Open Access renewable
                energy.
              </li>
              <li>
                Connecting potential group captive/captive C&amp;I clients with
                the developers.
              </li>
              <li>
                Our wider green energy financiers network makes the funding to
                reduce the initial capex for both the captive and group captive
                project.
              </li>
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                maxWidth: "800px",
                textAlign: "left",
                lineHeight: 1.8,
                marginTop: "10.5rem",
              }}
            >
              Developers can access our varied open access clients across the
              states. Additionally, they can list their upcoming projects for
              Group Captive.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                textAlign: "left",
                width: "100%",
                marginTop: "1.5rem",
              }}
            >
              Developers
            </Typography>
            <Box sx={{ mt: 3 }}>
              <img
                src={developerImage} // Replace with your actual image path
                alt="Developers"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                textAlign: "left",
                width: "100%",
                marginTop: "1.5rem",
              }}
            >
              Financiers
            </Typography>
            <Box sx={{ mt: 3 }}>
              <img
                src={financiersImage} // Replace with your actual image path
                alt="Financiers"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                maxWidth: "800px",
                textAlign: "left",
                lineHeight: 1.8,
                marginTop: "10.5rem",
              }}
            >
              Financiers would get the high return by investing for both C&I
              consumers and developers.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Solutions;

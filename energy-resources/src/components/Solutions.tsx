import { Box, Typography, Grid } from "@mui/material";
import consumerImage from "../assets/windturbines.jpg"; // Replace with your actual image path
import developerImage from "../assets/greenbulb.jpg"; // Replace with your actual image path
import financiersImage from "../assets/solarpanels.jpg"; // Replace with your actual image path

const data = [
  {
    title: "C&I Consumers",
    image: consumerImage,
    text: `Commercial and Industrial (C&I) consumers now have three powerful pathways to switch to green energy — without disruption, capex, or complexity.
Whether you're a manufacturing plant, corporate office, data centers or logistics park, our platform connects you to the most efficient and cost-effective clean energy options available today.`,
    list: [
      "We foster community for Group Captive Open Access renewable energy.",
      "Connecting potential group captive/captive C&I clients with the developers.",
      "Our wider green energy financiers network makes the funding to reduce the initial capex for both the captive and group captive project.",
    ],
    reduceHeight: true,
  },
  {
    title: "Developers",
    image: developerImage,
    text: `Developers now have easier access to a wide base of C&I consumers looking to partner for clean energy projects.`,
    list: [
      "Streamlined matchmaking with potential clients.",
      "Access to a vetted network of financiers to ease project execution.",
      "Tools and analytics for better demand forecasting.",
    ],
    reduceHeight: true,
  },
  {
    title: "Financiers",
    image: financiersImage,
    text: `Financiers can now support clean energy projects with greater confidence and returns.`,
    list: [
      "Pipeline of vetted C&I clients and developers.",
      "Structured financial solutions to reduce risk.",
      "Transparent project tracking and impact measurement.",
    ],
    reduceHeight: true,
  },
];

const Solutions = () => {
  return (
    <>
      <Box sx={{ margin: "0 0", backgroundColor: "#f0f7ff", py: 6 }}>
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
        <Box sx={{ margin: "0 5em" }}>
          {data.map((item, index) => (
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
              key={item.title}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              sx={{ marginBottom: "4rem" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                    marginBottom: "1rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ lineHeight: 1.8, marginBottom: "1rem" }}
                >
                  {item.text}
                </Typography>
                <ul>
                  {item.list.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: item.reduceHeight ? "20rem" : "auto",
                      objectFit: item.reduceHeight ? "cover" : "initial",
                      borderRadius: "12px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Solutions;

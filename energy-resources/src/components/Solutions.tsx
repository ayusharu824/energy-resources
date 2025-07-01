import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import consumerImage from "../assets/windturbines.jpg"
import developerImage from "../assets/greenbulb.jpg";
import financiersImage from "../assets/solarpanels.jpg";

const data = [
  {
    title: "C&I Consumers",
    image: consumerImage,
    text: `Whether you're a factory, office, data center, or logistics hub — we make your shift to clean energy seamless and cost-effective.`,
    text2: `Switch to smarter, cheaper power — without disruption.`,
    list: [
      "Join Group Captive communities across states under Open Access.",
      "Connect with verified developers offering Group Captive and Third-Party models.",
      "Access green financing to lower or eliminate upfront investment.",
    ],
    reduceHeight: true,
  },
  {
    title: "Developers",
    image: developerImage,
    text: `We connect renewable energy developers with a wide network of open access consumers across India.`,
    list: [
      "List Group Captive or Third-Party projects to attract ready buyers.",
      "Accelerate group formation with pre-qualified C&I clients by discom.",
      "Streamline financing and execution through verified leads and compliance support.",
    ],
    reduceHeight: true,
  },
  {
    title: "Financiers",
    image: financiersImage,
    text: `Get access to high-quality renewable energy projects with long-term C&I offtake.`,
    text2: `Fuel clean energy, earn strong returns.`,
    list: [
      "Invest in Group Captive, Captive and Third-Party PPAs with stable returns.",
      "Accelerate green adoption across industries and commercial users.",
      "Partner with trusted developers for low-risk, impact-driven opportunities.",
    ],
    reduceHeight: true,
  },
];

const Solutions = () => {
  return (
      <Box sx={{ margin: "0 0", backgroundColor: "#ffffff", py: 6 }}>
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
       <Grid container spacing={4} sx={{ px: { xs: 2, md: 8 } , mt: "4rem" }}>
        {data.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0 2px 16px rgba(27,23,99,0.10)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  height: 220,
                  objectFit: "cover",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 600, textAlign: "left" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textprimary"
                  sx={{ lineHeight: 1.8, mb: 1 }}
                >
                  {item.text}
                </Typography>
                <ul
                  style={{
                    paddingLeft: "1.2em",
                    marginBottom: "1rem",
                    listStyle: "disc",
                  }}
                >
                  {item.list.map((point, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" color="textprimary">
                        {point}
                      </Typography>
                    </li>
                  ))}
                </ul>
                {item.text2 && (
                  <Typography
                    variant="body1"
                    color="textprimary"
                    sx={{ lineHeight: 1.8 }}
                  >
                    {item.text2}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;

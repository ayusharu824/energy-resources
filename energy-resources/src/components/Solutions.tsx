import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import consumerImage from "../assets/cndIConsumer_1.jpg";
import developerImage from "../assets/developerImage_1.png";
import financiersImage from "../assets/solarpanels.jpg";

const data = [
  {
    title: "C&I Consumers",
    image: consumerImage,
    text: `Whether you're a factory, office, data center, or logistics hub — we make your shift to clean energy seamless and cost-effective.`,
    text2: `Switch to smarter, cheaper power — without disruption.`,
    list: [
      {
        bold: "Access Verified Developers",
        rest: " offering solar rooftop, new, and readily available Open Access green energy projects.",
      },
      {
        bold: "Join Group Captive Communities",
        rest: " across states to benefit from economies of scale and shared infrastructure.",
      },
      {
        bold: "Explore Flexible Financial Models",
        rest: " that reduce or eliminate upfront capex through tailored green financing options.",
      },
    ],
    reduceHeight: true,
  },
  {
    title: "Renewable Energy Developers",
    image: developerImage,
    text: `Unlock opportunities with our integrated services designed to connect renewable energy developers and investors with pre-qualified Open Access consumers across India.`,
    text2: "Focus on building — we’ll handle the matchmaking.",
    list: [
      {
        bold: "List Your Projects -",
        rest: " Whether under development, ready-to-commission, or operational, list your captive/group captive/third party projects to gain immediate visibility and traction.",
      },
      {
        bold: "Reach Pre-Qualified C&I Clients -",
        rest: " Connect with businesses already vetted for load, DISCOM approval, and financial viability, ensuring faster group formation and smoother onboarding.",
      },
      {
        bold: "Attract Retail and Institutional Investors -",
        rest: " Leverage our marketplace to secure funding support for land acquisition, infrastructure, and equity contribution in SPVs.",
      },
      {
        bold: "Accelerate Your Go-to-Market -",
        rest: " We bring you verified demand, financing partnerships, and end-to-end transaction support so you can focus on building high-quality renewable assets.",
      },
    ],
    reduceHeight: true,
  },
  {
    title: "Financiers",
    image: financiersImage,
    text: `Get access to high-quality renewable energy projects with long-term C&I offtake.`,
    text2: `Fuel clean energy, earn strong returns.`,
    list: [
      {
        bold:"",rest: "Invest in green energy open access and rooftop solar PPAs with stable returns.",
      },
      {
        bold:"",rest: "Accelerate green adoption across industries and commercial users",
      },
      {
        bold:"",rest: "Partner with trusted developers for low-risk, high IRR, and impact-driven opportunities.",
      },
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
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 8 }, mt: "4rem" }}>
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
                      {typeof point === "object" ? (
                        <Typography
                          variant="body2"
                          color="textprimary"
                          component="span"
                        >
                          {point.bold ? (
                            <span style={{ fontWeight: 700 }}>
                              {point.bold}
                            </span>
                          ) : null}
                          {point.rest}
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="textprimary">
                          {point}
                        </Typography>
                      )}
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

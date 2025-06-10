import { Box, Typography, Grid } from "@mui/material";
import consumerImage from "../assets/windturbines.jpg";
import developerImage from "../assets/greenbulb.jpg";
import financiersImage from "../assets/solarpanels.jpg";

const gridData = [
  {
    title: "C&I Consumers",
    image: consumerImage,
    desc: "Seamless, cost-effective shift to clean energy for factories, offices, and more.",
  },
  {
    title: "Developers",
    image: developerImage,
    desc: "Connect with a wide network of open access consumers across India.",
  },
  {
    title: "Financiers",
    image: financiersImage,
    desc: "Access high-quality renewable projects with long-term offtake.",
  },
  {
    title: "Solar Solutions",
    image: financiersImage,
    desc: "Affordable and scalable solar energy for every business need.",
  },
];

const DsunForYou = () => {
  return (
    <Box sx={{ mb: 6, mt: 8,backgroundColor: "#f0f7ff", py: 8 }}>
      <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 3 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="#1b1763"
          gutterBottom
        >
          D-Sun For You
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
      <Grid container spacing={4} justifyContent="center">
        {gridData.map((item, idx) => (
          <Grid size={{xs:12,sm:6,md:3}} key={item.title}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                color="#1b1763"
                sx={{ mb: 2 }}
              >
                {item.title}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                    height: "auto",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mt: "auto" }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default DsunForYou;

import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  Container,
  Grid,
} from "@mui/material";
import Header from "../components/Header";
import { List, ListItem, ListItemIcon } from "@mui/material";
import CompostOutlinedIcon from "@mui/icons-material/CompostOutlined";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import WindPowerIcon from "@mui/icons-material/WindPower";
import backgroundImage from "../assets/greenbackground.jpg";

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
      <Header />
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          minHeight: "100vh",
          padding: "2rem 0"
        }}
      >
        {/* Hero Section */}
        {/* About Us Section */}
        <Container
          maxWidth="lg"
          sx={{ marginTop: "3rem", textAlign: "center" }}
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight={600}
            color="#1b1763"
            gutterBottom
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}
          >
            At EnergySage, we are committed to empowering individuals and
            businesses with sustainable energy solutions. Our mission is to
            create a greener future by providing innovative tools, expert
            advice, and resources to help you make informed energy decisions.
            Together, we can build a cleaner, brighter tomorrow.
          </Typography>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Learn More
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
        {/* Horizontal Scrollable Image Grid */}
        <Container maxWidth="xl" sx={{ marginTop: "3rem" }}>
          <Typography variant="h4" gutterBottom>
            Our Gallery
          </Typography>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              padding: 2,
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
            }}
          >
            {itemData.map((item) => (
              <Box
                key={item.title}
                sx={{
                  minWidth: 300,
                  height: 200,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
          <Typography
            variant="h4"
            color="#1b1763"
            fontSize={"2.375rem"}
            textAlign={"center"}
            gutterBottom
          >
            Electrify your home with EnergySage
          </Typography>

          {/* Grid Layout */}
          <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
            {/* Left Column: List */}
            <Grid size={6}>
              {/* <Item> */}
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <SolarPowerIcon color="success" fontSize="large" />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="h5" fontWeight={500}>
                      Save money with renewable energy solutions
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Discover how renewable energy can help you save on utility
                      bills while contributing to a sustainable future.
                    </Typography>
                  </Box>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <CompostOutlinedIcon color="success" fontSize="large" />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="h5" fontWeight={500}>
                      Reduce your carbon footprint
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Learn how adopting green energy solutions can
                      significantly reduce your environmental impact.
                    </Typography>
                  </Box>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <WindPowerIcon color="success" fontSize="large" />
                  </ListItemIcon>
                  <Box>
                    <Typography variant="h5" fontWeight={500}>
                      Access expert advice and resources
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Get guidance from industry experts and access resources to
                      make informed energy decisions.
                    </Typography>
                  </Box>
                </ListItem>
              </List>
              {/* </Item> */}
            </Grid>

            {/* Right Column: Additional Content */}
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                  borderRadius: 2,
                  //boxShadow: 3,
                  padding: 2,
                }}
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/E39neWnw9AA" // Replace with your YouTube video URL
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Call-to-Action Section */}
        <Box textAlign="center" sx={{ marginTop: "4rem" }}>
          <Typography variant="h4" component="p" gutterBottom>
            Ready to make a difference?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              textTransform: "none",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </>
  );
}

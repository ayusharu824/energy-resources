import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { List, ListItem, ListItemIcon } from "@mui/material";
import CompostOutlinedIcon from "@mui/icons-material/CompostOutlined";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import WindPowerIcon from "@mui/icons-material/WindPower";
import backgroundImage from "../assets/background.jpg";
import FloatingForm from "../components/FloatingForm";
import HeaderNew from "../components/HeaderNew";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import icon1 from "../assets/asset2.png"; // Replace with your actual file name
import icon2 from "../assets/asset6.png"; // Replace with your actual file name

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
            backgroundImage: `url(${backgroundImage})`, // Replace with your image URL
            backgroundSize: "cover", // Ensures the image covers the entire area
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            height: "70vh", // Full screen height
            display: "flex", // Enables flexbox for centering text
            justifyContent: "center", // Centers text horizontally
            alignItems: "center", // Centers text vertically
            color: "#ffffff", // White text color
            textAlign: "center", // Center-align text
            position: "relative",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "200",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adds a shadow for better readability
              }}
            >
              Clean Energy, Smart Future, Solar Made Simple
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "1rem",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)", // Adds a shadow for better readability
              }}
            >
              D-Sun Energy Helps Carbon Free Energy Buyers, Sellers and
              Financiers
              <br /> Get Better Deal Done Faster.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                marginTop: "2rem",
                padding: "0.75rem 2rem",
                textTransform: "none",
              }}
            >
              Learn More
            </Button>
          </Box>
          <style>
            {`
      @keyframes backgroundAnimation {
        0% {
          background-size: 100%;
          background-position: center;
        }
        50% {
          background-size: 110%;
          background-position: top;
        }
        100% {
          background-size: 100%;
          background-position: center;
        }
      }
    `}
          </style>
        </Box>
        <Box
          sx={{
            display: "flex", // Align items horizontally
            justifyContent: "space-between", // Space out the icons
            alignItems: "center", // Center the icons vertically
            marginTop: "5rem", // Add spacing above the icons
            padding: "0 12%",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <img
              src={icon1}
              alt="Icon 1"
              style={{
                width: "100px", // Set the width of the icon
                height: "100px", // Set the height of the icon
              }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "1rem", // Add spacing between the icon and text
                fontWeight: "500",
                color: "rgba(0, 0, 0, 0.6)", // Text color
              }}
            >
              Accelerate Your Green Shift
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5rem", // Add spacing between the title and description
                fontWeight: "400",
                color: "rgba(0, 0, 0, 0.7)", // Slightly darker text color for description
                lineHeight: 1.6, // Improve readability
                maxWidth: "250px", // Optional: Limit the width of the description
                //margin: "0 auto", // Center the description text
              }}
            >
              Connecting C&I consumers swiftly with captive and group captive
              green energy solutions—cutting down the time to your first
              green power unit.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={icon2}
              alt="Icon 2"
              style={{
                width: "100px", // Set the width of the icon
                height: "100px", // Set the height of the icon
              }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "1rem", // Add spacing between the icon and text
                fontWeight: "500",
                color: "rgba(0, 0, 0, 0.6)", // Text color
              }}
            >
              Consumer-Centric Contracts
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "0.5em", // Add spacing between the title and description
                fontWeight: "400",
                color: "rgba(0, 0, 0, 0.7)", // Slightly darker text color for description
                lineHeight: 1.6, // Improve readability
                maxWidth: "250px", // Optional: Limit the width of the description
                // margin: "0 auto", // Center the description text
              }}
            >
              Streamlined, easy-to-understand PPAs designed for faster,
              hassle-free green energy adoption.
            </Typography>
          </Box>
        </Box>
        {/* <Container
          maxWidth="lg"
          //sx={{ marginTop: "3rem", textAlign: "center" }}
        > */}
        <Box sx={{ margin: "0 4.5em", marginTop: "3rem" }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="#1b1763"
            textAlign={"left"}
            gutterBottom
          >
            What We Do ?
            <hr />
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
        {/* </Container> */}
        {/* About Us Section
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
        </Container> */}
        <Typography
          variant="h4"
          component="h1"
          fontWeight={600}
          color="#1b1763"
          textAlign={"left"}
          margin={"0 2em"}
          gutterBottom
        >
          Solutions
          <hr />
        </Typography>
        <Box
          sx={{
            display: "flex", // Align items horizontally
            justifyContent: "space-between", // Space out the icons
            alignItems: "center", // Center the icons vertically
            marginTop: "5rem", // Add spacing above the icons
            padding: "0 20%",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
          <Link to="/consumers" style={{ textDecoration: "none" }}>
            <SolarPowerIcon
              color="success"
              fontSize="large"
              sx={{ height: "2em", width: "2em" }}
            />
            
            <Typography
              variant="h6"
              sx={{
                marginTop: "1rem", // Add spacing between the icon and text
                fontWeight: "500",
                color: "rgba(0, 0, 0, 0.6)", // Text color
              }}
            >
              Consumers
            </Typography>
            </Link>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <WindPowerIcon
              color="success"
              fontSize="large"
              sx={{ height: "2em", width: "2em" }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "1rem", // Add spacing between the icon and text
                fontWeight: "500",
                color: "rgba(0, 0, 0, 0.6)", // Text color
              }}
            >
              Developers
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <MonetizationOnIcon
              color="success"
              fontSize="large"
              sx={{ height: "2em", width: "2em" }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "1rem", // Add spacing between the icon and text
                fontWeight: "500",
                color: "rgba(0, 0, 0, 0.6)", // Text color
              }}
            >
              Financiers
            </Typography>
          </Box>
        </Box>
        {/* Horizontal Scrollable Image Grid */}

        <Box
          maxWidth="lg"
          sx={{ marginTop: "3rem", textAlign: "left", padding: "0 1.3em" }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="#1b1763"
            gutterBottom
          >
            1. For Consumers
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              lineHeight: 1.7,
              fontFamily: "'Merriweather', serif", // Use a formal serif font
              fontSize: "1.2rem", // Slightly increase the font size
              fontWeight: 500, // Add a normal font weight for a formal look
              letterSpacing: "0.02em", // Add slight letter spacing for readability
              textAlign: "justify", // Justify the text for a clean, formal layout
              margin: "0 auto", // Center the text block
            }}
          >
            Group Captive Energy Access We aggregate multiple commercial and
            industrial (C&I) energy consumers by state and discom. Based on
            their collective demand: We match them with suitable developers who
            can onboard them into an upcoming or newly developed group captive
            solar/wind plant. Consumers benefit from reduced tariffs and avoid
            upfront capex. This enables faster compliance with
            RPO and ESG goals.
          </Typography>
        </Box>
        <Box
          maxWidth="lg"
          sx={{ marginTop: "3rem", textAlign: "left", padding: "0 1.3em" }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="#1b1763"
            gutterBottom
          >
            2. For Developers
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              lineHeight: 1.7,
              fontFamily: "'Merriweather', serif", // Use a formal serif font
              fontSize: "1.2rem", // Slightly increase the font size
              fontWeight: 500, // Add a normal font weight for a formal look
              letterSpacing: "0.02em", // Add slight letter spacing for readability
              textAlign: "justify", // Justify the text for a clean, formal layout
              margin: "0 auto", // Center the text block
            }}
          >
            Project Listing & Faster Group Formation We offer developers a
            marketplace to: List their group captive or third-party open access
            projects. Get matched with qualified energy consumers, reducing lead
            times and improving project bankability. Ensure faster group
            closures and plant utilization rates.
          </Typography>
        </Box>
        <Box
          maxWidth="lg"
          sx={{ marginTop: "3rem", textAlign: "left", padding: "0 1.3em" }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="#1b1763"
            gutterBottom
          >
            3. For Financiers
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              lineHeight: 1.7,
              fontFamily: "'Merriweather', serif", // Use a formal serif font
              fontSize: "1.2rem", // Slightly increase the font size
              fontWeight: 500, // Add a normal font weight for a formal look
              letterSpacing: "0.02em", // Add slight letter spacing for readability
              textAlign: "justify", // Justify the text for a clean, formal layout
              margin: "0 auto", // Center the text block
            }}
          >
            Investment-Ready Green Projects We connect institutional and private
            financiers with developers seeking funding for: New or
            expansion-stage green energy projects Verified, consumer-backed
            demand pipelines Transparent data and ROI estimates
          </Typography>
        </Box>
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
          <FloatingForm />
        </Box>
      </Box>
    </>
  );
}

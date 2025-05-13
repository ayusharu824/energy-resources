import { Box, Typography, Button } from "@mui/material";
import HeaderNew from "../components/HeaderNew";
import HomepageHero from "../components/HomepageHero";
import ContactForm from "../components/ContactForm";
import AboutCards from "../components/AboutCards";
import Solutions from "../components/Solutions";
import WhatWeDo from "../components/WhatWeDo";

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
        <AboutCards />
        <Solutions />
        <WhatWeDo />
      </Box>

      <ContactForm />
    </>
  );
}

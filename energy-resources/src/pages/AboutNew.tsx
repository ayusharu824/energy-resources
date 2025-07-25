import { Box } from "@mui/material";
import HomepageHero from "../components/HomepageHero";
import ContactForm from "../components/ContactForm";
import AboutCards from "../components/AboutCards";
import Solutions from "../components/Solutions";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";
import DsunForYou from "../components/DsunForYou";
import ConsumerProjectList from "../components/ConsumerProjectList";
import InverstorsProjectList from "../components/InvestorsProjectList";
import GroupCaptive from "../components/GroupCaptive";

export default function About() {
  return (
    <>
      <HomepageHero />
      <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          padding: "0 0",
        }}
      >
        {/* AboutCards is now above the animation */}
        <Services />
        <AboutCards />
        <Solutions />
        {/* <SolutionsNew/> */}
        <DsunForYou />
        <GroupCaptive />
        <ConsumerProjectList />
        <InverstorsProjectList />
        <WhatWeDo />
      </Box>

      <ContactForm />
    </>
  );
}

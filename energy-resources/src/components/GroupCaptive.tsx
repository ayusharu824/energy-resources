import { Box, Typography } from "@mui/material";
import GroupCaptiveImg from "../assets/GroupCaptiveImg.png";

export default function GroupCaptive() {
  return (
    <>
      <Box sx={{ mt: 0, backgroundColor: "#ffffff", py: 6 }}>
        <Box sx={{ pl: { xs: 2, md: "2.2em" }, mb: 0 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            color="#1b1763"
            textAlign="left"
            sx={{ mb: 1 }}
            gutterBottom
          >
            Group Captive Open Access Community
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            px: { xs: 2, md: 6 },
            mt: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              color="#222"
              sx={{
                fontFamily: "Segoe UI, Arial, Helvetica, sans-serif",
                fontSize: "1.1rem",
                lineHeight: 1.85,
                letterSpacing: 0.02,
                textAlign: "left",
              }}
            >
              Group Captive Open Access Solution is a clean energy project developed
              for the collective usage by a group of corporate and industrial (C&I)
              electricity buyers. As per the government regulation, the group of
              buyers will hold 26% equity. Together, all buyers collectively will
              need to consume at least 51% of the power – a PPA is drawn up to
              ensure clarity on electricity tariffs for 15-25 years. The adoption of
              the Group Captive model is witnessing an increasing trend amongst
              corporates, because the savings per-unit electricity make it a
              compelling model. The capital investment is minimal, while per-unit
              tariffs are at least 25-40% cheaper than the grid.
              <br />
              <br />
              We aggregate multiple commercial and industrial (C&I) energy consumers
              by state and discom to form a community/group based on their
              collective demand - this will reduce the time taken to get the clean
              energy from group captive plants.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center", marginLeft:"4rem" }}>
            <img
              src={GroupCaptiveImg}
              alt="C&I Consumers"
              style={{
                maxWidth: "60%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
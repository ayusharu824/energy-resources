import { Box, Typography, Grid } from "@mui/material";

const AboutCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 4 },
        py: 10,
        mx: "auto",
        maxWidth: 1500,
        backgroundColor: "#ffffff",
        margin: "0 0",
      }}
    >
      {/* Headings Section */}
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#1b1763",
            fontFamily: "Lato, 'Segoe UI', Arial, sans-serif",
            mb: 2,
            letterSpacing: 0.5,
          }}
        >
          We're building a future powered by clean energy solutions.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "#333",
            fontFamily: "Lato, 'Segoe UI', Arial, sans-serif",
            maxWidth: 800,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          We are a green energy marketplace that brings together energy consumers, project developers, and financiers on a single platform — making the switch to clean, affordable power easier and faster for everyone.
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {/* Animation Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Animation or content here */}
        </Grid>

        {/* Card 1 */}
        <Grid size={{ xs: 12, md: 3 }}>
          {/* Card 1 content */}
        </Grid>

        {/* Card 2 */}
        <Grid size={{ xs: 12, md: 3 }}>
          {/* Card 2 content */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCards;
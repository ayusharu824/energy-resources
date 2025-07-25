import { Box, Typography, Grid, Card, CardMedia, Button, Fab } from "@mui/material";
import windImg from "../assets/windEnergyType.jpg";
import solarImg from "../assets/solarEnergyType.jpg";
import hybridImg from "../assets/hybridEnergyType.png";
import projectList from "../data/investorProjectList.json";
import { useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
function getImageForProject(energyType: string) {
  switch (energyType) {
    case "wind":
      return windImg;
    case "solar":
      return solarImg;
    case "hybrid":
      return hybridImg;
    default:
      return windImg; // Fallback if no image matches
  }
}

const InverstorsProjectList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box sx={{ backgroundColor: "#ffffff", py: 8 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pl: { xs: 2, md: "2.2em" },
        }}
      >
        <Typography variant="h4" fontWeight={700} color="#1b1763" gutterBottom>
          Instant Green Power: Consumer-Ready Projects
        </Typography>
      </Box>
      <Box
        sx={{
          pl: { xs: 2, md: "2.2em" },
          mb: 3,
        }}
      >
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
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow */}
        <Button
          onClick={() => scroll("left")}
          sx={{
            minWidth: 0,
            width: 40,
            height: 40,
            borderRadius: "50%",
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#fff",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
          }}
        >
          <ArrowBackIosNewIcon />
        </Button>
        {/* Scrollable Cards */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            px: { xs: 2, md: 6 },
            py: 2,
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              height: 8,
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#e0e0e0",
              borderRadius: 4,
            },
          }}
        >
          {projectList.projects.map((project, idx) => (
            <Card
              key={idx}
              sx={{
                minWidth: 520,
                maxWidth: 380,
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "row",
                borderRadius: 4,
                boxShadow: "0 2px 16px rgba(27,23,99,0.10)",
                background: "#fff",
                minHeight: 210,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 160,
                  objectFit: "cover",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                }}
                image={getImageForProject(project.energyType)}
              />
              <Box
                sx={{
                  flex: 2,
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                  minWidth: 0,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: "#1b1763",
                    mb: 1,
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  {project.name}
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 6, md: 6, lg: 6 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4a4a4a", mb: 0.5 }}
                    >
                      <strong>Location:</strong> {project.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4a4a4a", mb: 0.5 }}
                    >
                      <strong>Capacity:</strong> {project.capacity}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4a4a4a", mb: 0.5 }}
                    >
                      <strong>Usage Remaining:</strong> {project.usageRemaining}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4a4a4a", mb: 0.5 }}
                    >
                      <strong>Status:</strong> {project.status}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6, md: 6, lg: 6 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4a4a4a", mb: 0.5 }}
                    >
                      <strong>Avg. Unit Price:</strong> ₹{project.avgUnitPrice}
                      /kWh
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4a4a4a", mb: 0.5 }}
                    >
                      <strong>Phase 1 Close:</strong>{" "}
                      {project.closingWindowPhase1}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4a4a4a", mb: 0.5 }}
                    >
                      <strong>Phase 2 Close:</strong>{" "}
                      {project.closingWindowPhase2}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          ))}
        </Box>
        {/* Right Arrow */}
        <Button
          onClick={() => scroll("right")}
          sx={{
            minWidth: 0,
            width: 40,
            height: 40,
            borderRadius: "50%",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "#fff",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default InverstorsProjectList;

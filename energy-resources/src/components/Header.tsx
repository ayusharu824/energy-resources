import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg,rgb(76, 147, 78),rgb(93, 164, 96),rgb(114, 219, 147),rgb(143, 216, 145),rgb(174, 224, 175))", // Updated gradient with shades of green and white
        backgroundSize: "300% 300%", // Makes the gradient larger than the container
        animation: "flow 4s infinite", // Apply the animation
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Energy Resources
        </Typography>
      </Toolbar>

      {/* Add the animation keyframes */}
      <style>
        {`
          @keyframes flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </AppBar>
  );
};

export default Header;
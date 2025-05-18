import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import mainLogo from "../assets/mainLogoLg.png"; // Adjust the path based on your folder structure

const HeaderNew: React.FC = () => {
  const [anchorElSolutions, setAnchorElSolutions] = React.useState<null | HTMLElement>(null);
  const [anchorElPlatform, setAnchorElPlatform] = React.useState<null | HTMLElement>(null);
  const [anchorElAbout, setAnchorElAbout] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>) => () => {
    setAnchor(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent", // White background
        color: "#ffffff", // Black text
        boxShadow: "none", // Remove default shadow
        //borderBottom: "1px solid #e0e0e0", // Add a subtle border
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#ffffff" }}
        >
          <img
            src={mainLogo}
            alt="LevelTen Energy Logo"
            width="140"
            height="50"
          />
        </Typography>
        </Link>

        {/* Mobile Navigation Links */}
        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {/* Solutions Dropdown */}
          <Button
            color="inherit"
            sx={{ textTransform: "none",color: "#ffffff",fontFamily: "Lato, sans-serif",fontWeight: "400",fontSize: "1rem" }}
            onClick={handleMenuOpen(setAnchorElSolutions)}

          >
            Solutions
          </Button>
          <Menu
            anchorEl={anchorElSolutions}
            open={Boolean(anchorElSolutions)}
            onClose={handleMenuClose(setAnchorElSolutions)}
          >
            <MenuItem onClick={handleMenuClose(setAnchorElSolutions)}>Advisors</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElSolutions)}>Energy Buyers</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElSolutions)}>Developers</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElSolutions)}>Utilities</MenuItem>
          </Menu>

          {/* Platform Dropdown */}
          <Button
            color="inherit"
            sx={{ textTransform: "none",color: "#ffffff",fontFamily: "Lato, sans-serif",fontWeight: "400",fontSize: "1rem"}}
            onClick={handleMenuOpen(setAnchorElPlatform)}
          >
            Platform
          </Button>
          <Menu
            anchorEl={anchorElPlatform}
            open={Boolean(anchorElPlatform)}
            onClose={handleMenuClose(setAnchorElPlatform)}
          >
            <MenuItem onClick={handleMenuClose(setAnchorElPlatform)}>Energy Marketplace</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElPlatform)}>Asset Marketplace</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElPlatform)}>MarketPulse</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElPlatform)}>PPA Index</MenuItem>
          </Menu>

          {/* About Dropdown */}
          <Button
            color="inherit"
            sx={{ textTransform: "none",color: "#ffffff",fontFamily: "Lato, sans-serif",fontWeight: "400",fontSize: "1rem", }}
            onClick={handleMenuOpen(setAnchorElAbout)}
          >
            About
          </Button>
          <Menu
            anchorEl={anchorElAbout}
            open={Boolean(anchorElAbout)}
            onClose={handleMenuClose(setAnchorElAbout)}
          >
            <MenuItem onClick={handleMenuClose(setAnchorElAbout)}>Careers</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElAbout)}>Company News</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorElAbout)}>Alliance</MenuItem>
          </Menu>

          <Button color="inherit" sx={{ textTransform: "none",color: "#ffffff",fontFamily: "Lato, sans-serif",fontWeight: "400",fontSize: "1rem" }}
          >
            Resources
          </Button>
          <Button color="inherit" sx={{ textTransform: "none",color: "#ffffff",fontFamily: "Lato, sans-serif",fontWeight: "400",fontSize: "1rem" }}
          >
            Contact
          </Button>
        </Box>

        {/* Call-to-Action Button */}

        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNew;
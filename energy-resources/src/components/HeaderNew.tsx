import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import mainLogo from "../assets/gem_logo.png";

const navButtonStyle = {
  position: "relative",
  textTransform: "none",
  color: "#5E35B1",
  fontFamily: "Lato, sans-serif",
  fontWeight: 500,
  fontSize: "1.1rem",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: "-4px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#5E35B1",
    transition: "width 0.3s ease-in-out",
  },
  "&:hover": {
    backgroundColor: "transparent",
    "&::after": {
      width: "100%",
    },
  },
};

const HeaderNew: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState({
    solutions: null as null | HTMLElement,
    platform: null as null | HTMLElement,
    about: null as null | HTMLElement,
  });

  const handleMenuOpen = (key: keyof typeof anchorEl) =>
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl((prev) => ({ ...prev, [key]: event.currentTarget }));
    };

  const handleMenuClose = (key: keyof typeof anchorEl) => () => {
    setAnchorEl((prev) => ({ ...prev, [key]: null }));
  };

  const renderMenu = (
    key: keyof typeof anchorEl,
    items: string[]
  ) => (
    <Menu
      anchorEl={anchorEl[key]}
      open={Boolean(anchorEl[key])}
      onClose={handleMenuClose(key)}
    >
      {items.map((item) => (
        <MenuItem key={item} onClick={handleMenuClose(key)}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar
      position="absolute"
      sx={{ background: "transparent", boxShadow: "none", top: 0, left: 0 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={mainLogo}
            alt="Logo"
            width="200"
            height="40"
            style={{ marginTop: "0rem" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3,color:"#0000FF" }}>
          <Button sx={navButtonStyle} onClick={handleMenuOpen("solutions")}>Solutions</Button>
          {renderMenu("solutions", ["Advisors", "Energy Buyers", "Developers", "Utilities"])}

          <Button sx={navButtonStyle} onClick={handleMenuOpen("platform")}>Platform</Button>
          {renderMenu("platform", ["Energy Marketplace", "Asset Marketplace", "MarketPulse", "PPA Index"])}

          <Button sx={navButtonStyle} onClick={handleMenuOpen("about")}>About</Button>
          {renderMenu("about", ["Careers", "Company News", "Alliance"])}

          <Button sx={navButtonStyle}>Resources</Button>
          <Button sx={navButtonStyle}>Contact</Button>
        </Box>

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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./pages/About";
import AboutNew from "./pages/AboutNew";
import Consumers from "./pages/Consumers";
import NewUsersList from "./components/NewUsersList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green
    },
    background: {
      default: "#fbffff", // White
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<AboutNew />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutnew" element={<AboutNew />} />
          <Route path="/consumers" element={<Consumers />} />
          <Route path="/9080users0756" element={<NewUsersList />} />
          <Route path="*" element={<AboutNew />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

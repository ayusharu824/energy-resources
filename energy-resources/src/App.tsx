import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import About from './pages/About';
import AboutNew from './pages/AboutNew';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green
    },
    background: {
      default: '#fbffff', // White
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/aboutnew" element={<AboutNew />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

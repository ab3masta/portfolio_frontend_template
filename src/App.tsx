import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import createTheme from '@mui/material/styles/createTheme';
import store from './redux/store';
import themeFile from './utils/theme';

// Redux
import { Provider } from 'react-redux';
import './App.css';
// Pages
import Home from './pages/home';
import About from './pages/about';
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import MobileAppProject from "./pages/mobileAppProjects";
import PageNotFound from "./pages/error/pageNotFound";
import Services from "./pages/services";
import PrivacyPolicy from "./pages/privacyPolicy";
import WebAppProject from "./pages/webAppProjects";
import Work from "./pages/work";
import AdminLogin from "./pages/admin/adminLogin";
import Admin from "./pages/admin/admin";
import ScrollTop from "./components/components/scrollToTop";
import TermsOfService from './pages/termsOfService';
import ResponsiveFooter from './components/components/footer';
import ResponsiveAppBar from './components/components/appbar';
const theme = createTheme(themeFile);

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <ResponsiveAppBar />
            <div className="container">
              <Routes>
                <Route path="*" element={<PageNotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/mobile-app-projects" element={<MobileAppProject />} />
                <Route path="/mobile-web-projects" element={<WebAppProject />} />
                <Route path="/services" element={<Services />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </div>
            <ScrollTop {...this.props}>
              <Fab size="medium" aria-label="scroll back to top" color="primary">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop >
            <ResponsiveFooter />
          </Router></Provider>
      </ThemeProvider>
    );
  }
}

export default App;



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ProfessionalExperience from './components/ProfessionalExperience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogComponent from './pages/BlogComponent'
import DevisPage from './pages/DevisPage'
import AboutPage from './pages/AboutPage'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/devis" element={<DevisPage />} />
          <Route path="/blog" element={<BlogComponent />} />
          <Route path="/experience" element={<ProfessionalExperience />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </StrictMode>
);

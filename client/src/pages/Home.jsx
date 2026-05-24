import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureHighlights from '../components/FeatureHighlights';
import ServicesGrid from '../components/ServicesGrid';
import StatsRow from '../components/StatsRow';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';

function Home() {
  const [services, setServices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error('Failed to fetch services:', err));
  }, []);

  // Scroll to hash anchor ONLY when dynamic content finishes loading
  useEffect(() => {
    if (services.length > 0 && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [services, location.hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <FeatureHighlights />
      <ServicesGrid services={services} />
      <StatsRow />
      <CTABanner />
      <Contact />
      <Footer />
      <Lightbox />
    </>
  );
}

export default Home;

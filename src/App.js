import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutRedix from './components/AboutRedix/AboutRedix';
import WhyUs from './components/WhyUs/WhyUs';
import MarketAnalysis from './components/MarketAnalysis/MarketAnalysis';
import Strategy from './components/Strategy/Strategy';
import Packages from './components/Packages/Packages';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutRedix />
      <WhyUs />
      <MarketAnalysis />
      <Strategy />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

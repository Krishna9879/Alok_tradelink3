import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/pages/About';
import PriceList from './Components/pages/Price';
import Contact from './Components/pages/Contact';
import BondedAbrasives from './Components/pages/Products/BondedAbrasives';
import CoatedAbrasives from './Components/pages/Products/CoatedAbrasives';
import CumiPowerTool from './Components/pages/Products/CumiPowerTool';
import ThinWheel from './Components/pages/Products/ThinWheel';
import Super from './Components/pages/Products/Super';
import Diamond from './Components/pages/Products/Dimond';
import Fein from './Components/pages/Products/Fein';
import NewProduct from './Components/pages/NewProduct';
import AnniversaryPopup from './Components/AnniversaryPopup';

function App() {
  const [showPopup, setShowPopup] = useState(true); // Always show the popup

  const handlePopupClose = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/bonded" element={<BondedAbrasives />} />
        <Route path="/coated-abrasives" element={<CoatedAbrasives />} />
        <Route path="/cumi-powertools" element={<CumiPowerTool />} />
        <Route path="/thin-wheels" element={<ThinWheel />} />
        <Route path="/super-abrasives" element={<Super />} />
        <Route path="/diamond-tools" element={<Diamond />} />
        <Route path="/fein-powertools" element={<Fein />} />
      </Routes>
      <Footer />
      {/* Show the Anniversary Popup if showPopup is true */}
      {showPopup && <AnniversaryPopup onClose={handlePopupClose} />}
    </Router>
  );
}

export default App;
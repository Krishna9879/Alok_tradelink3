import React, { useState, useRef, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [showAddressBanner, setShowAddressBanner] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const navbarRef = useRef(null);

  const handleMouseEnter = (itemName) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    {
      name: 'Products',
      link: '#',
      dropdown: [
        { name: 'Bonded Abrasives', link: '/product/bonded' },
        { name: 'Coated Abrasives', link: '/coated-abrasives' },
        { name: 'Thin Wheels', link: '/thin-wheels' },
        { name: 'Non-Woven', link: 'pdf/nonwooven/nonwoven.pdf' },
        { name: 'CUMI Powertools', link: '/cumi-powertools' },
        { name: 'Super Abrasives', link: '/super-abrasives' },
        { name: 'Cim-Cool', link: 'pdf/cimcool/CIMCoolBrochure.pdf' },
        { name: 'Diamond Tools', link: '/diamond-tools' },
        { name: 'Fein Powertools', link: '/fein-powertools' }
      ]
    },
    { 
      name: 'New Products', 
      link: '/newproduct',
      isHighlighted: true  // Added this flag for the highlight
    },
    { name: 'Price Listing', link: '/pricelist' },
    { name: 'Contact', link: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 100) {
          navbarRef.current.classList.add('scrolled');
        } else {
          navbarRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <AnimatePresence>
        {showTopBanner && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white"
          >
            <div className="container mx-auto px-4 py-3 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-wrap">
                  <span className="bg-amber-400 text-blue-900 px-4 py-1.5 rounded-full mr-4 text-sm font-bold uppercase mb-2 sm:mb-0">
                    Important Update
                  </span>
                  <p className="text-sm sm:text-lg font-medium">
                    From 01.04.2024 Our Relief Road Office Will Be Merged With Rakhial Office.
                  </p>
                </div>
                <button
                  onClick={() => setShowTopBanner(false)}
                  className="text-white hover:text-amber-200 transition-colors ml-2 flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <nav
        ref={navbarRef}
        className="sticky top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <a href="/">
                <img 
                  src="../alok-tradelink-logo.png" 
                  alt="Alok Tradelink" 
                  className="h-16 w-auto transform hover:scale-105 transition-transform"
                />
              </a>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.link}
                    className={`flex items-center px-3 py-2 transition-colors font-medium group ${
                      item.isHighlighted 
                        ? 'text-blue-600 bg-blue-50 rounded-full px-4 animate-pulse hover:bg-blue-100'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span className={`relative ${!item.isHighlighted ? 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all group-hover:after:w-full' : ''}`}>
                      {item.name}
                    </span>
                    {item.dropdown && (
                      <FaChevronDown className="ml-1.5 w-3 h-3 mt-0.5 transform group-hover:rotate-180 transition-transform" />
                    )}
                  </a>

                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 min-w-[240px] bg-white rounded-lg shadow-xl border border-gray-100 mt-1 py-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.link}
                          className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <span className="mr-3">•</span>
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-5">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between h-20">
            <a href="/" className="flex-shrink-0">
              <img 
                src="../alok-tradelink-logo.png" 
                alt="Alok Tradelink" 
                className="h-14 w-auto"
              />
            </a>
            <div className="pr-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden fixed top-[80px] left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <div key={item.name} className="mb-1">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg"
                        >
                          <span className="font-medium text-gray-700">{item.name}</span>
                          <FaChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: activeDropdown === item.name ? "auto" : 0 }}
                          className="overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.link}
                              className="block pl-8 pr-4 py-2.5 text-gray-600 hover:bg-blue-50 rounded-lg"
                            >
                              • {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      </>
                    ) : (
                      <a
                        href={item.link}
                        className={`block px-4 py-3 font-medium rounded-lg ${
                          item.isHighlighted
                            ? 'text-blue-600 bg-blue-50 animate-pulse'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-100">
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Address Banner */}
      <AnimatePresence>
        {showAddressBanner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-amber-50 border-y border-amber-200"
          >
            <div className="container mx-auto px-4 py-4 relative">
              <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-1 pr-4">
                  <div className="bg-amber-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-lg font-medium text-amber-800">
                    <span className="font-bold">New Address:</span> D-005, Sumel-7 Business Park, Near Soni Ni Chawl Fly Over Bridge, Rakhial, Ahmedabad-380023
                  </p>
                </div>
                <button
                  onClick={() => setShowAddressBanner(false)}
                  className="text-amber-600 hover:text-amber-800 flex-shrink-0 mt-2 sm:mt-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}  
      </AnimatePresence>
    </>
  );
};

export default Navbar;
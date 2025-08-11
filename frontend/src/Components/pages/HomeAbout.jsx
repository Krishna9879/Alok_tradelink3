import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  const parallaxRef = useRef(null);
  const cardRefs = useRef([]);
  
  const dealerLogos = [
    { id: 'cumi', url: 'https://www.cumi-murugappa.com/abrasives/', img: 'homeabout/cumi-logo.png', alt: 'CUMI Logo' },
    { id: 'solar', url: 'https://www.solardiamondtools.com/', img: 'homeabout/solardiamond.png', alt: 'Solar Diamond Tools Logo' },
    { id: 'fein', url: 'https://fein.com/en_in/en_in/', img: 'homeabout/fein-logo.png', alt: 'FEIN Logo' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target) return;
          const isRight = entry.target.dataset.position === 'right';
          
          if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0) rotateY(0)';
            entry.target.style.opacity = '1';
          } else {
            entry.target.style.transform = `translateX(${isRight ? '-50%' : '50%'}) rotateY(${isRight ? '-10deg' : '10deg'})`;
            entry.target.style.opacity = '0';
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 overflow-hidden py-16">
      {/* Brand Logo Section this sectionis just to see that htis is working correctly and i jsut wna tot know this is th wokring fine  */}
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-4 text-center">
            Authorised Dealer
          </h2>
          <motion.div 
            className="w-40 h-1 bg-blue-400 rounded mb-12" 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {dealerLogos.map((logo, index) => (
              <motion.li
                key={logo.id}
                ref={el => cardRefs.current[index] = el}
                data-position={index % 2 === 0 ? 'left' : 'right'}
                className="group perspective"
                style={{
                  opacity: 0,
                  transform: `translateX(${index % 2 === 0 ? '50%' : '-50%'}) rotateY(${index % 2 === 0 ? '10deg' : '-10deg'})`,
                }}
              >
                <a 
                  href={logo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transform-gpu transition-all duration-300 group-hover:scale-105"
                >
                  <div className="relative bg-white rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/20 transform translate-y-2 translate-x-2 rounded-xl transition-transform duration-300 group-hover:translate-y-3 group-hover:translate-x-3" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 transform translate-y-1 translate-x-1 rounded-xl transition-transform duration-300 group-hover:translate-y-2 group-hover:translate-x-2" />
                    <div className="relative bg-white p-6 rounded-xl transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                      <img 
                        className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-110" 
                        src={logo.img} 
                        alt={logo.alt} 
                      />
                    </div>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="group perspective">
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 lg:p-12 transform transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-blue-900/30 transform translate-y-2 translate-x-2 rounded-xl transition-transform duration-300 group-hover:translate-y-3 group-hover:translate-x-3" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 transform translate-y-1 translate-x-1 rounded-xl transition-transform duration-300 group-hover:translate-y-2 group-hover:translate-x-2" />
                
                {/* Content */}
                // ... existing code ...

<div className="relative z-10">
  <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Alok Tradelink Private Limited</h1>
  <motion.div 
    className="space-y-6 text-lg text-white/90" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1, delay: 0.5 }}
  >
    <p>
      For <strong className="text-blue-200">over 40 years,</strong> we've proudly served as the <strong className="text-blue-200">Exclusive Authorized Dealer</strong> for <strong className="text-blue-200">Carborundum Universal Ltd.</strong> Our four-decade legacy is built on delivering top-notch products and exceptional service.
    </p>
    <p>
      As the sole authorized dealer, our team offers unparalleled expertise and a comprehensive range of products tailored to your needs. Our extensive product knowledge ensures you receive the best solutions.
    </p>
    <p>
      Through our long-standing partnership with Carborundum Universal Ltd, we've established ourselves as a trusted and reliable dealer. We're committed to providing superior products and outstanding customer support.
    </p>
    <p>
      <strong className="text-blue-200">By choosing us, you benefit from our 40-year expertise and commitment to excellence. We look forward to serving you.</strong>
    </p>
  </motion.div>
</div>

// ... existing code ...
              </div>
            </div>
          </motion.div>

          {/* Parallax Background this is the parallax chanages but i am not working anymore*/}
          <div className="w-full lg:w-1/2 relative overflow-hidden order-1 lg:order-2 rounded-xl" style={{ minHeight: '500px' }}>
            <motion.div
              ref={parallaxRef}
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
              style={{ 
                backgroundImage: `url(/alokshop.jpg)`,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
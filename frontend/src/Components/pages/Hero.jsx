import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { url: "/slides/slider-1.png" },
  { url: "/slides/slider-2.png" },
  { url: "/slides/slider-3.png" },
  { url: "/slides/slider-4.png" },
  { url: "/slides/slider-5.png" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Dynamic height based on screen size */}
      <div className={`relative ${isMobile ? "h-[300px]" : "h-[400px] xs:h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Responsive image container */}
            <div className="relative w-full h-full">
              <img
                src={slides[currentSlide].url}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay with responsive opacity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content container with responsive padding and text sizes */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent max-w-4xl mx-auto leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base xs:text-lg sm:text-xl md:text-2xl text-purple-200 mt-3 max-w-2xl mx-auto"
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Responsive sizing and positioning */}
        <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 md:p-6">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </motion.button>
        </div>

        {/* Pagination Dots - Responsive positioning and sizing */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
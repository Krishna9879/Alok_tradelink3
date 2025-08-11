import React, { useEffect, useRef } from 'react';
import Fireworks from 'fireworks-js';
import 'animate.css';

const AnniversaryPopup = ({ onClose }) => {
  const fireworksContainer = useRef(null);

  useEffect(() => {
    // Initialize fireworks
    const fireworks = new Fireworks(fireworksContainer.current, {
      autoresize: true,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 50,
      traceLength: 3,
      traceSpeed: 10,
      explosion: 5,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
      hue: {
        min: 0,
        max: 360,
      },
      delay: {
        min: 30,
        max: 60,
      },
      rocketsPoint: {
        min: 50,
        max: 50,
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3,
        },
        trace: {
          min: 1,
          max: 2,
        },
      },
      brightness: {
        min: 50,
        max: 80,
      },
    });

    fireworks.start();

    // Cleanup fireworks on unmount
    return () => {
      fireworks.stop();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      {/* Fireworks Container */}
      <div ref={fireworksContainer} className="absolute inset-0 z-0"></div>

      {/* Popup Content */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-pink-500 p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-yellow-400 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 max-w-4xl animate__animated animate__fadeIn animate__faster">
        {/* Close Button */}
        <button
          onClick={onClose} // Ensure this is correctly calling the onClose function
          className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl font-bold hover:from-red-500 hover:to-pink-500 transition-all duration-300 animate__animated animate__bounceIn"
        >
          ✕
        </button>

        {/* Popup Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-200 text-center mb-6 animate__animated animate__pulse animate__infinite">
          🎉 40th Anniversary Celebration! 🎉
        </h1>

        {/* Popup Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white text-center mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          Alok Tradelink Pvt Ltd - 40 Years of Excellence in Abrasives & Power Tools!
        </p>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-white text-center mt-6 animate__animated animate__fadeInUp animate__delay-2s">
          Thank you for being part of our journey. Explore our wide range of products!
        </p>
      </div>
    </div>
  );
};

export default AnniversaryPopup;
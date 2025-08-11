import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const ThinWheel = () => {
  const cards = [
    {
      id: 1,
      image: "product/Thinwheel/aluminium.png",
      title: "Aluminium",
      pdfUrl: "pdf/thin-wheels/aluminium.pdf"
    },
    {
      id: 2,
      image: "product/Thinwheel/hi-cut-steel.png",
      title: "Hi Cut Steel",
      pdfUrl: "pdf/thin-wheels/hi_cut_steel.pdf"
    },
    {
      id: 3,
      image: "product/Thinwheel/high-carb-stone.png",
      title: "Hi Carb Stone",
      pdfUrl: "pdf/thin-wheels/hi_carb_stone.pdf"
    },
    {
      id: 4,
      image: "product/Thinwheel/ss-inox.png",
      title: "SS Inox",
      pdfUrl: "pdf/thin-wheels/ss_inox.pdf"
    },
    {
      id: 5,
      image: "product/Thinwheel/stainless-steel.png",
      title: "Stainless Steel",
      pdfUrl: "pdf/thin-wheels/stainless_steel.pdf"
    }
  ];

  return (
    <div className="w-full bg-white p-8">
      {/* Header Section */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white bg-blue-500 py-6 mb-12 shadow-lg">
        THIN WHEELS
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <CardWithIntersection key={card.id} {...card} index={index} />
        ))}
      </div>
    </div>
  );
};

const CardWithIntersection = ({ image, title, pdfUrl, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-10');
            entry.target.classList.remove('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-gray-100 rounded-lg shadow-lg p-6 transform transition-all duration-500 opacity-0 translate-y-10 relative overflow-hidden"
      style={{ animationDelay: `${index * 0.8}s` }}
    >
      {/* Glassy Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-50 blur-sm"></div>

      {/* Product Image Container */}
      <div className="h-48 flex items-center justify-center bg-black mb-4 p-4 relative z-10">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title (Visible on Mobile, Popup on Desktop) */}
      <div
        className="absolute top-1/2 right-0 transform translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20 px-4 py-2 bg-blue-500 text-white rounded-l-full sm:hidden md:block"
        style={{ transform: 'translateY(-50%)' }} // Center vertically
      >
        {title}
      </div>

      {/* Title (Always Visible on Mobile) */}
      <h3 className="text-center text-xl font-bold text-blue-500 mt-4 sm:hidden">
        {title}
      </h3>

      {/* Blue Divider Line */}
      <div className="w-1/2 h-0.5 bg-blue-500 mx-auto relative z-10"></div>

      {/* PDF Download Button */}
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
          <span>Download PDF</span>
          <Download size={20} />
        </button>
      </a>
    </div>
  );
};

export default ThinWheel;
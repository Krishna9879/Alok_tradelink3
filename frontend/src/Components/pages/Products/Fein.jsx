import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const Fein = () => {
  const toolsData = [
    { title: 'Angle Drill', image: '../product/fein/angle.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Belt Grinder', image: '../product/fein/beltgrinder.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Compact Angle Grinders', image: '../product/fein/compactangle.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Cordless Drill/ Driver', image: '../product/fein/cordless.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Die Grinder', image: '../product/fein/diegrinder.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Hand Drill', image: '../product/fein/drill.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Drill Jigs', image: '../product/fein/drilljigs.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Dry Wall Screw Gun', image: '../product/fein/drywallscrew.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Hacksaw', image: '../product/fein/hacksaw.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Hand Guided Core Drill', image: '../product/fein/handguidedcore.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Impact Wrench', image: '../product/fein/impactwrench.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Jigsaw', image: '../product/fein/jigsaw.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Large Angle Grinder', image: '../product/fein/largeangle.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Metal Core Drilling', image: '../product/fein/metalcore.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Metal Screw Gun', image: '../product/fein/metalscrew.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Multi Master Set', image: '../product/fein/multimaster.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Nibblers', image: '../product/fein/nibblers.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Pipe Notching/ Polishing', image: '../product/fein/pipenotching.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Plane Grinder', image: '../product/fein/plangrinder.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Polisher/ Sander', image: '../product/fein/polishersander.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Rotary Drill', image: '../product/fein/rotary.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Sheet Metal Shears', image: '../product/fein/sheetmetalsher.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Slitting Shears', image: '../product/fein/sliting.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Straight Grinder', image: '../product/fein/straight.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Super Cut', image: '../product/fein/supercut.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Tappers', image: '../product/fein/tapper.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    { title: 'Vacuum Pump', image: '../product/fein/vaccumpump.png', pdfLink: '../pdf/Fein/FEIN_Catalogue_All_product.pdf' },
    // ... rest of your tools data
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-6 px-4 flex justify-center items-center gap-4">
        <img 
          src="homeabout/fein-logo.png" 
          alt="Fein Logo" 
          className="h-12 w-12"
        />
        <h1 className="text-4xl font-bold tracking-wider">POWER TOOLS</h1>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool, index) => (
            <CardWithAnimation key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardWithAnimation = ({ title, image, pdfLink }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'rotate-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'rotate-3');
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-10', 'rotate-3');
            entry.target.classList.remove('opacity-100', 'translate-y-0', 'rotate-0');
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
      className="group opacity-0 translate-y-10 rotate-3 transition-all duration-700 ease-out"
    >
      <div className="relative bg-white/20 backdrop-blur-sm rounded-lg p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 
        hover:translate-y-[-5px] border border-white/30">
        <div className="overflow-hidden rounded-lg mb-4 bg-white">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-contain transform transition-transform duration-500 
              group-hover:scale-110"
          />
        </div>
        
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h2>
        
        <a href={pdfLink}><button
          className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 
            rounded-full hover:bg-blue-600 transition-colors duration-300 group"
        >
          <span>Download PDF</span>
          <Download 
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" 
          />
        </button>
        </a>
      </div>
    </div>
  );
};

export default Fein;
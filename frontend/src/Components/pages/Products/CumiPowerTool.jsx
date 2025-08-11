import React, { useEffect, useRef } from 'react';

const CumiPowerTool = () => {
  const powerToolsData = [
    {
      category: 'Power Tools',
      items: [
        {
          title: 'Chop Saw',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/cutoffsaw.png',
        },
        {
          title: 'Rotary Drills',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/rotarydrill.png',
        },
        {
          title: 'Hammer Drills',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/hammerdrill.png',
        },
      ],
    },
    {
      category: 'Angle Grinders',
      items: [
        {
          title: 'CAG4-600',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/angle-grinder-CAG-4-600.png',
        },
        {
          title: 'CAG180-Elite',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/angle-grinder-CAG-180-elite.png',
        },
        {
          title: 'CPAG-720W',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/angle-grinder-CPAG-720W.png',
        },
        {
          title: 'CPAG-1200W',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/angle-grinder-CPAG-1200W.png',
        },
      ],
    },
    {
      category: 'Tile Cutter',
      items: [
        {
          title: 'CTC110-PLUS',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/tile-cutter-CTC-110-PLUS.png',
        },
        {
          title: 'CTC125-SG',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/tile-cutter-CTC-125-SG.png',
        },
        {
          title: 'CTC-150',
          pdfLink: '../pdf/power-tools/new_cumi_power_tools.pdf',
          image: '../product/powertools/tile-cutter-CTC-150.png',
        },
      ],
    },
  ];

  const cardRefs = useRef([]);

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
        threshold: 0.2,
        rootMargin: '-5% 0px -5% 0px',
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
    <div className="w-full bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 sm:py-8">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-4">
          <img
            className="h-8 sm:h-10 md:h-12"
            src="homeabout/cumi-logo.png"
            alt="CUMI Logo"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Power Tools</h1>
        </div>
      </header>

      {/* Power Tools Grid */}
      <section className="w-full max-w-[95%] sm:max-w-[90%] mx-auto py-6 sm:py-8">
        {powerToolsData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 sm:mb-12">
            {/* Category Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 border-b-2 border-blue-500 pb-2 px-4 sm:px-0">
              {category.category}
            </h2>
            {/* Category Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
              {category.items.map((tool, toolIndex) => {
                const position = toolIndex % 2 === 0 ? 'left' : 'right';
                return (
                  <div
                    key={toolIndex}
                    ref={(el) => (cardRefs.current[categoryIndex * category.items.length + toolIndex] = el)}
                    data-position={position}
                    className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform opacity-0"
                    style={{
                      transform: `translateX(${position === 'right' ? '-50%' : '50%'}) rotateY(${position === 'right' ? '-10deg' : '10deg'})`,
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {/* Product Image with Hover Effect */}
                    <div className="mb-3 sm:mb-4 h-32 sm:h-40 md:h-48 flex items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    {/* Product Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                      {tool.title}
                    </h3>
                    {/* PDF Download Button with Hover Effect */}
                    <a
                      href={tool.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-900 text-white py-2 rounded-md text-center hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
                    >
                      Download PDF
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CumiPowerTool;
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

const BondedAbrasives = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Same grindingTools array as before
  const grindingTools = [
    {
      title: 'Ball Grinding',
      description: 'Ball grinding wheels offer you the best performance in terms of material removal rate and higher wheel life.',
      pdfLink: '../pdf/bonded-abrasives/ball_grinding.pdf',
      image: '../product/bonded/ballgrinding.png',
      color: '#0076BE'
    },
    {
      title: 'Center Less',
      description: 'CUMI range of vitrified and resin bonded wheels offer you excellent stock removal with very good size control constancy with some ex...',
      pdfLink: '../pdf/bonded-abrasives/bonded-abrasives.pdf',
      image: '../product/bonded/centerless.png',
      color: '#FFEB3B'
    },
    {
      title: 'Crank Shaft',
      description: 'Crankshaft design requires meticulous attention from material selection to the various hardening processes. Each part of the crank...',
      pdfLink: '../pdf/bonded-abrasives/crank_shaft.pdf',
      image: '../product/bonded/crankshaft.png',
      color: '#FF5733'
    },
    {
      title: 'Cylindrical Grinding',
      description: 'Cylindrical wheels are used for a variety of grinding operations that require size generation, fine surface finish and fast stock removal. Special wheels are also available for multiple diameters and shoulder grinding with pre-formed wheel faces.',
      pdfLink: '../pdf/bonded-abrasives/cylindrical_grinding.pdf',
      image: '../product/bonded/cylindrical.png',
      color: '#4CAF50'
    },
    {
      title: 'Flute Grinding',
      description: 'Being a high depth of cut, form generating grinding process, Flute grinding operations are at high speeds and remove material at rates comparable to machining process rather than grinding.',
      pdfLink: '../pdf/bonded-abrasives/flute_grinding.pdf',
      image: '../product/bonded/flut.png',
      color: '#2196F3'
    },
    {
      title: 'Razor Blade',
      description: 'Razor blade wheels are made of a special resilient bond with fine grit Silicon Carbide, manufactured under a strictly monitored hot press moulding process.',
      pdfLink: '../pdf/bonded-abrasives/razor_blade.pdf',
      image: '../product/bonded/razorblade.png',
      color: '#9C27B0'
    },
    {
      title: 'Roll Grinding',
      description: 'Roll Grinding wheels combine the latest developments in resin bond technology along with suitable grain combination to give the optimal balance between cutting action and wheel life without compromising on the quality parameters.',
      pdfLink: '../pdf/bonded-abrasives/roll_grinding.pdf',
      image: '../product/bonded/roll.png',
      color: '#FF9800'
    },
    {
      title: 'Rubber Control',
      description: 'These wheels are made using a distinct calendaring process, leading to superlative & consistent performance making it as the most preferred product in the industry. The controlled wear not only leads to highly precise components but also gives longer life.',
      pdfLink: '../pdf/bonded-abrasives/rubber_control.pdf',
      image: '../product/bonded/rubber.png',
      color: '#3F51B5'
    },
    {
      title: 'Specialists',
      description: 'Special grinding tools to fulfill your special grinding requirements.',
      pdfLink: '../pdf/bonded-abrasives/specialities.pdf',
      image: '../product/bonded/specialist.png',
      color: '#795548'
    },
    {
      title: 'Tool Grinding',
      description: 'Tool room grinding wheels find vast applications in the manufacture and regrinding of cutting tools like drills, reamers, milling cutters etc.',
      pdfLink: '../pdf/bonded-abrasives/tool_grinding.pdf',
      image: '../product/bonded/tool.png',
      color: '#0076BE'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile Layout Component
  const MobileLayout = () => {
    const contentRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!contentRef.current) return;
        
        const sections = contentRef.current.querySelectorAll('.mobile-section');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + rect.height) {
            setActiveIndex(index);
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className="relative min-h-screen">
        {/* Fixed Header - Adjusted top position to account for navbar */}
        <div className="fixed top-26 left-0 right-0 z-20 bg-white"> {/* Changed top from 0 to 16 */}
          <div className="w-full bg-[#0076BE] py-4">
            <h1 className="text-2xl font-bold text-white text-center tracking-wider">
              BONDED ABRASIVES
            </h1>
          </div>
          <div className="p-4">
            <motion.div 
              className="w-full h-40 rounded-lg border-8 overflow-hidden bg-white p-4"
              style={{ borderColor: grindingTools[activeIndex].color }}
              animate={{ borderColor: grindingTools[activeIndex].color }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={grindingTools[activeIndex].image}
                  alt={grindingTools[activeIndex].title}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Scrollable Content - Adjusted margin-top to account for navbar */}
        <div 
          ref={contentRef}
          className="pt-80" // Increased padding-top to account for navbar
        >
          {grindingTools.map((tool, index) => (
            <motion.div
              key={index}
              className="mobile-section px-4 py-8 min-h-[calc(100vh-16rem)] flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
            >
              <div className="space-y-4">
                <motion.h2 
                  className="text-2xl font-bold text-gray-800"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {tool.title}
                </motion.h2>
                
                <motion.p 
                  className="text-base text-gray-600"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {tool.description}
                </motion.p>

                <motion.a 
                  href={tool.pdfLink}
                  className="inline-block"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button className="flex items-center gap-2 px-6 py-2 bg-[#0076BE] text-white rounded-md hover:bg-blue-600 transition-colors text-sm">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Desktop Layout Component
  const DesktopLayout = () => (
    <div ref={containerRef} className="flex pt-16"> {/* Added pt-16 for navbar spacing */}
      <div className="w-1/2 ml-16 py-16">
        {grindingTools.map((tool, index) => (
          <motion.div
            key={index}
            className="min-h-[80vh] flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
            onViewportEnter={() => setActiveIndex(index)}
          >
            <div className="max-w-xl space-y-6">
              <motion.h2 
                className="text-4xl font-bold text-gray-800"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {tool.title}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {tool.description}
              </motion.p>

              <motion.a 
                href={tool.pdfLink}
                className="inline-block"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="flex items-center gap-2 px-8 py-3 bg-[#0076BE] text-white rounded-md hover:bg-blue-600 transition-colors">
                  <Download className="h-5 w-5" />
                  Download PDF
                </button>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-1/2 relative">
        <div className="sticky top-[calc(50vh-200px)] h-[400px] pr-16">
          <motion.div 
            className="w-full h-full rounded-lg border-15 overflow-hidden bg-white p-8"
            style={{ borderColor: grindingTools[activeIndex].color }}
            animate={{ borderColor: grindingTools[activeIndex].color }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={grindingTools[activeIndex].image}
                alt={grindingTools[activeIndex].title}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white mt-16"> {/* Added mt-16 for navbar spacing */}
      {isMobile ? <MobileLayout /> : (
        <>
          <div className="w-full bg-[#0076BE] py-8">
            <h1 className="text-4xl font-bold text-white text-center tracking-wider">
              BONDED ABRASIVES
            </h1>
          </div>
          <DesktopLayout />
        </>
      )}
    </div>
  );
};

export default BondedAbrasives;
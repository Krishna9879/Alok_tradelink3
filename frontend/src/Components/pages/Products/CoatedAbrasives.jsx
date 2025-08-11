import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const CoatedAbrasives = () => {
  const grindingTools = [
    {
      title: 'Cloth Disc',
      description:
        'Cloth discs are the traditional metal sanding product on random orbital and stationary disc sanders in conjunction with a rubber back-up pad that delivers the rigidity for hard to grind alloys and steels. They offer strong tear and edge-fray resistance.',
      image: 'product/coated/clothdisc.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/cloth_disc.pdf', // Ensure correct path
    },
    {
      title: 'Cloth Roll',
      description:
        'Coated abrasive rolls are designed for fast and easy sanding of various surfaces, and can be torn to exact lengths as needed. Cloth rolls are typically used for polishing lathe turnings, rolls and cylinders, light deburring, blending machine tool marks, removing rust and scale, and fine sanding and polishing.',
      image: 'product/coated/clothroll.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/cloth_rolls.pdf', // Ensure correct path
    },
    {
      title: 'Cloth Sheets',
      description:
        "With its exceptional flexibility, the sheet allows you to reach hard-to-sand areas and corners, while the strong J-weight cotton backing enhances the sheet's durability. This die-cut sheet ensures a great fit on your sander to provide reliable performance.",
      image: 'product/coated/clothsheets.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/cloth_sheets.pdf', // Ensure correct path
    },
    {
      title: 'Coated Ceramic',
      description:
        'For aggressive grinding with the highest stock removal rates on hard materials which do not conduct heat well. Consistently high performance due to self-sharpening ceramic oxide grain.',
      image: 'product/coated/coatedceramic.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/coated_ceramic.pdf', // Ensure correct path
    },
    {
      title: 'Fiber Disc',
      description:
        'Each disc is crafted with an aluminum oxide grain that delivers dependable results, and the medium-grit disc attaches easily to a right-angle grinder for use on small volume aluminum, brass and bronze metalworking applications.',
      image: 'product/coated/fiberdisc.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/fibre_disc.pdf', // Ensure correct path
    },
    {
      title: 'Flap Wheels',
      description:
        'Flap wheels are similar to flap discs in that they shape metal, but flap wheels are designed to allow you to grind and finish hard-to-access areas such as the inside of pipes or tubes.',
      image: 'product/coated/flapwheel.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/flap_wheels.pdf', // Ensure correct path
    },
    {
      title: 'Non Woven',
      description:
        'Non-woven abrasives are a three-dimensional web of fibers with globules of resin and abrasive embedded into the network of fibers. Typically, the fibers are nylon or another synthetic material.',
      image: 'product/coated/nonwooven.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/non_woven.pdf', // Ensure correct path
    },
    {
      title: 'Paper Disc',
      description:
        'Paper discs are the traditional dry sanding product for random orbital and rotary sanders. Available in adhesive back and hook & loop attachments in a variety of sizes, hole patterns and abrasives types.',
      image: 'product/coated/paperdisc.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/paper_disc.pdf', // Ensure correct path
    },
    {
      title: 'Paper Roll',
      description:
        'Synthetically coated F-weight paper backing resists edge chipping and shedding for durability, and pressure sensitive adhesive on the linked disc roll supports easy application and removal.',
      image: 'product/coated/paperroll.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/paper_rolls.pdf', // Ensure correct path
    },
    {
      title: 'Waterproof Sheets',
      description:
        'Use this sheet with a sanding board or block, or for hand-sanding, to get a smooth, even finish. Ultra-fine P-graded aluminum oxide abrasive sands away small imperfections to leave a sleek surface.',
      image: 'product/coated/waterproofpaper.png', // Ensure correct path
      pdfLink: 'pdf/coated-abrasives/water_proof_paper_sheets.pdf', // Ensure correct path
    },
  ];

  // Animation variants for the cards
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotateX: -15, // Add a slight 3D rotation
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0, // Reset rotation
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-500 text-white text-center py-4 sticky top-0 z-10">
        <h1 className="text-3xl font-bold">Coated Abrasives</h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {grindingTools.map((tool, index) => {
          const ref = useRef(null);
          const inView = useInView(ref, { once: false, amount: 0.5 });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) {
              controls.start('onscreen');
            } else {
              controls.start('offscreen');
            }
          }, [inView, controls]);

          return (
            <motion.div
              key={index}
              ref={ref}
              className="relative h-[500px] border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white transform hover:-translate-y-1 hover:scale-[1.02]"
              initial="offscreen"
              animate={controls}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col">
                {/* Product Image Container */}
                <div className="h-48 flex items-center justify-center bg-black mb-4 p-4">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Blue Divider Line */}
                <div className="w-1/2 h-0.5 bg-blue-500 mx-auto"></div>

                {/* Product Details */}
                <div className="flex-grow p-4 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {tool.title}
                  </h2>
                  <div className="flex-grow overflow-y-auto custom-scrollbar mb-4">
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>

                  {/* PDF Download Button */}
                  <a href={tool.pdfLink} target="_blank" rel="noopener noreferrer">
                    <button className="w-full mt-auto bg-[#0076BE] text-white py-2 rounded-md hover:bg-blue-400 transition-colors flex items-center justify-center no-underline">
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      
    </div>
  );
};

export default CoatedAbrasives;
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CloudDownload } from 'lucide-react';

const NewProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const productData = [
    {
      id: 1,
      title: 'Metalworking Flyer',
      description: 'Explore our comprehensive range of metalworking solutions designed for precision and efficiency.',
      pdfLink: '../pdf/bonded-abrasives/Metalworking-Flyer.pdf',
      image: '../product/bonded/ballgrinding.png',
      colors: ['#0076BE', '#33FF57', '#3357FF', '#F3FF33'],
    },
    {
      id: 2,
      title: 'Foundry Flyer',
      description: 'Discover our specialized abrasives for foundry applications, ensuring durability and performance.',
      pdfLink: '../pdf/bonded-abrasives/Foundry-Flyer.pdf',
      image: '../product/bonded/centerless.png',
      colors: ['#FFEB3B', '#C70039', '#900C3F', '#581845'],
    },
    {
      id: 3,
      title: 'PROmax Version 02',
      description: 'Experience the next generation of grinding wheels with PROmax, offering unmatched performance.',
      pdfLink: '../pdf/bonded-abrasives/PROmax_Version-02_small.pdf',
      image: '../product/bonded/crankshaft.png',
      colors: ['#FF5733', '#DAF7A6', '#FFC300', '#581845'],
    },
    {
      id: 4,
      title: 'CUMI MWF New 2025',
      description: 'Our latest MWF series is engineered for precision grinding in metalworking applications.',
      pdfLink: '../pdf/bonded-abrasives/CUMI-MWF_New-2025-v5-small.pdf',
      image: '../product/bonded/cylindrical.png',
      colors: ['#4CAF50', '#FF5733', '#C70039', '#900C3F'],
    },
    {
      id: 5,
      title: 'Bearings Catalogue',
      description: 'A complete guide to our bearings solutions, designed for high performance and reliability.',
      pdfLink: '../pdf/bonded-abrasives/Bearings-Catalogue-inner-page-low-res.pdf',
      image: '../product/bonded/flut.png',
      colors: ['#2196F3', '#FFEB3B', '#FF5733', '#4CAF50'],
    },
    {
      id: 6,
      title: 'CUMI IMTEX Auto Flyer',
      description: 'Explore our automotive grinding solutions showcased at IMTEX, tailored for precision and efficiency.',
      pdfLink: '../pdf/bonded-abrasives/CUMI-IMTEX-Auto-Flyer.pdf',
      image: '../product/bonded/razorblade.png',
      colors: ['#9C27B0', '#FF9800', '#3F51B5', '#795548'],
    },
    {
      id: 7,
      title: 'CUMI IMTEX Cutting Tool Flyer',
      description: 'Our cutting tool solutions at IMTEX, designed for high-performance machining and grinding.',
      pdfLink: '../pdf/bonded-abrasives/CUMI-IMTEX-Cutting-Tool-Flyer.pdf',
      image: '../product/bonded/roll.png',
      colors: ['#FF9800', '#3F51B5', '#795548', '#9C27B0'],
    },
    {
      id: 8,
      title: 'CUMI IMTEX Steel Flyer',
      description: 'Discover our steel grinding solutions showcased at IMTEX, engineered for durability and precision.',
      pdfLink: '../pdf/bonded-abrasives/CUMI-IMTEX-Steel-Flyer.pdf',
      image: '../product/bonded/rubber.png',
      colors: ['#3F51B5', '#795548', '#9C27B0', '#FF9800'],
    },
    {
      id: 9,
      title: 'Bearings Catalogue (Inner Page)',
      description: 'Detailed insights into our bearings solutions, designed for high-performance applications.',
      pdfLink: '../pdf/bonded-abrasives/Bearings-Catalogue-inner-page-low-res.pdf',
      image: '../product/bonded/specialist.png',
      colors: ['#795548', '#9C27B0', '#FF9800', '#3F51B5'],
    },
    {
      id: 10,
      title: 'Snagging Flyer',
      description: 'Our snagging wheels are designed for heavy-duty grinding applications, ensuring efficiency and durability.',
      pdfLink: '../pdf/bonded-abrasives/Snagging-Flyer.pdf',
      image: '../product/bonded/tool.png',
      colors: ['#0076BE', '#33FF57', '#3357FF', '#F3FF33'],
    },
    {
      id: 11,
      title: 'Industrial Flyer',
      description: 'Explore our industrial abrasives, designed for a wide range of applications in metalworking and beyond.',
      pdfLink: '../pdf/coated-abrasives/Industrial-Flyer.pdf',
      image: '../product/coated/clothdisc.png',
      colors: ['#E91E63', '#00BCD4', '#8BC34A', '#FFC107'],
    },
    {
      id: 12,
      title: 'CUMI Cutting & Grinding Wheels',
      description: 'A comprehensive catalogue of our cutting and grinding wheels, designed for precision and performance.',
      pdfLink: '../pdf/coated-abrasives/CUMI_Cutting__Grinding_Wheels.pdf',
      image: '../product/coated/clothroll.png',
      colors: ['#00BCD4', '#8BC34A', '#FFC107', '#E91E63'],
    },
    {
      id: 13,
      title: 'CUMI Coated Abrasives Catalogue',
      description: 'Discover our range of coated abrasives, engineered for efficiency and durability in various applications.',
      pdfLink: '../pdf/coated-abrasives/CUMI_Coated_Abrasives_catalogue.pdf',
      image: '../product/coated/clothsheets.png',
      colors: ['#8BC34A', '#FFC107', '#E91E63', '#00BCD4'],
    },
    {
      id: 14,
      title: 'Bonded Snagging Catalogue',
      description: 'Our bonded snagging wheels are designed for heavy-duty grinding applications, ensuring efficiency and durability.',
      pdfLink: '../pdf/coated-abrasives/bonded_Snagging_Catalogue.pdf',
      image: '../product/coated/coatedceramic.png',
      colors: ['#FFC107', '#E91E63', '#00BCD4', '#8BC34A'],
    },
    {
      id: 15,
      title: 'CUMI Bonded Abrasives Catalogue',
      description: 'A complete guide to our bonded abrasives, designed for precision and performance in various applications.',
      pdfLink: '../pdf/coated-abrasives/CUMI_Bonded_Abrasives_Catalogue.pdf',
      image: '../product/coated/waterproofpaper.png',
      colors: ['#009688', '#03A9F4', '#00BCD4', '#E91E63'],
    },
  ];

  // Automatically cycle through rows to highlight the active row
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productData.length);
    }, 2000); // Change active row every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [productData.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white">
          New Products
        </h1>
      </header>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          className="overflow-x-auto"
        >
          {/* Table for Desktop */}
          <div className="hidden md:block">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-4 px-6">Sr.</th>
                  <th className="py-4 px-6">Product Name</th>
                  <th className="py-4 px-6">Description</th>
                  <th className="py-4 px-6">Download</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {productData.map((item, index) => (
                  <TableRow
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={index === activeIndex}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for Mobile */}
          <div className="md:hidden space-y-4">
            {productData.map((item, index) => (
              <MobileCard
                key={item.id}
                item={item}
                index={index}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const TableRow = ({ item, index, isActive }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  // State to manage dynamic color change
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 100, delay: index * 0.2 },
      });
    } else {
      controls.start({ opacity: 0, x: -100 });
    }
  }, [inView, controls, index]);

  // Change color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % item.colors.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [item.colors.length]);

  return (
    <motion.tr
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
      style={{
        backgroundColor: isActive
          ? `${item.colors[currentColorIndex]}`
          : `${item.colors[currentColorIndex]}20`, // Add transparency for inactive rows
        transition: 'background-color 1s ease-in-out', // Smooth color transition
      }}
      className={`hover:bg-opacity-80 transition-all duration-300 ${
        isActive ? "shadow-lg" : ""
      }`}
    >
      {/* Serial Number */}
      <td className="py-4 px-6 font-semibold">{item.id}</td>

      {/* Product Name */}
      <td className="py-4 px-6 text-gray-700">{item.title}</td>

      {/* Description */}
      <td className="py-4 px-6 text-gray-900 font-medium">{item.description}</td>

      {/* Download Button */}
      <td className="py-4 px-6">
        <a
          href={item.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          <CloudDownload size={16} className="mr-2" />
          Download
        </a>
      </td>
    </motion.tr>
  );
};

const MobileCard = ({ item, index, isActive }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  // State to manage dynamic color change
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, delay: index * 0.2 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls, index]);

  // Change color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % item.colors.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [item.colors.length]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      style={{
        backgroundColor: isActive
          ? `${item.colors[currentColorIndex]}`
          : `${item.colors[currentColorIndex]}20`, // Add transparency for inactive rows
        transition: 'background-color 1s ease-in-out', // Smooth color transition
      }}
      className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
        isActive ? "shadow-lg" : ""
      }`}
    >
      {/* Serial Number */}
      <div className="text-sm font-semibold text-gray-700">Sr. {item.id}</div>

      {/* Product Name */}
      <div className="mt-2 text-sm text-gray-700">{item.title}</div>

      {/* Description */}
      <div className="mt-2 text-lg font-medium text-gray-900">{item.description}</div>

      {/* Download Button */}
      <div className="mt-4">
        <a
          href={item.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          <CloudDownload size={16} className="mr-2" />
          Download
        </a>
      </div>
    </motion.div>
  );
};

export default NewProduct;
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CloudDownload } from 'lucide-react';

const PriceList = () => {
  const priceListData = [
    {
      id: 1,
      date: "18-07-2022",
      title: "BONDED STANDARD RETAIL PRICE LIST",
      pdfLink: "pdf/PriceLists/bonded_abrasives_pricelist.pdf",
      colors: ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"], // Array of colors for this row
    },
    {
      id: 2,
      date: "18-07-2022",
      title: "COATED RETAIL PRICE LIST",
      pdfLink: "pdf/PriceLists/coated_abrasives_pricelist.pdf",
      colors: ["#FFC300", "#C70039", "#900C3F", "#581845"],
    },
    {
      id: 3,
      date: "01-02-2022",
      title: "SOLAR DIAMOND TOOLS RETAIL PRICELIST",
      pdfLink: "pdf/PriceLists/SOLAR_PRICE_LIST-01-02-2022.pdf",
      colors: ["#DAF7A6", "#FF5733", "#C70039", "#FFC300"],
    },
    {
      id: 4,
      date: "01-01-2025",
      title: "FEIN POWER TOOLS PRICE LIST",
      pdfLink: "pdf/PriceLists/Machines_Price_List_2025.pdf",
      colors: ["#581845", "#900C3F", "#FF5733", "#DAF7A6"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically cycle through rows to highlight the active row
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % priceListData.length);
    }, 2000); // Change active row every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [priceListData.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white">
          Price List
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
                  <th className="py-4 px-6">Effective Date</th>
                  <th className="py-4 px-6">Price List</th>
                  <th className="py-4 px-6">Download</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {priceListData.map((item, index) => (
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
            {priceListData.map((item, index) => (
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

      {/* Effective Date */}
      <td className="py-4 px-6 text-gray-700">{item.date}</td>

      {/* Price List Title */}
      <td className="py-4 px-6 text-gray-900 font-medium">{item.title}</td>

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

      {/* Effective Date */}
      <div className="mt-2 text-sm text-gray-700">{item.date}</div>

      {/* Price List Title */}
      <div className="mt-2 text-lg font-medium text-gray-900">{item.title}</div>

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

export default PriceList;
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Diamond = () => {
  const products = [
    {
      title: 'Diamond Dressers',
      image: 'product/solar/diamonddresser.png',
      items: [
        'Single Point',
        'MCD Single Point',
        'CVD Single Point',
        'Grit Dresser',
        'Cluster Dresser',
        'Crown Dresser',
        'Hex-Disc Dresser',
        'Chisel Dresser',
      ],
      pdfLink: 'pdf/thin-wheels/aluminium.pdf',
      color: '#E74C3C',
    },
    {
      title: 'Electroplated Products',
      image: 'product/solar/electroplated.png',
      items: [
        'Diamond & CBN File',
        'Diamond CBN ID Grinding Wheel',
        'CVD Single Point',
        'Diamond Cut-Off Wheel',
        'Cluster Dresser',
        'Special Wheel',
        'Special Shape Tools',
      ],
      pdfLink: 'pdf/thin-wheels/hi_cut_steel.pdf',
      color: '#2ECC71',
    },
    {
      title: 'Honing Stone',
      image: 'product/solar/hongingstone.png',
      items: [
        'Standard Stone',
        'Compact Stone',
        'Solid Stone',
        'Slotted Stone',
        'Stone with Shoe',
        'Special Stone',
      ],
      pdfLink: 'pdf/thin-wheels/hi_carb_stone.pdf',
      color: '#3498DB',
    },
    {
      title: 'Diamond Lapping Products',
      image: 'product/solar/lapping.png',
      items: [
        'Diamond Paste',
        'Liquid Diamond',
        'OS Fluid',
        'Polishing Cloth',
        'Lapping Oil'
      ],
      pdfLink: 'pdf/thin-wheels/ss_inox.pdf',
      color: '#F1C40F',
    },
    {
      title: 'PCD & PCBN Cutting Tools',
      image: 'product/solar/pcd.png',
      items: [
        'ISO Insert',
        'Brazed Tools',
        'Special Tools',
        'Grit Dresser',
        'Full Top PCD',
        'Solid PCBN',
        'PCD Dresser',
      ],
      pdfLink: 'pdf/thin-wheels/stainless_steel.pdf',
      color: '#9B59B6',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 py-8 text-center">
        <img
          src="homeabout/solar-logo.png"
          alt="Solar Logo"
          className="mx-auto mb-4 w-24"
        />
        <h1 className="text-4xl font-bold uppercase tracking-widest text-white">
          Diamond Tools
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {products.map((product, index) => (
          <ProductSection 
            key={index} 
            product={product} 
            index={index} 
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

const ProductSection = ({ product, index, isEven }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { 
    once: false, // Animation will trigger every time
    amount: 0.3, // How much of the element needs to be in view
    margin: "-100px 0px" // Margin around the element to trigger animation
  });

  // Animation variants for container
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { 
      opacity: 0,
      x: isEven ? -100 : 100,
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: index * 0.1
      }
    }
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: isEven ? 100 : -100,
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: index * 0.1 + 0.2
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-24 items-center`}
    >
      <motion.div
        variants={imageVariants}
        className="w-full md:w-1/2"
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl group">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      <motion.div
        variants={contentVariants}
        className="w-full md:w-1/2 p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 
          className="text-3xl font-bold mb-6"
          style={{ color: product.color }}
        >
          {product.title}
        </h2>
        <ul className="space-y-4 mb-8">
          {product.items.map((item, idx) => (
            <li 
              key={idx}
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: product.color }} 
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href={product.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-white rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          style={{ 
            backgroundColor: product.color,
            hover: { backgroundColor: product.color + 'dd' }
          }}
        >
          Download PDF
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Diamond;
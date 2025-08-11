import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Super() {
  const cards = [
    {
      id: 1,
      image: "../product/suparabrasives/chamak.png",
      title: "Chamak",
      pdfUrl: "../pdf/super-abrasives/chamak.pdf",
      },
      {
      id: 2,
      image: "../product/suparabrasives/chamakcup.png",
      title: "Chamak Cup",
      pdfUrl: "../pdf/super-abrasives/chamak_cup.pdf",
      },
      {
      id: 3,
      image: "../product/suparabrasives/chamakmarbalpolishingblock.png",
      title: "Marble Polishing Blocks",
      pdfUrl: "../pdf/super-abrasives/chamak_marble_polishing_blocks.pdf",
      },
      {
      id: 4,
      image: "../product/suparabrasives/chamak-plus.png",
      title: "Chamak Plus",
      pdfUrl: "../pdf/super-abrasives/chamak_plus.pdf",
      },
      {
      id: 5,
      image: "../product/suparabrasives/chamak-ustaad.png",
      title: "Chamak Ustad",
      pdfUrl: "../pdf/super-abrasives/chamak_ustad.pdf",
      },
      {
      id: 6,
      image: "../product/suparabrasives/diamondflicker.png",
      title: "Resin Diamond Fickerts",
      pdfUrl: "../pdf/super-abrasives/super_resin_diamond_fickerts.pdf",
      },
      {
      id: 7,
      image: "../product/suparabrasives/magnesite-bonded-fickerts.png",
      title: "Magnesite Fickerts",
      pdfUrl: "../pdf/super-abrasives/magnesite_bonded_fickerts.pdf",
      },
      {
      id: 8,
      image: "../product/suparabrasives/magnesite-bonded-fickerts.png",
      title: "Ceramics Fickerts",
      pdfUrl: "../pdf/super-abrasives/magnesite_bonded_fickerts_ceramics.pdf",
      },
      {
      id: 9,
      image: "../product/suparabrasives/mat-finish.png",
      title: "Rustic Mat Finish",
      pdfUrl: "../pdf/super-abrasives/rustic_mat_finish.pdf",
      },
      {
      id: 10,
      image: "../product/suparabrasives/metalbonddiamond.png",
      title: "Metal Bond Diamond",
      pdfUrl: "../pdf/super-abrasives/metal_bond_diamond.pdf",
      },
      {
      id: 11,
      image: "../product/Thinwheel/high-carb-stone.png",
      title: "Super Pro Speed",
      pdfUrl: "../pdf/thin-wheels/hi_carb_stone.pdf",
      },
      {
      id: 12,
      image: "../product/suparabrasives/supercut.png",
      title: "Super Pro Super Cut",
      pdfUrl: "../pdf/super-abrasives/super_pro_super_cut.pdf",
      },
      {
      id: 13,
      image: "../product/suparabrasives/tezz.png",
      title: "Super Pro Tezz",
      pdfUrl: "../pdf/super-abrasives/super_pro_tezz.pdf",
      },
      {
      id: 14,
      image: "../product/suparabrasives/tilecutter.png",
      title: "Super Pro Tile Cutter",
      pdfUrl: "../pdf/super-abrasives/super_pro_tile_cutter.pdf",
      },
      {
      id: 15,
      image: "../product/suparabrasives/turbo.png",
      title: "Super Pro Turbo",
      pdfUrl: "../pdf/super-abrasives/turbo.pdf",
      },
      {
      id: 16,
      image: "../product/suparabrasives/wallcutter.png",
      title: "Super Pro Wall Cutter",
      pdfUrl: "../pdf/super-abrasives/super_pro_wall_cutter.pdf",
      },
      {
      id: 17,
      image: "../product/suparabrasives/accessories.png",
      title: "Abrasives Accessories",
      pdfUrl: "../pdf/super-abrasives/super-abrasive-accessories.pdf",
      },
  ];

  return (
    <div className="w-full bg-white p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white bg-blue-500 py-4 mb-8 rounded-lg shadow-md">
        Super Abrasives
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <CardWithAnimation
            key={card.id}
            image={card.image}
            title={card.title}
            pdfUrl={card.pdfUrl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

const CardWithAnimation = ({ image, title, pdfUrl, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, delay: index * 0.2 },
      });
    } else {
      controls.start({ opacity: 0, y: 50, scale: 0.9 });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={controls}
      whileHover={{ scale: 1.05, backgroundColor: '#f0f4ff' }}
      className="bg-gray-100 rounded-lg p-6 shadow-lg cursor-pointer overflow-hidden"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-lg mb-4">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </div>

      {/* Title */}
      <h3 className="text-xl text-black font-bold text-center mb-4">{title}</h3>

      {/* Download Button */}
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
          className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300"
        >
          <span>Download PDF</span>
          <Download size={20} />
        </motion.button>
      </a>
    </motion.div>
  );
};
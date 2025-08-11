import React, { useRef, useEffect } from 'react';
import { animated } from 'react-spring';

const HomeProducts = () => {
  const cardRefs = useRef([]);

  const products = [
    {
      id: 1,
      title: "Bonded Abrasives",
      image: "product/main/bonded-abrasives.jpg",
      link: "/product/bonded"
    },
    {
      id: 2,
      title: "Coated Abrasives",
      image: "product/main/coated-abrasives.jpg",
      link: "/coated-abrasives"
    },
    {
      id: 3,
      title: "Thin Wheels",
      image: "product/main/thin-wheels.jpg",
      link: "/thin-wheels"
    },
    {
      id: 4,
      title: "Non Woven",
      image: "product/main/nonwoven.png",
      link: "pdf/nonwooven/nonwoven.pdf",
      isExternal: true
    },
    {
      id: 5,
      title: "Power Tools",
      image: "product/main/powertools.jpg",
      link: "/cumi-powertools"
    },
    {
      id: 6,
      title: "Super Abrasives",
      image: "product/main/super-abrasives.jpg",
      link: "/super-abrasives"
    },
    {
      id: 7,
      title: "Cim Cool",
      image: "product/main/cim-cool.jpg",
      link: "pdf/cimcool/CIMCoolBrochure.pdf",
      isExternal: true
    },
    {
      id: 8,
      title: "Diamond Tools",
      image: "product/main/diamondtools.png",
      link: "/diamond-tools"
    },
    {
      id: 9,
      title: "Fein Power Tools",
      image: "product/main/feinpowertools.jpg",
      link: "/fein-powertools"
    }
  ];

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
        threshold: 0.2, // Reduced threshold for better mobile triggering
        rootMargin: '-5% 0px -5% 0px', // Adjusted margins for mobile
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
    <div className="w-full bg-gray-50 py-6 sm:py-12 overflow-hidden">
      <div className="w-full max-w-[95%] sm:max-w-[90%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-12">
          <div className="relative inline-block px-4">
            <h2 className="text-[#051557] text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 whitespace-normal">
              OUR WIDE RANGE OF PRODUCTS
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <animated.div
              key={product.id}
              ref={el => cardRefs.current[index] = el}
              data-position={index % 2 === 0 ? 'left' : 'right'}
              className="group relative perspective w-full"
              style={{
                opacity: 0,
                transform: `translateX(${index % 2 === 0 ? '50%' : '-50%'}) rotateY(${index % 2 === 0 ? '10deg' : '-10deg'})`,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' // Smoother transition for mobile
              }}
            >
              <a
                href={product.link}
                target={product.isExternal ? "_blank" : "_self"}
                rel={product.isExternal ? "noopener noreferrer" : ""}
                className="block transform-gpu transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
              >
                <div className="relative h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform transition-transform duration-300">
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide">
                      {product.title}
                    </h3>

                    {/* Animated Line */}
                    <div className="w-0 h-0.5 bg-white transform origin-left scale-x-0 group-hover:w-full group-hover:scale-x-100 transition-all duration-300"></div>
                  </div>

                  {/* 3D Lighting Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>

              {/* Card Separator Line */}
              <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-1/4 sm:w-1/3 h-0.5 bg-gray-200"></div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
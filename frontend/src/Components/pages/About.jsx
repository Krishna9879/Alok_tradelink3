import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section with Shop Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/alokshop.jpg" 
            alt="Alok Tradelink Shop Front" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white container mx-auto px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-center mb-4"
          >
            ALOK TRADELINK
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center max-w-3xl"
          >
            Your Trusted Partner in Industrial Solutions <span className="font-bold">Since 1986</span>
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Us Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For over <span className="font-bold">four decades</span>, <span className="font-bold">Alok Tradelink Private Limited</span> has been a trusted name in the industry, 
            serving as the <span className="font-bold">Exclusive Authorized Dealer for Carborundum Universal Ltd.</span> Our legacy is built 
            on a foundation of excellence, integrity, and customer satisfaction.
          </p>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Our journey began <span className="font-bold">Since 1986</span> with a vision to provide top-notch products and exceptional service 
            to our customers. Over the years, we've grown and evolved, but our commitment to excellence has remained unwavering. 
            Today, we're proud to be one of the leading dealers in the region.
          </p>
        </motion.section>

        {/* Our Mission Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to deliver exceptional value to our customers through our extensive range of products, expertise, 
            and outstanding service. We strive to build long-term relationships with our customers, suppliers, and partners, 
            based on trust, reliability, and mutual benefit.
          </p>
        </motion.section>

        {/* Values Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Customer Focus</h3>
              <p className="text-gray-700">We put our customers at the heart of everything we do.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Integrity</h3>
              <p className="text-gray-700">We operate with transparency, honesty, and ethics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in all aspects of our business.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Teamwork</h3>
              <p className="text-gray-700">We believe in collaboration and mutual support.</p>
            </div>
          </div>
        </motion.section>

        {/* Excellence Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Celebrating Over 40 Years of Excellence</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the exclusive authorized dealer for Carborundum Universal Ltd, we've built a legacy of trust, 
            expertise, and exceptional service. Our <span className="font-bold">four-decade partnership</span> is a testament 
            to our commitment to delivering top-notch products and solutions.
          </p>
        </motion.section>

        {/* Unparalleled Expertise Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Unparalleled Expertise</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team offers unmatched knowledge and experience, ensuring you receive the best products and 
            solutions tailored to your unique needs.
          </p>
        </motion.section>

        {/* Trusted Partnership Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Trusted Partnership</h2>
          <p className="text-gray-700 leading-relaxed">
            Together with Carborundum Universal Ltd, we've established a reputation for reliability, quality, 
            and customer satisfaction.
          </p>
        </motion.section>

        {/* Products Section */}
        <motion.section
          {...fadeInUp}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Products</h2>
          <p className="text-gray-700 leading-relaxed">
            Along With This Item, We Are Also Dealing In All Diamond Items Of <span className="font-bold">Solar Diamonds Tools (India) Pvt. Ltd</span>. 
            All types of Power Tools mfg. by <span className="font-bold">FEIN</span>.
          </p>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          {...fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Your Trusted Partner</h2>
          <p className="text-gray-700 leading-relaxed">
            Choose us for our <span className="font-bold">40-year expertise</span>,commitment to excellence, and dedication to your 
            satisfaction.We look forward to serving you.
          </p>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
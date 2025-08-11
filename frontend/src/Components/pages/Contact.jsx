import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_i8zyptq',
        'template_d5opq8b',
        form.current,
        'dV2JMuviSOBB8G5c1'
      )
      .then(
        (result) => {
          setFormStatus({
            success: true,
            error: false,
            message: 'Message sent successfully!',
          });
          form.current.reset();
        },
        (error) => {
          setFormStatus({
            success: false,
            error: true,
            message: 'Failed to send message. Please try again.',
          });
        }
      );
  };

  useEffect(() => {
    ScrollReveal().reveal('.scroll-reveal', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      interval: 200,
    });
  }, []);

  return (
    <main className="w-full max-w-full overflow-hidden bg-white">
      {/* Header Section with Three.js */}
      <section className="relative h-[250px] sm:h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <Stars />
          <OrbitControls enableZoom={false} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-[3px] uppercase text-center px-4"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <h2 className="text-3xl sm:text-4xl font-normal mb-4 text-blue-800">
              <strong className="font-extrabold">Get in</strong> Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Feel free to ask for details, don't save any questions!
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {formStatus.message && (
                <div
                  className={`p-4 rounded ${
                    formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <h4 className="text-2xl font-bold mb-8 text-blue-800">Our Office</h4>
            <div className="space-y-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <strong className="text-gray-800 block mb-1">Address:</strong>
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    GF, D-005, Sumel-7 Business Park, Nr. Soni Ni Chawl Fly Over Bridge, Rakhiyal, Ahmedabad-380023
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <strong className="text-gray-800 block mb-1">Phone:</strong>
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    +91 9825075960/ +91 9265200452
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <strong className="text-gray-800 block mb-1">Email:</strong>
                  <div className="space-y-2">
                    <a
                      href="mailto:atpl-cumi@hotmail.com"
                      className="block text-blue-600 hover:text-blue-700 text-sm sm:text-base break-words"
                    >
                      atpl-cumi@hotmail.com
                    </a>
                    <a
                      href="mailto:info@aloktradelink.com"
                      className="block text-blue-600 hover:text-blue-700 text-sm sm:text-base break-words"
                    >
                      info@aloktradelink.com
                    </a>
                    <a
                      href="mailto:accounts@aloktradelink.com"
                      className="block text-blue-600 hover:text-blue-700 text-sm sm:text-base break-words"
                    >
                      accounts@aloktradelink.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="scroll-reveal container mx-auto px-4 pb-12"
      >
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14687.602183585646!2d72.5958773!3d23.0274236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x801113250e0000bf!2sAlok%20Tradelink%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1641623445018!5m2!1sen!2sin"
            className="w-full h-[250px] sm:h-[400px] border-0"
            allowFullScreen=""
            loading="lazy"
            title="Office Location Map"
          ></iframe>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
import React from 'react';
import {  useState } from 'react';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';
const Footer = () => {

  const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const formRef = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
        .sendForm('service_29y0pch', 'template_usb1rj4', formRef.current, {
            publicKey: 'etMp87GI12zk-5u-Y',
        })
        .then(
            () => {
                setSuccess(true);
                alert('Message Sent Successfully');
                // Reset form fields
                formRef.current.reset();
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            },
            (error) => {
                setError(true);
                alert('Cannot send message now');
                // Reset error message after 5 seconds
                setTimeout(() => {
                    setError(false);
                }, 5000);
            },
        );
};

  return (
    <footer className="bg-[#000851] text-white w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Contact Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wider">QUICK CONACT</h2>
            <form  ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="w-full p-3 rounded bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                name="mobile"
                required
                placeholder="Phone Number"
                className="w-full p-3 rounded bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full p-3 rounded bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                  name="message"
                  rows="2"
                  required
                  placeholder="message"
                  className="w-full p-3 rounded bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              <button
                type="submit"
                className="w-32 bg-[#0076BE] text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
              {error && (
                                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                            )}
                            {success && (
                                <p className="text-green-500 text-center">Message sent successfully!</p>
                            )}
            </form>
          </div>

          {/* Our Products Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wider">OUR PRODUCTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
              {[
                'Bonded Abrasives',
                'Super Abrasives',
                'Coated Abrasives',
                'Cim Cool',
                'Thin Wheels',
                'Diamond Tools',
                'Non Woven',
                'Fein Power Tools',
                'Power Tools'
              ].map((product, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-2 text-white/90 hover:text-white transition duration-300"
                >
                  <span className="text-[#0076BE]">›</span>
                  <span>{product}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wider">CONTACT US</h2>
            <div className="space-y-4">
              <div>
                <p className="mb-1">GF, D-005, Sumel-7 Business Park, Nr. Soni Ni Chawl</p>
                <p>Fly Over Bridge, Rakhiyal, Ahmedabad-380023</p>
              </div>
              <div>
                <p className="font-medium">Phone: <span className="font-normal">+91 9825075960/ +91 9265200452 </span></p>
              </div>
              <div>
                <a href="mailto:Atpl-Cumi@Hotmail.Com" className="text-white hover:text-blue-300 transition duration-300">
                  Atpl-Cumi@Hotmail.Com
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-2">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition duration-300">
                    <svg className="w-5 h-5 text-[#000851]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition duration-300">
                    <svg className="w-5 h-5 text-[#000851]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition duration-300">
                    <svg className="w-5 h-5 text-[#000851]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10">
        <p className="text-center text-sm text-white/70">© Copyright 2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
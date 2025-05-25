
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4">프로젝트 협업이나 궁금한 점이 있으시면 언제든 연락주세요!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo isInView={isInView} />
          <ContactForm isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

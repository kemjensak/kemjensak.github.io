
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, MessageCircle, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jinseok.kim970@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kemjensak',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: MessageCircle,
      label: 'Contact Form',
      href: '#contact',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const scrollToContact = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {contacts.map((contact, index) => (
              <motion.button
                key={contact.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToContact(contact.href)}
                className={`group flex items-center bg-gradient-to-r ${contact.color} backdrop-blur-lg rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05, x: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <contact.icon className="w-5 h-5 text-white mr-3" />
                <span className="text-white font-medium whitespace-nowrap">
                  {contact.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center backdrop-blur-lg border-2 border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Mail className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

export default FloatingContact;

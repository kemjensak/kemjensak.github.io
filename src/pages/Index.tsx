
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import LikesSection from '../components/LikesSection';
import FunFactsSection from '../components/FunFactsSection';
import ContactSection from '../components/ContactSection';
import FloatingContact from '../components/FloatingContact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'activities', 'likes', 'fun-facts', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ActivitiesSection />
        <LikesSection />
        <FunFactsSection />
        <ContactSection />
      </motion.div>

      <FloatingContact />
    </div>
  );
};

export default Index;

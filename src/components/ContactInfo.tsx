
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface ContactInfoProps {
  isInView: boolean;
}

const ContactInfo = ({ isInView }: ContactInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">연락처 정보</h3>
        
        <div className="space-y-6">
          <motion.div
            whileHover={{ x: 10 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">이메일</p>
              <p className="text-white font-medium">jinseok.kim970@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: 10 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold">G</span>
            </div>
            <div>
              <p className="text-gray-300 text-sm">GitHub</p>
              <p className="text-white font-medium">github.com/kemjensak</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/30">
          <h4 className="text-lg font-semibold text-cyan-300 mb-2">빠른 응답</h4>
          <p className="text-gray-300 text-sm">
            보통 24시간 내에 응답드리며, 긴급한 경우 더 빠른 연락이 가능합니다.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;

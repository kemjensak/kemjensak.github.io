
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "입력 확인",
        description: "모든 필드를 입력해주세요.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "이메일 확인",
        description: "올바른 이메일 형식을 입력해주세요.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (replace with actual emailjs integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "문의 전송 완료",
        description: "문의가 정상적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "전송 실패",
        description: "전송에 실패했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Contact Information */}
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">문의하기</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                    placeholder="성함을 입력해주세요"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                    placeholder="이메일을 입력해주세요"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="문의 내용을 상세히 입력해주세요"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      문의 보내기
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

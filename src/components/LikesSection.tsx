
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LikesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const likes = [
    {
      question: '좋아하는 취미나 활동은 무엇인가요?',
      answer: '새로운 기술을 탐구하고 실제로 구현해보는 것을 가장 좋아합니다. 특히 로봇이 실제 환경에서 작동하는 모습을 보는 순간이 가장 짜릿해요. 여가 시간에는 오픈소스 프로젝트에 기여하거나, 최신 AI 논문을 읽으며 새로운 아이디어를 얻습니다. 또한 사진 촬영을 통해 일상의 아름다운 순간들을 포착하는 것도 즐기고 있습니다.'
    },
    {
      question: '요즘 가장 몰입하고 있는 관심사는 무엇인가요?',
      answer: 'Embodied AI와 멀티모달 AI의 융합 분야에 깊이 빠져있습니다. 특히 언어 모델이 로봇의 행동 계획에 어떻게 활용될 수 있는지, 그리고 실제 물리 환경에서의 안전한 학습 방법론에 대해 연구하고 있어요. 최근에는 Diffusion 모델을 로봇 제어에 적용하는 방법들을 실험해보고 있습니다.'
    },
    {
      question: '휴일에 주로 어떻게 시간을 보내시나요?',
      answer: '주말에는 주로 개인 프로젝트를 진행합니다. 라즈베리 파이나 아두이노로 작은 로봇들을 만들어보거나, 새로운 알고리즘을 시뮬레이션으로 검증해보는 시간을 갖습니다. 날씨가 좋을 때는 드론을 날리며 항공 영상을 촬영하기도 하고, 가끔은 친구들과 함께 보드게임 카페에서 전략 게임을 즐기기도 합니다.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="likes" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Likes & Favorites
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {likes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openAccordion === index ? 'auto' : 0,
                  opacity: openAccordion === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-white/10">
                  <p className="text-gray-200 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Personal Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { emoji: '🤖', title: 'Robotics', description: '로봇공학의 모든 것' },
            { emoji: '📷', title: 'Photography', description: '순간의 아름다움 포착' },
            { emoji: '🎮', title: 'Tech Gaming', description: '전략과 기술의 만남' },
          ].map((interest, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl text-center"
            >
              <div className="text-4xl mb-4">{interest.emoji}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
              <p className="text-gray-300 text-sm">{interest.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LikesSection;


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Trophy, Briefcase, Heart } from 'lucide-react';

const ActivitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const activities = [
    {
      category: '학력',
      icon: GraduationCap,
      items: [
        {
          year: '2022-2024',
          title: '숭실대학교 일반대학원',
          subtitle: '기계공학 석사',
          description: '심층 강화학습을 활용한 로봇 매니퓰레이션 연구'
        },
        {
          year: '2016-2022',
          title: '숭실대학교',
          subtitle: '기계공학 학사',
          description: '자율주행 로봇 시스템 개발 프로젝트 참여'
        }
      ]
    },
    {
      category: '경력',
      icon: Briefcase,
      items: [
        {
          year: '2022-2023',
          title: '아트센터나비 권병준 랩',
          subtitle: '연구원',
          description: '미디어아트와 로보틱스의 융합 연구 프로젝트 수행'
        }
      ]
    },
    {
      category: '수상',
      icon: Trophy,
      items: [
        {
          year: '2023',
          title: '자동차안전학회 학술상',
          subtitle: '우수 논문상',
          description: '고속도로 긴급 장애물 회피 시스템 연구'
        },
        {
          year: '2022',
          title: 'Hyundai Robotics Challenge',
          subtitle: '우수상',
          description: '로봇 매니퓰레이션 경진대회'
        },
        {
          year: '2022',
          title: '대한기계학회',
          subtitle: '우수논문상',
          description: '로봇 제어 시스템 관련 연구'
        }
      ]
    },
    {
      category: '봉사·멘토링',
      icon: Heart,
      items: [
        {
          year: '2021-현재',
          title: '지역 과학 꿈나무 멘토링',
          subtitle: '멘토',
          description: '중고등학생 대상 로봇공학 교육 및 진로 상담'
        },
        {
          year: '2020-현재',
          title: '로봇 워크숍',
          subtitle: '강사',
          description: 'ROS 기초부터 실무까지 체계적인 교육 프로그램 운영'
        }
      ]
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 bg-black/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Activities & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {activities.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl"
            >
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-300">{category.category}</h3>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400"></div>
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (itemIndex * 0.1) }}
                    className="relative flex items-start mb-8 last:mb-0"
                  >
                    <div className="absolute left-4 w-4 h-4 bg-cyan-400 rounded-full border-2 border-white mt-2"></div>
                    <div className="ml-16">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-cyan-300 font-medium mb-2">{item.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;

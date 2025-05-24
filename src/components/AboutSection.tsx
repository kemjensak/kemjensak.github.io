
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-6xl font-bold">
                  JK
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">김진석 (Jinseok Kim)</h3>
                <p className="text-cyan-300 text-lg font-medium">AI Robotics Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                인공지능 로보틱스 구현 전문가
              </h3>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                탐구심과 문제해결력을 바탕으로 복잡한 로봇 시스템을 설계·구현하는 혁신 지향 엔지니어입니다.
              </p>

              <p className="text-gray-200 leading-relaxed mb-6">
                기계공학 전공자로서, 석사 논문에서 심층 강화학습(DRL)을 활용한 Panda 7-DoF 매니퓰레이터 제어 정책을 개발·검증했으며, 
                ROS/ROS2 기반 자율주행·제어 소프트웨어 설계에 탁월한 역량을 보유하고 있습니다.
              </p>

              <p className="text-gray-200 leading-relaxed">
                학부 시절부터 RC카 자율주행 플랫폼 개발을 시작으로, 시뮬레이션(Isaac Sim, CARLA)부터 실기 테스트, 
                성능 검증까지 '엔드투엔드' 연구를 주도하며 실용적 결과를 창출해 왔습니다.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">5+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-gray-300">Awards Won</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

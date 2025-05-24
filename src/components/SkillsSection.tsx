
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillsData = [
    { name: 'ROS/ROS2', level: 95 },
    { name: 'Python', level: 90 },
    { name: 'C++', level: 85 },
    { name: 'Deep Learning', level: 88 },
    { name: 'SLAM', level: 82 },
    { name: 'Linux', level: 87 },
  ];

  const certifications = [
    { year: 2023, title: '로봇소프트웨어개발기사' },
    { year: 2022, title: 'TOEIC Speaking IM3' },
    { year: 2021, title: '정보처리기능사' },
    { year: 2020, title: '지게차운전기능사' },
  ];

  const skillCategories = [
    {
      title: 'Programming & Development',
      skills: ['ROS/ROS2 및 C++, Python 기반의 모바일 로봇 주행 소프트웨어 개발 역량'],
    },
    {
      title: 'Robotics & AI',
      skills: [
        '경로 계획, SLAM 및 자율주행 알고리즘 구현 경험',
        '심층 강화학습(DRL)을 활용한 인공지능 기반 로봇 시뮬레이션 개발 경험',
      ],
    },
    {
      title: 'System Design',
      skills: [
        'Linux 환경에서 OOP 기반 소프트웨어 설계·구현 능력',
        '다양한 로봇 플랫폼(Ackermann, differential, mecanum) 설계·제작·운용 경험',
      ],
    },
    {
      title: 'Language Skills',
      skills: ['영어(TOEIC 865, TOEIC Speaking IM3)'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl"
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.1) }}
                    className="text-gray-200 leading-relaxed flex items-start"
                  >
                    <span className="text-cyan-400 mr-2">•</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skills Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">기술 숙련도</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#e5e7eb" />
              <YAxis stroke="#e5e7eb" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#e5e7eb'
                }} 
              />
              <Bar 
                dataKey="level" 
                fill="url(#skillGradient)" 
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Certifications Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">자격증 및 인증</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400"></div>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                className="relative flex items-center mb-8 last:mb-0"
              >
                <div className="absolute left-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-white"></div>
                <div className="ml-12">
                  <div className="text-lg font-semibold text-white">{cert.title}</div>
                  <div className="text-cyan-300">{cert.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: '계층적 강화학습 기반 매니퓰레이션',
      description: '테이블 위 가려진 물체의 탐색·파지 정책 설계·튜닝 (Isaac Sim, Panda 7-DoF)',
      tech: ['Deep Reinforcement Learning', 'Isaac Sim', 'Python', 'PyTorch'],
      image: '/placeholder.svg',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: '고속도로 긴급 장애물 회피 AES 평가 방법 연구',
      description: 'CARLA·Autoware·ROS 기반 시뮬레이션 프레임워크 구축, 자동차안전학회 학술상 수상',
      tech: ['CARLA', 'Autoware', 'ROS', 'C++', 'Autonomous Driving'],
      image: '/placeholder.svg',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: '엠비소닉 스마트 헤드폰 개발',
      description: 'IMU 기반 걸음 인식·GPS 위치 인식 알고리즘 설계·개발, MMCA 청주 전시 참여',
      tech: ['IMU', 'GPS', 'IoT', 'Signal Processing', 'Python'],
      image: '/placeholder.svg',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: '메카넘 모바일 휴머노이드 로봇 개발',
      description: '전방향 주행 플랫폼 설계·제작, ROS2 네비게이션·제어, 특허 출원 중',
      tech: ['ROS2', 'Mecanum Wheels', 'Navigation', 'Control Systems'],
      image: '/placeholder.svg',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <div className="absolute inset-0 flex items-center justify-center text-white/60 text-6xl font-bold">
                  {project.title.substring(0, 2)}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.links.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

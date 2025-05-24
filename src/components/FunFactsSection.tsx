
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FunFactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const funFacts = [
    {
      front: "나만의 특별한 사실",
      back: "첫 번째 로봇을 만들 때 모터를 거꾸로 연결해서 로봇이 뒤로만 가던 경험이 있습니다. 그때부터 '실패는 성공의 어머니'라는 말을 정말 실감했어요!"
    },
    {
      front: "특이한 버릇",
      back: "코딩할 때 무의식중에 로봇의 움직임을 손으로 따라하는 버릇이 있습니다. 동료들이 보면 마치 로봇과 대화하는 것 같다고 하네요."
    },
    {
      front: "MBTI & 별명",
      back: "ENFP 성격으로 새로운 아이디어에 열정적입니다. 연구실 동료들은 저를 '로봇 속삭이는 남자'라고 부르기도 해요."
    },
    {
      front: "독특한 경험",
      back: "대학교 2학년 때 만든 로봇이 밤중에 혼자 움직여서 기숙사 룸메이트를 깜짝 놀라게 한 적이 있습니다. 센서 오류였지만 정말 무서웠어요!"
    },
    {
      front: "숨겨진 취미",
      back: "레고 테크닉으로 복잡한 기계 구조를 만드는 것을 좋아합니다. 어릴 때부터 지금까지 50개 이상의 레고 작품을 만들었어요."
    },
    {
      front: "의외의 재능",
      back: "로봇 소리를 성대모사로 흉내낼 수 있습니다. R2-D2부터 월-E까지 다양한 로봇 캐릭터들의 소리를 완벽하게 재현해요!"
    }
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="fun-facts" className="py-20 px-4 bg-black/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Fun Facts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4">카드를 클릭해서 재미있는 사실들을 확인해보세요!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-64 cursor-pointer perspective-1000"
              onClick={() => toggleCard(index)}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-600 transform-style-preserve-3d"
                animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden backdrop-blur-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30 shadow-xl">
                  <div className="flex items-center justify-center h-full p-6 text-center">
                    <div>
                      <div className="text-4xl mb-4">🎭</div>
                      <h3 className="text-xl font-bold text-white">{fact.front}</h3>
                      <p className="text-cyan-300 text-sm mt-2">클릭해서 확인하기</p>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 backface-hidden backdrop-blur-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30 shadow-xl"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="flex items-center justify-center h-full p-6 text-center">
                    <div>
                      <div className="text-3xl mb-4">✨</div>
                      <p className="text-white text-sm leading-relaxed">{fact.back}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '365', label: '컵 라면 섭취량(연간)' },
            { number: '2847', label: '커밋 횟수(올해)' },
            { number: '42', label: '즐겨 마시는 온도(°C)' },
            { number: '∞', label: '로봇에 대한 열정' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FunFactsSection;

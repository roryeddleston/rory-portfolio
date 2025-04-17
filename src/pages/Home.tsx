import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiCss3,
  SiSass,
  SiFirebase,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
} from 'react-icons/si';
import { FaMobileAlt } from 'react-icons/fa';
import '../index.css';

const floatingIcons = [
  { icon: <SiReact />, top: '10%', left: '15%' },
  { icon: <SiTypescript />, top: '25%', left: '80%' },
  { icon: <SiPostgresql />, top: '60%', left: '5%' },
  { icon: <SiCss3 />, top: '70%', left: '70%' },
  { icon: <SiSass />, top: '15%', left: '60%' },
  { icon: <FaMobileAlt />, top: '80%', left: '25%' },
  { icon: <SiFirebase />, top: '85%', left: '45%' },
  { icon: <SiTailwindcss />, top: '80%', left: '90%' },
  { icon: <SiFigma />, top: '40%', left: '20%' },
  { icon: <SiAdobephotoshop />, top: '20%', left: '40%' },
];

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I’m Rory, a frontend developer.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-theme text-theme transition-colors duration-300 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {floatingIcons.map((item, idx) => {
          const floatDistance = Math.floor(Math.random() * 40) + 20; // 20–60px
          const duration = Math.random() * 4 + 4; // 4–8s
          const delay = Math.random() * 2;

          return (
            <motion.div
              key={idx}
              className="absolute text-accent opacity-30 text-4xl sm:text-5xl pointer-events-none select-none"
              animate={{ y: [0, -floatDistance, 0] }}
              transition={{ repeat: Infinity, duration, ease: 'easeInOut', delay }}
              style={{ top: item.top, left: item.left }}
            >
              {item.icon}
            </motion.div>
          );
        })}
      </div>

      {/* Centered text content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text}
          <span className="blinking-cursor">|</span>
        </motion.h1>

        <motion.p
          className="text-subtext text-lg sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Scroll down to explore my projects and skills.
        </motion.p>
      </div>
    </section>
  );
};

export default Home;
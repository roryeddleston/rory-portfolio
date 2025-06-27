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
import { FaMobileAlt, FaCode, FaRocket, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import '../index.css';

const floatingIcons = [
  { icon: <SiReact />, top: '10%', left: '15%' },
  { icon: <SiTypescript />, top: '25%', left: '80%' },
  { icon: <SiPostgresql />, top: '60%', left: '10%' },
  { icon: <SiCss3 />, top: '70%', left: '70%' },
  { icon: <SiSass />, top: '15%', left: '60%' },
  { icon: <FaMobileAlt />, top: '80%', left: '25%' },
  { icon: <SiFirebase />, top: '85%', left: '45%' },
  { icon: <SiTailwindcss />, top: '80%', left: '90%' },
  { icon: <SiFigma />, top: '40%', left: '20%' },
  { icon: <SiAdobephotoshop />, top: '20%', left: '40%' },
];

const timeline = [
  {
    year: '2019',
    title: 'Started learning to code',
    description: 'Taught myself HTML, CSS and JavaScript while working full-time as a data analyst.',
    icon: <FaCode />,
  },
  {
    year: '2021',
    title: 'Junior developer',
    description: 'Became a junior developer at a creative agency, working on a wide variety of projects.',
    icon: <FaRocket />,
  },
  {
    year: '2022',
    title: 'Mid level developer',
    description: 'Promoted to mid-level developer, taking on more complex projects and responsibilities.',
    icon: <FaBriefcase />,
  },
  {
    year: '2025',
    title: 'Left to travel, focus on fundamentals and the latest tools',
    description: 'Built a website for a local charity, worked on personal projects and taught myself TypeScript.',
    icon: <FaLaptopCode />,
  },
];

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Welcome, I’m Rory";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen md:pl-20 bg-gradient-theme text-surface dark:text-theme transition-colors duration-300 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {floatingIcons.map((item, idx) => {
            const floatDistance = Math.floor(Math.random() * 40) + 20;
            const duration = Math.random() * 4 + 4;
            const delay = Math.random() * 2;

            return (
              <motion.div
                key={idx}
                className="absolute text-accent opacity-30 text-4xl sm:text-5xl pointer-events-none select-none"
                animate={{ y: [0, -floatDistance, 0] }}
                transition={{ repeat: Infinity, duration, ease: 'easeInOut' }}
                style={{ top: item.top, left: item.left }}
              >
                {item.icon}
              </motion.div>
            );
          })}
        </div>

        <div className="relative z-10 max-w-4xl px-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Image */}
            <motion.img
              src="/images/profile.jpg"
              alt="Rory"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: 'easeOut',
              }}
              className="w-36 h-36 rounded-full border-[4px] border-accent text-accent shadow-lg object-cover"
            />

            {/* Text */}
            <div className="text-center md:text-left max-w-lg">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {text}
                {text !== fullText && <span className="blinking-cursor">|</span>}
              </motion.h1>

              <motion.p
                className="text-subtext text-lg sm:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                A front-end developer who thrives on solving real‑world problems with code. I love collaborating to build fast, perfomant websites and apps.
              </motion.p>

              <motion.a
                href="/projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.1, ease: 'easeOut' }}
                className="inline-block mt-6 text-lg font-medium text-accent hover:text-accent-hover border border-accent px-6 py-2 rounded-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View my work →
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="bg-surface text-surface dark:text-theme px-6 py-20 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-subtext text-lg max-w-xl text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I’m a versatile front-end developer with over 3 years industry experience. I've worked on many apps and websites, always with a focus to attention to detail. I’m always looking to learn new skills and improve my craft.
          </motion.p>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-bg text-surface dark:text-theme px-6 py-20 transition-colors duration-300 pb-30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-heading mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>

          <div className="relative border-l border-border pl-6 space-y-16 mt-15 ml-15 mr-15">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-13 top-0 w-14 h-14 bg-surface border border-border rounded-full flex items-center justify-center text-accent shadow text-xl">
                  {item.icon}
                </div>

                <div className="ml-8">
                  <h3 className="text-lg font-semibold text-heading">
                    {item.year} — {item.title}
                  </h3>
                  <p className="text-subtext mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";
import {
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaBriefcase,
  FaLaptopCode,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import "../index.css";

const floatingIcons = [
  {
    icon: <SiReact />,
    top: "15%",
    left: "12%",
    mobileTop: "22%",
    mobileLeft: "12%",
  },
  {
    icon: <SiTypescript />,
    top: "25%",
    left: "80%",
    mobileTop: "25%",
    mobileLeft: "80%",
  },
  {
    icon: <SiPostgresql />,
    top: "80%",
    left: "10%",
    mobileTop: "85%",
    mobileLeft: "10%",
  },
  {
    icon: <SiCss3 />,
    top: "76%",
    left: "74%",
    mobileTop: "76%",
    mobileLeft: "85%",
  },
  {
    icon: <SiSass />,
    top: "15%",
    left: "60%",
    mobileTop: "10%",
    mobileLeft: "60%",
  },
  {
    icon: <FaMobileAlt />,
    top: "80%",
    left: "30%",
    mobileTop: "94%",
    mobileLeft: "30%",
  },
  {
    icon: <SiFirebase />,
    top: "90%",
    left: "50%",
    mobileTop: "90%",
    mobileLeft: "50%",
  },
  {
    icon: <SiTailwindcss />,
    top: "85%",
    left: "90%",
    mobileTop: "90%",
    mobileLeft: "85%",
  },
  {
    icon: <SiFigma />,
    top: "35%",
    left: "20%",
    mobileTop: "35%",
    mobileLeft: "10%",
  },
  {
    icon: <SiAdobephotoshop />,
    top: "20%",
    left: "40%",
    mobileTop: "8%",
    mobileLeft: "35%",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Started learning to code",
    description:
      "Taught myself HTML, CSS and JavaScript while working full-time as a data analyst.",
    icon: <FaCode />,
  },
  {
    year: "2021",
    title: "Junior developer",
    description:
      "Became a junior developer at a creative agency, working on a wide variety of projects.",
    icon: <FaRocket />,
  },
  {
    year: "2022",
    title: "Mid level developer",
    description:
      "Promoted to mid-level developer, taking on more complex projects and responsibilities.",
    icon: <FaBriefcase />,
  },
  {
    year: "2025",
    title: "Left to travel, focus on fundamentals and the latest tools",
    description:
      "Built a website for a local charity, worked on personal projects and taught myself TypeScript.",
    icon: <FaLaptopCode />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const fadeOnly = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Dot = () => (
  <span className="text-accent mx-2" aria-hidden="true">
    •
  </span>
);

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile (<= 640px) so you can set mobileTop/mobileLeft per icon
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = (e) => setIsMobile("matches" in e ? e.matches : e.matches);
    onChange(mq);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen md:pl-20 bg-gradient-theme text-surface dark:text-theme transition-colors duration-300 flex items-center justify-center overflow-hidden">
        {/* Floating icons */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {floatingIcons.map((item, idx) => {
            const floatDistance = Math.floor(Math.random() * 26) + 12;
            const duration = Math.random() * 5 + 6;

            return (
              <motion.div
                key={idx}
                className="absolute text-accent opacity-20 text-4xl sm:text-5xl pointer-events-none select-none"
                animate={{ y: [0, -floatDistance, 0] }}
                transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
                style={{
                  top: isMobile && item.mobileTop ? item.mobileTop : item.top,
                  left:
                    isMobile && item.mobileLeft ? item.mobileLeft : item.left,
                }}
              >
                {item.icon}
              </motion.div>
            );
          })}
        </div>

        {/* Soft glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.10), transparent 45%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.08), transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-5xl px-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="shrink-0"
            >
              <img
                src="/images/profile.webp"
                alt="Rory"
                className="w-36 h-36 rounded-full border-4 text-accent border-accent shadow-lg object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="text-center md:text-left max-w-xl"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Eyebrow with green dot */}
              <motion.p
                variants={fadeOnly}
                className="text-xs sm:text-sm uppercase tracking-[0.22em] text-subtext/80 mb-4"
              >
                <span>Front-End Engineer</span>
              </motion.p>

              {/* Name (green accent) */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent leading-[1.05] mb-10"
              >
                Rory Eddleston
              </motion.h1>

              {/* Value line */}
              <motion.p
                variants={fadeUp}
                className="text-subtext text-lg sm:text-xl leading-relaxed mb-10"
              >
                I build clean, performant interfaces with thoughtful motion and
                strong attention to UX and data.
              </motion.p>

              {/* Tech hint with green dots */}
              <motion.p
                variants={fadeOnly}
                className="mt-5 text-md text-subtext/80"
              >
                <span>Next.js</span>
                <Dot />
                <span>React</span>
                <Dot />
                <span>TypeScript</span>
                <Dot />
                <span>Tailwind</span>
                <Dot />
                <span>REST API's</span>
                <Dot />
                <span>Framer Motion</span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 mt-8"
              >
                <motion.a
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 text-base font-medium text-white bg-accent px-6 py-3 rounded-xl transition-all hover:bg-accent-hover"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View projects
                  <span
                    aria-hidden="true"
                    className="inline-flex transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    <FaArrowRight />
                  </span>
                </motion.a>

                <motion.a
                  href="https://github.com/roryeddleston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-base font-medium text-accent border border-accent/60 px-6 py-3 rounded-xl transition-all hover:border-accent"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>
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
            I’m a versatile front-end developer with over 3 years industry
            experience. I've worked on many apps and websites, always with a
            focus on attention to detail. I’m constantly looking to learn new
            skills and improve my craft.
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

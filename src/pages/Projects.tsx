import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "Pokémon Alternative Investment Fund",
    inDevelopment: true,
    description:
      "Pokémon alternative investment fund website focused on PSA-graded cards with live data from multiple API's. Features a responsive slab-fan hero, shokunin-inspired best practices. Sanity-driven content and a tokenized design system.",
    desktopImg: "/images/pokemon-desktop.webp",
    mobileImg: "/images/pokemon-mobile.webp",
    stack: "Next.js 15, React, Tailwind CSS, Framer Motion, REST API, Sanity.",
    challenges: "Integrating multiple API's and content modeling in Sanity, ",
  },
  {
    title: "LifeOS productivity app",
    description:
      "A personal productivity dashboard with habits, tasks, and goal tracking. Fully authenticated via Clerk with real-time UI updates, drag-and-drop functionality, and an animated modern design.",
    link: "https://lifeos-beige.vercel.app/",
    github: "https://github.com/roryeddleston/lifeos",
    desktopImg: "/images/lifeos-desktop.webp",
    mobileImg: "/images/lifeos-mobile.webp",
    stack:
      "Next.js 15, React, Clerk, PostgreSQL, Prisma, Tailwind CSS, Framer Motion.",
    challenges:
      "Refactoring to support user-specific data using Clerk and Prisma was a major task. Optimistic UI updates with drag-and-drop interactions using @dnd-kit posed challenges around state management and syncing with the database. Designing an intuitive dashboard required extensive iteration and layout restructuring.",
    demo: {
      email: "lifeos-test@outlook.com",
      password: "j(3t~I:'`1K8",
    },
  },
  {
    title: "CoDriver mobile app",
    description:
      "Navigation app with tracking/audio files for drivers using React Native and Expo.",
    link: "#",
    desktopImg: "",
    mobileImg: "/images/codriver-mobile.webp",
    stack: "React Native, Expo, Sentry and Firebase.",
    challenges:
      "Took over in-house app development of this React Native app all by myself. Had to learn how to use Expo and Firebase, as well as how to set up Sentry for error tracking. I also had to learn how to use the Google Maps API and how to implement it into the app.",
  },
  {
    title: "Ignition website",
    description:
      "A modern responsive website for a creative agency I used to work for. Which includes a unique design, multiple moving carosels and a blog.",
    link: "https://www.ignitiononline.com/",
    desktopImg: "/images/ignition-desktop.webp",
    mobileImg: "/images/ignition-mobile.webp",
    stack: "React, SCSS, Email.js and Next.js.",
    challenges:
      "Unusual layout and design required creative solutions for responsiveness. I had to learn how to use Next.js for server-side rendering and Email.js for the contact form.",
  },
  {
    title: "Revive support hub",
    description:
      "Uniquely styled website for a local charity, aimed at parents of children with additional needs. Built quickly with future updates in mind. The website is fully responsive and includes a donation page.",
    link: "https://www.revivesupporthub.com/",
    github: "https://github.com/roryeddleston/revive",
    desktopImg: "/images/revive-desktop.webp",
    mobileImg: "/images/revive-mobile.webp",
    stack: "React, SCSS, Email.js and Stripe.",
    challenges:
      "Unique layout proved to be difficult to implement, especially for responsiveness. I had to learn how to use Email.js for the contact form and Stripe for the donation page.",
  },
  {
    title: "Portfolio Website",
    description:
      "A clean and performant portfolio website. Mobile first design with dark/light mode toggle.",
    link: "https://roryeddleston.dev",
    github: "https://github.com/roryeddleston/rory-portfolio",
    desktopImg: "/images/portfolio-desktop.webp",
    mobileImg: "/images/portfolio-mobile.webp",
    stack: "React, TypeScript, Tailwind CSS, Framer Motion and Vite.",
    challenges:
      "First time using Vite and Tailwind. It was challenging getting everything up-to-date and making sure all versions were compatible. I also had to learn how to use Framer Motion for the animations.",
  },
];

type CopyFieldProps = {
  label: string;
  value: string;
};

const CopyField = ({ label, value }: CopyFieldProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <label className="w-20 text-sm font-medium">{label}:</label>
      <input
        type="text"
        readOnly
        value={value}
        className="border rounded px-2 py-1 w-full max-w-xs bg-muted text-sm"
      />
      <button
        onClick={handleCopy}
        className="px-2 py-1 text-sm bg-accent text-white rounded hover:bg-accent-hover"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-bg text-text transition-colors duration-300">
      <motion.h2
        className="text-5xl font-bold text-center text-heading"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-center text-subtext mt-15 text-base max-w-xxl mx-auto 2xl:mb-20"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        This is a selection of public projects - many others remain
        confidential.
      </motion.p>

      <div className="lg:space-y-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col-reverse lg:flex-row gap-10 p-6 overflow-hidden rounded-2xl"
          >
            <div className="relative w-9/10 lg:w-1/2 flex items-center justify-center">
              {project.title === "CoDriver mobile app" ? (
                <motion.img
                  src={project.mobileImg}
                  alt={`${project.title} mobile screenshot`}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full h-auto max-w-[240px] sm:max-w-[300px] lg:max-w-md object-contain"
                />
              ) : (
                <>
                  <motion.img
                    src={project.desktopImg}
                    alt={`${project.title} desktop screenshot`}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full rounded-xl"
                  />
                  <motion.img
                    src={project.mobileImg}
                    alt={`${project.title} mobile screenshot`}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-30 right-0 w-24 sm:w-28 lg:w-40 transform translate-x-1/3 translate-y-1/3 rounded-xl"
                  />
                </>
              )}
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 space-y-4 lg:mt-20 lg:ml-20"
            >
              <h3 className="text-3xl font-bold text-accent flex flex-wrap items-center gap-3">
                {project.title}

                {project.inDevelopment && (
                  <span
                    className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent shadow-sm"
                    aria-label="In development"
                    title="In development"
                  >
                    In development
                  </span>
                )}
              </h3>

              <p className="text-subtext mb-7">{project.description}</p>

              <div>
                <h4 className="text-sm uppercase font-semibold text-muted mb-2">
                  Tech Stack
                </h4>
                <p className="text-sm text-text">{project.stack}</p>
              </div>

              {project.challenges && (
                <div>
                  <h4 className="text-sm uppercase font-semibold text-muted mb-2">
                    Challenges Overcome
                  </h4>
                  <p className="text-sm text-text">{project.challenges}</p>
                </div>
              )}

              {project.demo && (
                <div className="mt-4">
                  <h4 className="text-sm uppercase font-semibold text-muted mb-2">
                    Demo Login
                  </h4>
                  <CopyField label="Email" value={project.demo.email} />
                  <CopyField label="Password" value={project.demo.password} />
                </div>
              )}

              <div className="flex items-center gap-4 pt-2">
                {project.link && !project.inDevelopment && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover-accent"
                  >
                    Visit website
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xl hover-accent"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

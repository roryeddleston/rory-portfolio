import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  link?: string;
  github?: string;
  desktopImg: string;
  mobileImg: string;
  stack: string;
  highlights?: string;
  inDevelopment?: boolean;
  featured?: boolean;
  demo?: {
    email: string;
    password: string;
  };
};

const projects: Project[] = [
  {
    title: "PokeVault",
    featured: true,
    description:
      "A full-stack Pokémon card portfolio tracker built with Next.js App Router. Search cards by name or number to add to your portfolio, track real market prices and view overall profit and loss.",
    link: "https://pokemon-dashboard-one.vercel.app/",
    github: "https://github.com/roryeddleston/pokemon-dashboard",
    desktopImg: "/images/pokemon-dashboard-desktop.webp",
    mobileImg: "/images/pokemon-dashboard-mobile.webp",
    stack:
      "Next.js, React, TypeScript, Prisma, Neon PostgreSQL, Tailwind CSS and TCGdex REST API.",
    highlights:
      "Built a full-stack portfolio tracker with card search, live pricing, and profit/loss visibility. A key challenge was designing a reliable way to compare card prices across different sets, finishes, grades, and editions without overwhelming the API.",
  },
  {
    title: "LifeOS productivity app",
    featured: true,
    description:
      "A personal productivity dashboard with habits, tasks, and goal tracking. Fully authenticated via Clerk with real-time UI updates, drag-and-drop functionality, and an animated modern design.",
    link: "https://lifeos-beige.vercel.app/",
    github: "https://github.com/roryeddleston/lifeos",
    desktopImg: "/images/lifeos-desktop.webp",
    mobileImg: "/images/lifeos-mobile.webp",
    stack:
      "Next.js, React, Clerk, PostgreSQL, Prisma, Tailwind CSS, Framer Motion.",
    highlights:
      "Built an authenticated productivity app with habits, goals, and tasks in a single dashboard. The hardest part was refactoring the app to support user-scoped data while keeping optimistic updates and drag-and-drop interactions feeling smooth and reliable.",
    demo: {
      email: "lifeos-test@outlook.com",
      password: "j(3t~I:'`1K8",
    },
  },
  {
    title: "CoDriver mobile app",
    featured: true,
    description:
      "Navigation app with tracking and location-based audio playback for drivers, built with React Native and Expo.",
    link: "#",
    desktopImg: "",
    mobileImg: "/images/codriver-mobile.webp",
    stack: "React Native, Expo, Sentry and Firebase.",
    highlights:
      "Took over development of an in-house mobile app, refactored legacy code, and fixed long-standing bugs. This meant quickly learning Expo, Firebase, Sentry, and location-based workflows in a live product environment.",
  },
  {
    title: "Pokémon Alternative Investment Fund",
    inDevelopment: true,
    description:
      "Pokémon alternative investment fund website focused on PSA-graded cards with live data from multiple APIs. Features a responsive slab-fan hero, shokunin-inspired best practices, Sanity-driven content, and a tokenized design system.",
    desktopImg: "/images/pokemon-desktop.webp",
    mobileImg: "/images/pokemon-mobile.webp",
    stack: "Next.js 15, React, Tailwind CSS, Framer Motion, REST API, Sanity.",
    highlights:
      "Integrating multiple APIs and content modelling in Sanity while balancing performance, motion, and a polished visual identity has been the main challenge so far.",
  },
  {
    title: "Ignition website",
    description:
      "A modern responsive website for a creative agency I used to work for. Which includes a unique design, multiple moving carosels and a blog.",
    link: "https://www.ignitiononline.com/",
    desktopImg: "/images/ignition-desktop.webp",
    mobileImg: "/images/ignition-mobile.webp",
    stack: "React, SCSS, Email.js and Next.js.",
    highlights:
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
    highlights:
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
    highlights:
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
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
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
        type="button"
        onClick={handleCopy}
        className="px-2 py-1 text-sm bg-accent text-white rounded hover:bg-accent-hover"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-4 pt-2">
    {project.link && !project.inDevelopment && project.link !== "#" && (
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
);

const SupportingProjectCard = ({ project }: { project: Project }) => {
  const showLinks =
    (project.link && !project.inDevelopment && project.link !== "#") ||
    project.github;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 p-5 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative mb-5 flex min-h-[220px] items-center justify-center overflow-hidden rounded-xl">
        <img
          src={project.desktopImg}
          alt={`${project.title} desktop screenshot`}
          className="w-full rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <img
          src={project.mobileImg}
          alt={`${project.title} mobile screenshot`}
          className="absolute bottom-3 right-3 w-20 rounded-xl shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-1"
        />
      </div>

      <div className="space-y-3">
        <h3 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-heading">
          {project.title}

          {project.inDevelopment && (
            <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
              In development
            </span>
          )}
        </h3>

        <p className="text-sm text-subtext">{project.description}</p>
        <p className="text-sm text-text">{project.stack}</p>

        {showLinks && <ProjectLinks project={project} />}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

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
        className="text-center text-subtext mt-15 text-base max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        A selection of public work that reflects how I build today - modern
        front-end systems, full-stack applications, and polished user
        experiences.
      </motion.p>

      <div className="lg:space-y-10 max-w-6xl mx-auto">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="relative flex flex-col-reverse gap-10 overflow-hidden rounded-2xl p-6 lg:flex-row"
          >
            <div
              className={`relative flex w-9/10 items-center justify-center lg:w-1/2 ${
                project.title === "CoDriver mobile app" ? "pb-0" : ""
              }`}
            >
              {project.title === "CoDriver mobile app" ? (
                <motion.img
                  src={project.mobileImg}
                  alt={`${project.title} mobile screenshot`}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full h-auto max-w-[220px] sm:max-w-[280px] lg:max-w-md object-contain"
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
                    className="absolute bottom-30 right-0 w-24 transform translate-x-1/3 translate-y-1/3 rounded-xl sm:w-28 lg:w-40"
                  />
                </>
              )}
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex-1 space-y-4 ${
                project.title === "CoDriver mobile app"
                  ? "lg:mt-20 lg:ml-20 pb-0"
                  : "lg:mt-20 lg:ml-20"
              }`}
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
                  Built With
                </h4>
                <p className="text-sm text-text">{project.stack}</p>
              </div>

              {project.highlights && (
                <div>
                  <h4 className="text-sm uppercase font-semibold text-muted mb-2">
                    Key Highlights
                  </h4>
                  <p className="text-sm text-text">{project.highlights}</p>
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

              <ProjectLinks project={project} />
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Other Work
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {supportingProjects.map((project) => (
            <SupportingProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

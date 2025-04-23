import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Reps & mins',
    description: 'A habit tracker connected to a Firestore database.',
    link: 'https://repsandminutes.netlify.app/home',
    desktopImg: '/images/minutes-desktop.png',
    mobileImg: '/images/minutes-mobile.png',
    stack: 'React, Firebase, SCSS',
    challenges: 'Real-time syncing, mobile responsiveness, and offline support.',
  },
  {
    title: 'CoDriver app',
    description: 'Navigation app with tracking/audio files for drivers using React Native and Expo.',
    link: '#',
    desktopImg: '/images/codriver-desktop.png',
    mobileImg: '/images/codriver-mobile.png',
    stack: 'React Native, Expo, Firebase',
    challenges: 'Managing audio streaming with GPS sync and background tracking.',
  },
  {
    title: 'Revive support hub',
    description: 'Uniquely styled website for a local charity for parents of children with additional needs.',
    link: 'https://www.revivesupporthub.com/',
    desktopImg: '/images/revive-desktop.png',
    mobileImg: '/images/revive-mobile.png',
    stack: 'React, Tailwind CSS, Netlify',
    challenges: 'Unique layout with dynamic content and accessibility in mind.',
  },
  {
    title: 'Portfolio Website',
    description: 'A clean and performant portfolio site built with Vite.',
    link: 'https://github.com/roryeddleston/rory-portfolio',
    desktopImg: '/images/portfolio-desktop.png',
    mobileImg: '/images/portfolio-mobile.png',
    stack: 'React, Tailwind CSS, Vite',
    challenges: 'Ensuring mobile-first responsive design with dark mode support.',
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-bg text-text transition-colors duration-300 md:pl-20">
      <h2 className="text-5xl font-bold text-center text-heading mb-16">Projects</h2>

      <div className="space-y-32 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative flex flex-col-reverse lg:flex-row gap-10 p-6 overflow-hidden rounded-2xl"
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2">
              <img
                src={project.desktopImg}
                alt={`${project.title} desktop screenshot`}
                className="w-full rounded-xl"
              />
              <motion.img
                src={project.mobileImg}
                alt={`${project.title} mobile screenshot`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="absolute bottom-30 right-0 w-28 sm:w-32 lg:w-40 transform translate-x-1/3 translate-y-1/3 rounded-xl"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 space-y-4 ml-20 mt-20">
              <h3 className="text-2xl font-bold text-heading">{project.title}</h3>
              <p className="text-subtext">{project.description}</p>

              <div>
                <h4 className="text-sm uppercase font-semibold text-muted mb-1">Tech Stack</h4>
                <p className="text-sm text-text">{project.stack}</p>
              </div>

              {project.challenges && (
                <div>
                  <h4 className="text-sm uppercase font-semibold text-muted mb-1">Challenges Overcome</h4>
                  <p className="text-sm text-text">{project.challenges}</p>
                </div>
              )}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-accent font-medium hover:text-accent-hover"
              >
                View project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

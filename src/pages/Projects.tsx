import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Reps & mins',
    description: 'Scaleable habit tracker with individual Auth0 login connected to a Firestore database. CRUD operations and filtering available. Real-time syncing, mobile responsiveness, and offline support. Built for personal use.',
    link: 'https://repsandminutes.netlify.app',
    github: 'https://github.com/roryeddleston/minutes',
    desktopImg: '/images/minutes-desktop.png',
    mobileImg: '/images/minutes-mobile.png',
    stack: 'React/Redux, Firebase, Auth0 and SCSS.',
    challenges: 'I had to learn how to use Firestore and how to set up a database, ensuring I had everything needed to add new features. Auth0 led to some issues with the login process, but I was able to resolve them.',
  },
  {
    title: 'CoDriver mobile app',
    description: 'Navigation app with tracking/audio files for drivers using React Native and Expo.',
    link: '#',
    desktopImg: '',
    mobileImg: '/images/codriver-mobile.png',
    stack: 'React Native, Expo, Sentry and Firebase.',
    challenges:
      'Took over in-house app development of this React Native app all by myself. Had to learn how to use Expo and Firebase, as well as how to set up Sentry for error tracking. I also had to learn how to use the Google Maps API and how to implement it into the app.',
  },
  {
    title: 'Revive support hub',
    description: 'Uniquely styled website for a local charity, aimed at parents of children with additional needs. Built with future updates in mind. The website is fully responsive and includes a donation page.',
    link: 'https://www.revivesupporthub.com/',
    github: 'https://github.com/roryeddleston/revive',
    desktopImg: '/images/revive-desktop.png',
    mobileImg: '/images/revive-mobile.png',
    stack: 'React, SCSS, Email.js and Stripe.',
    challenges: 'Unique layout proved to be difficult to implement, especially for responsiveness. I had to learn how to use Email.js for the contact form and Stripe for the donation page.',
  },
  {
    title: 'Portfolio Website',
    description: 'A clean and performant portfolio website. Mobile first design with dark/light mode toggle.',
    link: 'https://roryeddleston.dev',
    github: 'https://github.com/roryeddleston/rory-portfolio',
    desktopImg: '/images/portfolio-desktop.png',
    mobileImg: '/images/portfolio-mobile.png',
    stack: 'React, TypeScript, Tailwind CSS, Framer Motion and Vite.',
    challenges:
      'First time using Vite and Tailwind. It was challenging getting everything up-to-date and making sure all versions were compatible. I also had to learn how to use Framer Motion for the animations.',
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-bg text-text transition-colors duration-300">
      <h2 className="text-5xl font-bold text-center text-heading">Projects</h2>

      <div className="lg:space-y-10 max-w-6xl mx-auto mt-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col-reverse lg:flex-row gap-10 p-6 overflow-hidden rounded-2xl"
          >
            {/* Image Section */}
            <div className="relative w-9/10 lg:w-1/2 flex items-center justify-center">
              {project.title === 'CoDriver mobile app' ? (
                <motion.img
                  src={project.mobileImg}
                  alt={`${project.title} mobile screenshot`}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
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
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="w-full rounded-xl"
                  />
                  <motion.img
                    src={project.mobileImg}
                    alt={`${project.title} mobile screenshot`}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute bottom-30 right-0 w-24 sm:w-28 lg:w-40 transform translate-x-1/3 translate-y-1/3 rounded-xl"
                  />
                </>
              )}
            </div>

            {/* Text Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex-1 space-y-4 lg:mt-20 lg:ml-20"
            >
              <h3 className="text-3xl font-bold text-accent">{project.title}</h3>
              <p className="text-subtext mb-7">{project.description}</p>

              <div>
                <h4 className="text-sm uppercase font-semibold text-muted mb-2">Tech Stack</h4>
                <p className="text-sm text-text">{project.stack}</p>
              </div>

              {project.challenges && (
                <div>
                  <h4 className="text-sm uppercase font-semibold text-muted mb-2">Challenges Overcome</h4>
                  <p className="text-sm text-text">{project.challenges}</p>
                </div>
              )}

              <div className="flex items-center gap-4 pt-2">
                {project.title !== 'CoDriver mobile app' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:text-accent-hover"
                  >
                    Visit website
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xl hover:text-accent-hover"
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
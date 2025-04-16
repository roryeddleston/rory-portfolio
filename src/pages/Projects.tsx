import ProjectCard from '../components/ProjectCard';
import "../index.css";

const projects = [
  {
    title: 'Minutes app',
    description: 'A habit tracker connected to a firestore database.',
    link: 'https://repsandminutes.netlify.app/home',
  },
  {
    title: 'CoDriver app',
    description: 'A navigation app with tracking/audio files for drivers, built with React Native and Expo.',
    link: '#',
  },
  {
    title: 'Revive support hub',
    description: 'A uniquely styled website for a charity for parents of children with additional needs.',
    link: 'https://www.revivesupporthub.com/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, Tailwind CSS, and Vite.',
    link: 'https://github.com/roryeddleston/rory-portfolio',
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
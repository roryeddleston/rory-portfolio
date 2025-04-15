import React from 'react';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  );
};

export default ProjectCard;
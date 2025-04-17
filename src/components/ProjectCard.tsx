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
      className="bg-surface text-text rounded-2xl shadow-md p-6 hover:shadow-lg transition-all border border-border"
    >
      <h3 className="text-xl font-semibold mb-2 text-heading">{title}</h3>
      <p className="text-subtext mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-hover font-medium transition-colors"
      >
        View Project →
      </a>
    </motion.div>
  );
};

export default ProjectCard;
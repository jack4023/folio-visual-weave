import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  img: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 break-inside-avoid overflow-hidden rounded-lg shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img src={project.img} alt={project.title} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-end p-4">
          <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-sm">{project.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

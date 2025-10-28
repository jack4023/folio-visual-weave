import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, testimonials, awards } from '../data/local-data';
import ProjectCard from '../components/ProjectCard';

const filters = ['All', 'Web Design', 'Branding', 'Illustration'];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <div className="space-y-16 md:space-y-24">
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4be50f2-1686-425f-bd88-d3466273788a/hero-background-kajg2pm-1761664485911.webp)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black bg-opacity-50 p-8 rounded-lg"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Creative Developer & Designer</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Building beautiful and functional web experiences with an African touch.</p>
        </motion.div>
      </section>

      <section id="projects" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Work</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/90 hover:text-primary-foreground'
              }`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="testimonials" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-muted p-6 rounded-lg">
              <p className="italic mb-4">{`\"${testimonial.quote}\"`}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Awards</h2>
        <div className="max-w-2xl mx-auto">
          {awards.map((award) => (
            <div key={award.id} className="flex justify-between items-center border-b py-4">
              <div>
                <p className="font-bold">{award.title}</p>
                <p className="text-sm text-muted-foreground">{award.institution}</p>
              </div>
              <p className="font-medium">{award.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

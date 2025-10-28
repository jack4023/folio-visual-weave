import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground">
            I am a passionate software engineer and designer with a knack for creating engaging user experiences. With a background in both creative arts and technology, I bring a unique perspective to every project.
          </p>
          <p className="text-lg text-muted-foreground">
            My work is driven by a desire to build things that are not only beautiful but also solve real-world problems. I specialize in front-end development with React, and I love bringing ideas to life with code.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Download Resume
          </a>
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4be50f2-1686-425f-bd88-d3466273788a/about-image-y71li1u-1761664544229.webp"
            alt="Sanjana"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;

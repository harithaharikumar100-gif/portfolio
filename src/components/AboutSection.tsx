import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Database, Server } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Driven to create intelligent systems and scalable machine learning applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl glass-card flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold glow-text">HP</span>
                </div>
                <p className="text-sm text-muted-foreground">Haritha P</p>
              </div>
            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-foreground/90 leading-relaxed">
             I am a BCA graduate and a passionate Python & Django developer with a strong focus on Data Science, Machine Learning, and Artificial Intelligence. I specialize in building data-driven applications and intelligent systems that solve real-world problems.


            </p>
            <p className="text-muted-foreground leading-relaxed">
             My experience spans from exploratory data analysis and predictive modeling to developing AI-powered web applications using Django and Python. I enjoy transforming complex data into actionable insights and creating scalable backend solutions for machine learning and AI projects.

              Driven by curiosity and innovation, I aim to build smart, impactful applications that combine AI, analytics, and web development.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Code2, label: "Python Dev" },
                { icon: Server, label: "Django" },
                { icon: Brain, label: "AI & ML" },
                { icon: Database, label: "Data Science" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

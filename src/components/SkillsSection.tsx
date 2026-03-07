import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python","HTML","CSS" ,"C", "PHP"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Django", "Flask","mysql"],
  },
  {
    title: "Data Science & AI",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Matplotlib","Seaborn", "Scikit-learn", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Jupyter Notebook", "Streamlit","pycharm", "VS Code"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with regularly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
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
              I'm an Agentic AI Engineer building intelligent systems for governance, risk, and compliance. 
              My work centers on Retrieval-Augmented Generation (RAG) pipelines, multi-agent architectures, 
              and LLM-powered analysis tools that turn complex regulatory and risk data into clear, actionable insights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've built and shipped production AI systems including a compliance gap-analysis engine 
              that evaluates organizations against frameworks like ISO 27001, NIST CSF, and DPDP Act, 
              and a vendor risk intelligence platform that scores third-party risk across financial, 
              cyber, and reputational dimensions.

              I care about building AI that's not just powerful, but trustworthy — grounded, explainable, 
              and genuinely useful for real-world decision-making.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Brain, label: "Agentic AI" },
                { icon: Database, label: "RAG Systems" },
                { icon: Code2, label: "LLM Engineering" },
                { icon: Server, label: "Python & APIs" },
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
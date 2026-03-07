import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Star, BookOpen } from "lucide-react";

const stats = [
  { icon: GitBranch, label: "Contributions", value: "200+", color: "text-primary" },
  { icon: Star, label: "Stars Earned", value: "50+", color: "text-accent" },
  { icon: BookOpen, label: "Repositories", value: "20+", color: "text-primary" },
];

const GitHubStatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            GitHub <span className="glow-text">Stats</span>
          </h2>
          <p className="section-subheading mx-auto">
            My open-source contributions and activity overview.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-8 text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <p className="text-3xl font-bold text-foreground mb-1 code-font">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-4 code-font">contribution_graph</p>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 84 }, (_, i) => {
              const opacity = [0.1, 0.2, 0.4, 0.6, 0.8][Math.floor(Math.random() * 5)];
              return (
                <div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{ backgroundColor: `hsl(172 66% 50% / ${opacity})` }}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-4 text-xs text-muted-foreground code-font">
            <span>Less</span>
            <div className="flex gap-1">
              {[0.1, 0.3, 0.5, 0.7, 1].map((o) => (
                <div
                  key={o}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: `hsl(172 66% 50% / ${o})` }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;

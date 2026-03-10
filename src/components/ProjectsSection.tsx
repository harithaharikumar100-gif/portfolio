import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Virat Kohli ODI Career Analysis",
    description: "Exploratory Data Analysis of Virat Kohli's ODI career statistics with rich visualizations and insights.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "/projects/virat.jpg",
    github: "https://github.com/harithaharikumar100-gif/money-heist-eda",
    
  },
  {
    title: "FIFA Data Exploration",
    description: "Deep dive into FIFA player data, uncovering patterns in player attributes, ratings, and performance metrics.",
    tech: ["Python", "Pandas", "NumPy", "Plotly"],
    image: "projects/fifa.jpg",
    github: "https://github.com/harithaharikumar100-gif/fifa-data-exploration",
   
  },
     {
    title: "Money Heist Data Analysis",
    description: "Analyzing viewer data, ratings, and character appearances across the popular series using data science tools.",
    tech: ["Python", "Pandas", "Matplotlib"],
    image: "/projects/money_heist.jpg",
    github: "https://github.com/harithaharikumar100-gif/money-heist-eda", // Add GitHub link
  
  },
  {
    title: "Diabetes Prediction ML Model",
    description: "Machine learning model to predict diabetes onset using classification algorithms and Flask deployment.",
    tech: ["Python", "Scikit-learn", "Flask"],
    image: "/projects/diabetes.jpg",
    github: "https://github.com/harithaharikumar100-gif/Diabetes-Prediction",
  
  },
  {
    title: "Admission Prediction ML Model",
    description: "Predicting university admission chances using regression models based on academic and research parameters.",
    tech: ["Python", "Scikit-learn", "NumPy"],
    image: "/projects/admission.jpg",
    github: "https://github.com/harithaharikumar100-gif/Admission-Prediction",

  },
  {
    title: "Drug Classification ML Project",
    description: "Classifying different types of drugs using machine learning models with feature engineering and evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas","Seaborn"],
    image: "/projects/drugs.jpg",
    github: "https://github.com/harithaharikumar100-gif/Drugs-Classification",
  
  },

  // Streamlit Projects
  {
    title: "Live Income Dashboard",
    description: "Interactive Streamlit app displaying income statistics with real-time charts and filters.",
    tech: ["Python", "Streamlit", "Pandas","Numpy","Plotly"],
    image: "/projects/income.jpg",
    github: "https://github.com/harithaharikumar100-gif/liveIncome",
   
  },
  {
    title: "Iris Flower Classification",
    description: "Streamlit web app to classify Iris flower species using a machine learning model.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
    image: "/projects/iris.jpg",
    github: "https://github.com/harithaharikumar100-gif/iris-classification-project",
  
  },
  {
  title: "AI Interview Answer Evaluator",
  description: "An NLP-based system that evaluates interview answers using semantic similarity and provides instant feedback.",
  tech: ["Python", "NLP", "Sentence Transformers", "PyTorch", "Streamlit"],
  image: "/projects/interview.jpg",
  github: "https://github.com/harithaharikumar100-gif/AI-Interview-Answer-Evaluator",
  },

  {
  title: "AI Knowledge Chatbot",
  description: "A domain-specific chatbot that answers AI, ML, and Python questions using semantic search.",
  tech: ["Python", "NLP", "Sentence Transformers", "NLTK", "Streamlit"],
  image: "/projects/ChatGPT.png",
  github: "https://github.com/harithaharikumar100-gif/NLP-Chatbot",
  },

  // Django Projects
  {
    title: "Headphone Selling Website",
    description: "Full-stack e-commerce site for selling headphones, built with Python and Django.",
    tech: ["Python", "Django", "HTML", "CSS"],
    image: "/projects/headphones.jpg",
    github: "https://github.com/harithaharikumar100-gif/Headphone-Django-Project",
    
  },
  {
    title: "To-Do Application",
    description: "A Django web application to manage tasks, featuring CRUD operations.",
    tech: ["Python", "Django", "HTML","CSS"],
    image: "/projects/todo.jpg",
    github: "https://github.com/harithaharikumar100-gif/todo-django-project.git",
    
  },
  // Add other projects similarly
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            A collection of data science and development projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover rounded-t-xl"
              />

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground code-font"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
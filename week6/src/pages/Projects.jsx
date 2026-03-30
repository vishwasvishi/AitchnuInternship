import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Intelligent Power Management System",
    desc: "AI-based system to optimize energy usage and reduce power wastage."
  },
  {
    title: "Online Expenses Tracker",
    desc: "Web app to track and manage daily expenses."
  },
  {
    title: "College Website Management System",
    desc: "Platform to manage academic and event information."
  },
  {
    title: "Portfolio Dashboard",
    desc: "Personal portfolio built using React."
  }
];

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects-container">

    
      <h1 className="projects-title">My Projects</h1>


      <input
        className="search-input"
        placeholder="🔍 Search projects..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <button className="view-btn">View Details</button>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
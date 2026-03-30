import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about-container">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-title"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="about-text"
      >
        I am a Computer Science Engineering student with a strong interest in
        frontend development and problem solving. I enjoy building clean,
        modern, and user-friendly applications while continuously improving my skills.
      </motion.p>
      <div className="about-grid">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="about-card"
        >
          <h2>🚀 Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React (Learning)</li>
            <li>Java</li>
            <li>MySQL, MongoDB</li>
          </ul>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="about-card"
        >
          <h2>🎓 Education</h2>
          <p>B.E CSE – MIT Mysore (2026)</p>
          <p>Diploma – 8.61 CGPA</p>
        </motion.div>

      </div>
    </div>
  );
}

import { motion } from "framer-motion";

export default function Dashboard() {
  const stats = [
    { title: "Projects", value: 4 },
    { title: "Skills", value: "6+" },
    { title: "Internships", value: 2 }
  ];

  return (
    <div className="dashboard-container">

      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Dashboard 📊
      </motion.h1>

      {/* STATS */}
      <div className="dashboard-grid">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="dashboard-card"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>

      {/* PROGRESS SECTION */}
      <div className="progress-section">

        <h2>Skill Progress 🚀</h2>

        <div className="progress-bar">
          <span>Frontend</span>
          <div className="bar">
            <div className="fill frontend"></div>
          </div>
        </div>

        <div className="progress-bar">
          <span>React</span>
          <div className="bar">
            <div className="fill react"></div>
          </div>
        </div>

        <div className="progress-bar">
          <span>Backend</span>
          <div className="bar">
            <div className="fill backend"></div>
          </div>
        </div>

      </div>

    </div>
  );
}
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="hero-container">

      
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Vishwas</span> 👋
        </h1>

        <h2>
          <TypeAnimation
  sequence={[
    "Frontend Developer", 2000,
    "React Developer", 2000,
    "CSE Student", 2000
  ]}
  speed={50}
  repeat={Infinity}
/>
        </h2>

        <p>
          Passionate about building modern, responsive, and user-friendly web
          applications using React and JavaScript.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" download>
            <button className="btn-primary">Download Resume</button>
          </a>

          <button className="btn-outline">View Projects</button>
        </div>
      </motion.div>

      
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="profile-wrapper">
          <img
            src="./assets/profile.jpg"   
            alt="profile"
          />
        </div>
      </motion.div>

    </div>
  );
}
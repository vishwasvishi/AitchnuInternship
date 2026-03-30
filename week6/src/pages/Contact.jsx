import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message Sent Successfully!");
  };

  return (
    <div className="contact-container">

      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Me</h1>

        <p>📧 vishwasn200427@gmail.com</p>
        <p>📱 +91 7676166230</p>

        <div className="social-links">
          <a href="https://github.com/vishwasvishi" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </motion.div>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Your Message..."
          rows="5"
          required
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>

        <button className="send-btn">Send Message 🚀</button>
      </motion.form>

    </div>
  );
}
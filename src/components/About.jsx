import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/profile.jpg";
import "./About.css";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={"about" + (visible ? " show" : "")}
      ref={sectionRef}
    >
      {/* LEFT - Image */}
      <div className="about-left">
        <div className="about-img-wrapper">
          <img src={aboutImg} alt="About Hardik Garg" />
          <div className="about-img-glow"></div>
        </div>

        {/* Info Cards */}
        <div className="about-cards">
          <div className="about-card">
            <span className="card-icon">🎓</span>
            <div>
              <h4>Education</h4>
              <p>B.Tech CSE — SRGC</p>
            </div>
          </div>
          <div className="about-card">
            <span className="card-icon">💼</span>
            <div>
              <h4>Role</h4>
              <p>MERN Stack Developer</p>
            </div>
          </div>
          <div className="about-card">
            <span className="card-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - Text */}
      <div className="about-right">
        <p className="about-tag">— Who I Am</p>
        <h2>
          About <span>Me</span>
        </h2>

        <p>
          I am a B.Tech Computer Science and Engineering student at Shri Ram
          Group Of College,Muzaffarnagar with a strong interest in full-stack
          web development. I specialize in the MERN stack and enjoy building
          scalable, real-world applications with clean and maintainable code.
        </p>

        <p>
          Along with web development, I have a solid foundation in Java, Data
          Structures and problem solving. I have worked on multiple projects
          AI SaaS Exam Preparation
          Platform,Wanderlust -Travel & Stay Booking Platform and Zerodha Clone-
          A Full Stack Trading Platform. I am continuously learning new
          technologies and improving my skills to grow as a professional
          software developer.
        </p>

        <div className="about-highlights">
          <div className="highlight">
            <span>⚡</span> Problem Solver
          </div>
          <div className="highlight">
            <span>🚀</span> Fast Learner
          </div>
          <div className="highlight">
            <span>🎯</span> Detail Oriented
          </div>
          <div className="highlight">
            <span>🤝</span> Team Player
          </div>
        </div>

        <a href="#contact" className="btn primary">
          Let's Connect 🤝
        </a>
      </div>
    </section>
  );
}

export default About;

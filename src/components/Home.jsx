import { useEffect, useRef } from "react";
import profileImg from "../assets/Hardik3.png";
import "./Home.css";

function Home() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="home hidden">

      <div className="home-left">
        <p className="home-tag">👋 Welcome to my Portfolio</p>
        <h1>Hi, I'm <span>Hardik Garg</span></h1>
        <h2>🎓 B.Tech CSE  &nbsp;|&nbsp; 💻 MERN Stack Developer</h2>
        <p className="home-desc">
          Passionate about building modern, fast and responsive web apps. 
          I love turning ideas into real products using React, Node.js and MongoDB.
        </p>

        <div className="home-stats">
          <div className="stat">
            <h3>3+</h3>
            <p>Projects</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Certificates</p>
          </div>
          <div className="stat">
            <h3>1+</h3>
            <p>Years Coding</p>
          </div>
        </div>

        <div className="home-buttons">
          <a href="#contact" className="btn primary">Hire Me 🚀</a>
          <a href="#projects" className="btn outline">View Projects</a>
          <a href="/HardikGargResume.pdf" className="btn ghost" target="_blank" rel="noreferrer">Resume 📄</a>
        </div>
      </div>

      <div className="home-right">
        <div className="image-ring">
          <img src={profileImg} alt="Hardik Garg" />
        </div>
        <div className="glow-circle"></div>
      </div>

    </section>
  );
}

export default Home;
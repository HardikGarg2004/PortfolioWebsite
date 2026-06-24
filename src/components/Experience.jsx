import { useEffect, useRef, useState } from "react";
import "./Experience.css";

function Experience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={"experience" + (visible ? " show" : "")}
    >
      <p className="section-tag">— Work History</p>
      <h2>Experience</h2>
      <p className="section-sub">My professional journey so far</p>

      <div className="exp-timeline">

        <div className="exp-card">
          <div className="exp-left">
            <div className="exp-icon">💼</div>
            <div className="exp-line"></div>
          </div>

          <div className="exp-right">
            <div className="exp-header">
              <div>
                <h3>Full Stack Developer</h3>
                <p className="exp-company">
Sysslan IT Solutions</p>
              </div>
              <span className="exp-badge">Internship</span>
            </div>

            <p className="exp-date">📅 June 2026 — July 2026</p>

            <p className="exp-desc">
              Worked as a Full Stack Developer at 
Sysslan IT Solutions, contributing
              to real-world web applications. Handled both frontend and backend development,
              collaborating with the team to deliver clean, scalable and production-ready solutions.
            </p>

            <div className="exp-highlights">
              <div className="exp-point">
                <span className="dot"></span>
                Built and maintained full stack web features end to end
              </div>
              <div className="exp-point">
                <span className="dot"></span>
                Developed REST APIs using Node.js and Express
              </div>
              <div className="exp-point">
                <span className="dot"></span>
                Created responsive UI components using React
              </div>
              <div className="exp-point">
                <span className="dot"></span>
                Worked with MongoDB for database design and queries
              </div>
            </div>

            <div className="exp-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>REST API</span>
              <span>Git</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
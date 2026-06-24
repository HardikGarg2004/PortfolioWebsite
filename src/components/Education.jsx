import { useEffect, useRef, useState } from "react";
import "./Education.css";

function Education() {
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
      id="education"
      ref={sectionRef}
      className={"education" + (visible ? " show" : "")}
    >
      <p className="section-tag">— My Journey</p>
      <h2>Education</h2>
      <p className="section-sub">My academic background and qualifications</p>

      <div className="education-timeline">

        {/* Card 1 */}
        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div className="edu-content">
            <div className="edu-header">
              <div>
                <h3>Bachelor of Technology (B.Tech)</h3>
                <p className="edu-college">Computer Science & Engineering — Shri Ram Group College, Muzafarnagar</p>
              </div>
              <span className="edu-badge completed">Completed</span>
            </div>
            <p className="edu-year">📅 2022 – 2026</p>
            <p className="edu-desc">
              Completed My B.Tech in Computer Science & Engineering with
              strong interest in Full Stack Development. Gaining solid knowledge
              of Data Structures, Algorithms, DBMS, OS and MERN Stack.
            </p>
            <div className="edu-tags">
              <span>MERN Stack</span>
              <span>DSA</span>
              <span>DBMS</span>
              <span>OS</span>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="timeline-connector"></div>

        {/* Card 2 */}
        <div className="edu-card">
          <div className="edu-icon">📚</div>
          <div className="edu-content">
            <div className="edu-header">
              <div>
                <h3>Higher Secondary (12th)</h3>
                <p className="edu-college">Lala IndraPrakash Janta Inter College</p>
              </div>
              <span className="edu-badge completed">Completed</span>
            </div>
            <p className="edu-year">📅 Passed in 2022</p>
            <p className="edu-desc">
              Completed higher secondary education with PCM stream,
              building strong analytical and problem-solving foundation.
            </p>
            <div className="edu-tags">
              <span>Physics</span>
              <span>Chemistry</span>
              <span>Mathematics</span>
            </div>
          </div>
        </div>


         {/* Connector */}
        <div className="timeline-connector"></div>

        {/* Card 2 */}
        <div className="edu-card">
          <div className="edu-icon">📚</div>
          <div className="edu-content">
            <div className="edu-header">
              <div>
                <h3>Higher Secondary (10th)</h3>
                <p className="edu-college">Lala IndraPrakash Janta Inter College</p>
              </div>
              <span className="edu-badge completed">Completed</span>
            </div>
            <p className="edu-year">📅 Passed in 2020</p>
            <p className="edu-desc">
              Completed higher secondary education with PCM stream,
              building strong analytical and problem-solving foundation.
            </p>
            <div className="edu-tags">
              <span>Maths</span>
              <span>Science</span>
              <span>English</span>
            </div>
          </div>

      </div>
         </div>
    </section>
  );
}

export default Education;
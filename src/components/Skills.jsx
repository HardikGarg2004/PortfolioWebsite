import { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { SiCplusplus, SiJavascript, SiReact, SiHtml5, SiCss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiVscodium } from "react-icons/si";
import { FaJava, FaDatabase, FaServer, FaCode } from "react-icons/fa";

const skills = [
  {
    title: "Programming Languages",
    icon: "💻",
    items: [
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    items: [
      { name: "React.js", icon: <SiReact color="#61DAFB" /> },
      { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
     { name: "CSS3", icon: <SiCss color="#1572B6" /> },
      { name: "Responsive Design", icon: <FaCode color="#38bdf8" /> },
    ]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    items: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "REST APIs", icon: <FaServer color="#38bdf8" /> },
    ]
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "SQL Queries", icon: <FaDatabase color="#38bdf8" /> },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    items: [
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
      { name: "VS Code", icon: <SiVscodium color="#007ACC" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    ]
  },
  {
    title: "CS Fundamentals",
    icon: "📚",
    items: [
      { name: "DSA", icon: <FaCode color="#38bdf8" /> },
      { name: "OOP", icon: <FaCode color="#a78bfa" /> },
      { name: "DBMS", icon: <FaDatabase color="#34d399" /> },
      { name: "Operating Systems", icon: <FaServer color="#f472b6" /> },
    ]
  }
];

function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={"skills" + (visible ? " show" : "")}
    >
      <p className="section-tag">— What I Know</p>
      <h2>Skills</h2>
      <p className="section-sub">Technologies and tools I work with</p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            className="skill-card"
            key={i}
            style={{ transitionDelay: i * 0.1 + "s" }}
          >
            <div className="skill-card-header">
              <span className="skill-category-icon">{skill.icon}</span>
              <h3>{skill.title}</h3>
            </div>

            <div className="skill-items">
              {skill.items.map((item, idx) => (
                <div className="skill-item" key={idx}>
                  <span className="skill-icon">{item.icon}</span>
                  <span className="skill-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
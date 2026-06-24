import { useEffect, useRef, useState } from "react";
import "./Projects.css";

function Projects() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);

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

  const projects = [
    {
      title: "AI SaaS Exam Preparation Platform ",
      desc: "AI-powered exam preparation platform with personalized learning, mock tests, analytics, and smart study recommendations.",
      problem: "Students lack personalized guidance and efficient study plans, leading to ineffective exam preparation and lower performance.",
      solution: "Personalized study plans, AI-based recommendations, and mock tests for effective exam preparation.",
      tech: ["HTML", "CSS", "JavaScript","React","Node.js","Express.js", "MongoDB", "OpenAI/Gemini API"],
      github: "https://github.com/HardikGarg2004/",
      img:require("../assets/simon.jpg")
    },
    {
      title: "Wanderlust -Travel & Stay Booking Platform ",
      desc: "Travel and stay booking platform for discovering, comparing, and reserving hotels, homestays, and travel experiences.",
      problem: "Travelers face difficulty finding affordable, reliable, and convenient booking options in one place.",
      solution: "Enables users to discover, compare, and book stays with an easy-to-use interface.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
      github: "https://github.com/HardikGarg2004/",
      img: require("../assets/Airbnb.png")
    },
    {
      title: "Zerodha Clone- A Full Stack Trading Platform ",
      desc: "A full-stack trading platform inspired by Zerodha, enabling users to track markets, manage portfolios, and execute trades through an intuitive interface.",
      problem: "Many trading platforms are complex and difficult for beginners, creating challenges in managing investments and accessing market data efficiently.",
      solution: "Built a full-stack trading platform with real-time stock tracking, portfolio management, and secure authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB" , "JWT", "Git", "GitHub"],
      github: "https://github.com/your-github/mern-portfolio",
      img: require("../assets/ZerodhaProject.png")
    },
  ];

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".project-card");
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  const scrollTo = (i) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".project-card");
    if (cards[i]) {
      const cardCenter = cards[i].offsetLeft + cards[i].offsetWidth / 2;
      container.scrollTo({
        left: cardCenter - container.offsetWidth / 2,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={"projects" + (visible ? " show" : "")}
    >
      <p className="section-tag">— What I've Built</p>
      <h2>Projects</h2>
      <p className="section-sub">Some of my recent work</p>

      {/* Scroll Container */}
      <div className="projects-scroll" ref={scrollRef} onScroll={handleScroll}>
        {projects.map((p, i) => (
          <div
            className={"project-card" + (activeIndex === i ? " active" : "")}
            key={i}
            onClick={() => scrollTo(i)}
          >
            {/* Image */}
            <div className="project-img">
              {p.img
                ? <img src={p.img} alt={p.title} />
                : <div className="project-img-placeholder">
                    <span>🖥️</span>
                    <p>Screenshot Coming Soon</p>
                  </div>
              }
            </div>

            {/* Content */}
            <div className="project-content">
              <h3>{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-detail">
                <p><span className="label">Problem:</span> {p.problem}</p>
                <p><span className="label">Solution:</span> {p.solution}</p>
              </div>

              <div className="tech">
                {p.tech.map((t, idx) => <span key={idx}>{t}</span>)}
              </div>

              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  🔗 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="project-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={"dot-btn" + (activeIndex === i ? " active" : "")}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;
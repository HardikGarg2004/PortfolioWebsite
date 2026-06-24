import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest(".navbar")) setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>

      <div className="nav-left-section">
        <div className="logo">
          <span className="logo-first">Hardik</span>
          <span className="logo-last"> Garg</span>
        </div>
      </div>

      <div className={"nav-right" + (open ? " open" : "")}>
        <a href="#home" className={"nav-item" + (active === "home" ? " active" : "")} onClick={() => setOpen(false)}>Home</a>
        <a href="#about" className={"nav-item" + (active === "about" ? " active" : "")} onClick={() => setOpen(false)}>About</a>
        <a href="#education" className={"nav-item" + (active === "education" ? " active" : "")} onClick={() => setOpen(false)}>Education</a>
        <a href="#experience" className={"nav-item" + (active === "experience" ? " active" : "")} onClick={() => setOpen(false)}>Experience</a>
        <a href="#skills" className={"nav-item" + (active === "skills" ? " active" : "")} onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" className={"nav-item" + (active === "projects" ? " active" : "")} onClick={() => setOpen(false)}>Projects</a>
        <a href="#certificates" className={"nav-item" + (active === "certificates" ? " active" : "")} onClick={() => setOpen(false)}>Certificates</a>
        <a href="#contact" className={"nav-item" + (active === "contact" ? " active" : "")} onClick={() => setOpen(false)}>Contact</a>
        <a href="/HardikGargResume.pdf" className="resume-btn" target="_blank" rel="noreferrer">Resume</a>
      </div>

      <div
        className={"hamburger" + (open ? " active" : "")}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}

export default Navbar;
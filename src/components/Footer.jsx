import { useEffect, useRef, useState } from "react";
import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={"footer" + (visible ? " show" : "")}
    >
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3>
            <span className="footer-logo-first">Hardik</span>
            <span className="footer-logo-last"> Garg</span>
          </h3>
          <p className="footer-role">MERN Stack Developer</p>
          <p className="footer-tagline">Building modern web experiences with clean code.</p>
          <div className="footer-status">
            <span className="status-dot"></span> Open to Opportunities
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <p className="footer-heading">Quick Links</p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <p className="footer-heading">Connect</p>
          <a href="https://github.com/HardikGarg2004" target="_blank" rel="noreferrer">
            🐙 GitHub
          </a>
          <a href="https://www.linkedin.com/in/Hardik-garg251305" target="_blank" rel="noreferrer">
            💼 LinkedIn
          </a>
          <a href="mailto:hardikkumargarg24@gmail.com">
            ✉️ Email
          </a>
          <a href="/HardikGargResume.pdf" target="_blank" rel="noreferrer">
            📄 Resume
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hardik Garg. All rights reserved.</p>
        <p className="footer-credit">Made with ❤️ using React</p>
      </div>
    </footer>
  );
}

export default Footer;
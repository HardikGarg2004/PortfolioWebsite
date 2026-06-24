import { useEffect, useRef, useState } from "react";
import contactImg from "../assets/profile.jpg";
import "./Contact.css";

function Contact({ profile }) {
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

  if (!profile) return null;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={"contact" + (visible ? " show" : "")}
    >
      <p className="section-tag">— Get In Touch</p>
      <h2>Contact Me</h2>
      <p className="section-sub">Have a project in mind? Let's work together!</p>

      <div className="contact-wrapper">

        {/* TOP - PHOTO + INFO */}
        <div className="contact-top">

          {/* Photo Card */}
          <div className="contact-photo-card">
            <div className="contact-photo-ring">
              <img src={contactImg} alt="Pushkar Dixit" />
            </div>
            <div className="contact-photo-glow"></div>
            <h3>Hardik Garg</h3>
            <p className="contact-role">MERN Stack Developer</p>
            <div className="contact-status">
              <span className="status-dot"></span> Available for Work
            </div>
          </div>

          {/* Info Cards */}
          <div className="contact-info-cards">
            <div className="contact-detail-item">
              <span className="detail-icon">📧</span>
              <div>
                <p className="detail-label">Email</p>
                <p className="detail-value">hardikkumargarg24@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="detail-icon">📱</span>
              <div>
                <p className="detail-label">Phone</p>
                <p className="detail-value">+91-9897226404</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <p className="detail-label">Location</p>
                <p className="detail-value">UP, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <a href="https://github.com/HardikGarg2004" target="_blank" rel="noreferrer" className="social-btn github">
                🐙 GitHub
              </a>
              <a href="https://www.linkedin.com/in/hardik-garg251305" target="_blank" rel="noreferrer" className="social-btn linkedin">
                💼 LinkedIn
              </a>
              <a href={"mailto:" + profile.email} className="social-btn email">
                ✉️ Email
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM - FORM */}
        <div className="contact-form-wrapper">
          <h3 className="form-title">Send Me a Message</h3>
          <form
            className="contact-form"
            action="https://formsubmit.co/hardikkumargarg24@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Message 🚀" />
            <input type="hidden" name="_template" value="table" />
            {/* <input type="hidden" name="_next" value="https://pushkardixit-portfolio.vercel.app/" /> */}
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <textarea name="message" placeholder="Your Message..." required />
            <button type="submit">Send Message 🚀</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
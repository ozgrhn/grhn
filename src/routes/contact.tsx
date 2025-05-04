import { createFileRoute } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="content">
      <div className="contact-page">
        <h1>Get in Touch</h1>
        <p>👇Feel free to reach out through any platform below 👇</p>

        <div className="social-links">
          <a
            href="https://www.instagram.com/grhnozturk"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/grhnozturk"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ozgrhn"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <span>GitHub</span>
          </a>
        </div>

        <form
          action="https://formsubmit.co/grhn@grhn.dev"
          method="POST"
          className="contact-form"
        >
          <input type="text" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

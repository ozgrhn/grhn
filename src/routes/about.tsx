import { createFileRoute } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="content">
      <div className="about space-y-4">
        <p>Hi! I'm Gürhan. a curious and fun person born on March 6th, 1993.</p>
        <p>
          Since I was 7 years old, I've been passionate about computers,
          especially hardware and games.
        </p>
        <p>
          At the age of 18, I started working at a local computer company,
          mainly focusing on maintenance and repair. I supported many people at
          Level 3 and continued in this field until 2023.
        </p>
        <p>
          Over the years, I explored coding from time to time with small
          exercises and personal projects. In 2025, I received formal Python
          training, which reignited my passion for software development.
        </p>
        <p>
          I'm currently focused on modern web technologies like{" "}
          <span className="text-sky-400 font-semibold">React</span> and{" "}
          <span className="text-purple-400 font-semibold">Django</span>, and I'm
          working on building AI systems that combine creativity with empathy.
        </p>
        <p>
          <strong>Technologies I use:</strong>
          <br />
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind
            </li>
            <li>
              <strong>Backend:</strong> Python, Django
            </li>
            <li>
              <strong>Tools:</strong> Git, VS Code, Figma
            </li>
          </ul>
        </p>
        <div className="skill">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <div>HTML</div>
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <div>CSS</div>
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faJs} size="2x" />
            <div>JavaScript</div>
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faReact} size="2x" />
            <div>React</div>
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faPython} size="2x" />
            <div>Python</div>
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faGitAlt} size="2x" />
            <div>Git</div>
          </div>
          <div className="skill-icon">
            <FontAwesomeIcon icon={faCode} size="2x" />
            <div>Django</div>
          </div>
        </div>

        <p>
          My goal is to become a well-known developer and build tools that make
          a difference. I’m learning new things every day and enjoying the
          journey.
        </p>
        <p>
          <strong>Stay tuned, and feel free to follow my progress!</strong>
        </p>
      </div>
    </div>
  );
}

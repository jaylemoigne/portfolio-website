import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

function Icons() {
  return (
    <div className="flex flex-row">
      <a
        href="https://www.linkedin.com/in/jay-le-moigne-42a71a259/"
        target="_blank"
      >
        <FaLinkedin className="linkedIcon" />
      </a>

      <a href="https://github.com/jaylemoigne" target="_blank">
        <FaGithub className="gitIcon" />
      </a>

      <a href="https://codepen.io/jaylemoigne" target="_blank">
        <FaCodepen className="codepenIcon" />
      </a>
    </div>
  );
}

export default Icons;

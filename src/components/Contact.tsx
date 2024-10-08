import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface ContactDetail {
  email: string;
  linkedIn: string;
  gitHub: string;
}

const Contact = () => {
  const contactDetails: ContactDetail[] = [
    {
      email: "jaylemoigne.career@gmail.com",
      linkedIn: "https://www.linkedin.com/in/jay-le-moigne-42a71a259/",
      gitHub: "https://github.com/jaylemoigne",
    },
  ];

  return (
    <div
      id="contact"
      className="contact-wrapper h-auto section-styling bg-neutral-400 pb-12"
    >
      <div className="custom-heading header text-neutral-700 mr-8 ml-8">
        <h3>Contact Me</h3>
      </div>
      <div className="contact-container flex-col mr-24 ml-24 text-neutral-400 ">
        {contactDetails.map((contactDetail, index) => (
          <div
            key={index}
            className="contact-content-top mb-4 flex flex-wrap gap-2"
          >
            <div className="font-semibold p-4 hover:bg-neutral-500 bg-neutral-600 rounded cursor-pointer ">
              Email:{" "}
              <div className="font-normal inline">{contactDetail.email}</div>
            </div>{" "}
            {/* Access the current item */}
            <div className="font-semibold p-4 font hover:bg-neutral-500 bg-neutral-600 rounded cursor-pointer">
              <a
                href={contactDetail.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal"
              >
                LinkedIn
              </a>
            </div>
            <div className="font-semibold p-4 hover:bg-neutral-500 bg-neutral-600 rounded cursor-pointer">
              <a
                href={contactDetail.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
        {contactDetails.map((contactDetail, index) => (
          <div
            key={index}
            className="contact-container-bottom flex flex-row flex-wrap gap-2 text-6xl text-neutral-700"
          >
            <a
              href={contactDetail.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal"
            >
              <FaLinkedin className="hover:text-neutral-600 text-neutral-700 cursor-pointer" />
            </a>
            <a
              href={contactDetail.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal"
            >
              <FaGithub className="hover:text-neutral-600 text-neutral-700 cursor-pointer" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

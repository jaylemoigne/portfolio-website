import React, { useState } from "react";
import Modal from "react-modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaLongArrowAltRight,
  FaPhp,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

// Required for accessibility
Modal.setAppElement("#root");

// Define the type for a skill
interface Skill {
  name: string;
  description: string;
  icon: React.ElementType; // Type for the icon component
  popupHeader: string;
  popupCaption: string;
  popupExperience: string;
  popupLevel: string;
  popupProjects: string;
  popupCertificate: string;
}

const SkillsCarousel = () => {
  const skills: Skill[] = [
    {
      //HTML
      name: "HTML5",
      description:
        "A markup language used for structuring and presenting hypertext documents.",
      icon: FaHtml5,
      popupHeader: "HTML5",
      popupCaption:
        "I've been using HTML in various projects surrounding web development since attending the Isle of Wight College, 3 years ago. I've been able to refine my skills and become efficient and attuned with the language, I'm familiar with shortcuts whilst using VS Code, making my workflow go smoother. ",
      popupExperience: "Three Years",
      popupLevel: "Advanced",
      popupProjects: "Personal Website Projects - see projects section.",
      popupCertificate:
        "Pearson BTEC Level 3 National Extended Diploma in Creative Media (Computing)",
    },
    {
      //CSS
      name: "CSS",
      description:
        "A style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. ",
      icon: FaCss3Alt,
      popupHeader: "CSS",
      popupCaption:
        "I have developed advanced CSS skills over the past three years, mastering complex styling techniques and responsive design principles. This proficiency enables me to craft visually appealing and user-friendly interfaces.",
      popupExperience: "Three Years",
      popupLevel: "Advanced",
      popupProjects: "Personal Website Projects - see projects section.",
      popupCertificate:
        "Pearson BTEC Level 3 National Extended Diploma in Creative Media (Computing)",
    },
    {
      //TailwindCSS
      name: "TailwindCSS",
      description:
        "A styling framework used to style HTML or XML but in a shorter formatting compared to typical CSS.",
      icon: FaCss3Alt,
      popupHeader: "TailwindCSS",
      popupCaption:
        "With a year of advanced experience in Tailwind CSS, I have mastered utility-first design principles to rapidly build custom, responsive user interfaces. My expertise allows me to streamline development workflows and maintain consistent design patterns across projects.",
      popupExperience: "One Year",
      popupLevel: "Advanced",
      popupProjects: "D&D Utility App Prototype V2, Portfolio Website",
      popupCertificate: "",
    },
    {
      name: "JavaScript",
      description:
        "A scripting language that enables you to create dynamically updating content, control multimedia, animate images etc.",
      icon: IoLogoJavascript,
      popupHeader: "JavaScript",
      popupCaption:
        "With one year of intermediate experience in JavaScript, I am comfortable writing dynamic and interactive web functionalities. My skills include working with various libraries and frameworks to enhance user experience.",
      popupExperience: "One Year",
      popupLevel: "Intermediate",
      popupProjects: "D&D Utilty App Prototype V1",
      popupCertificate:
        "Programming Foundations: Fundamentals, Programming Foundations: Beyond the Fundamentals",
    },
    {
      name: "Java",
      description:
        "Java is a high-level, class-based, object-oriented programming language.",
      icon: FaJava,
      popupHeader: "Java",
      popupCaption:
        "Over the past year, my intermediate Java skills have been focused on developing smaller personal applications. I am adept at object-oriented programming and solving complex problems efficiently.",
      popupExperience: "One Year",
      popupLevel: "Intermediate",
      popupProjects: "Fantasy Potion Generator",
      popupCertificate:
        "Programming Foundations: Fundamentals, Programming Foundations: Beyond the Fundamentals",
    },
    {
      name: "React",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      icon: FaReact,
      popupHeader: "React",
      popupCaption:
        "My six months of intermediate experience with React have equipped me with the ability to build modern, single-page applications with reusable components. I am familiar with state management and component lifecycle methods.",
      popupExperience: "Six Months",
      popupLevel: "Intermediate",
      popupProjects: "D&D Utility App V2, Portfolio Website",
      popupCertificate: "",
    },
    {
      name: "TypeScript | JSX",
      description:
        "TypeScript is a free and open-source high-level programming language. It adds static typing with optional type annotations to JavaScript.",
      icon: SiTypescript,
      popupHeader: "TypeScript",
      popupCaption:
        "In the last six months, I have advanced my TypeScript skills, which has improved my ability to write type-safe code and reduce runtime errors. This experience enhances my development efficiency and code maintainability.",
      popupExperience: "Six Months",
      popupLevel: "Advanced",
      popupProjects: "D&D Utility App V2, Portfolio Website",
      popupCertificate: "",
    },
    {
      name: "Python",
      description:
        "Python is a high-level, general-purpose programming language. It supports multiple paradigms - structured, object-oriented and functional programming.",
      icon: FaPython,
      popupHeader: "Python",
      popupCaption:
        "With one year of intermediate Python experience, I have developed a strong grasp of programming fundamentals and data manipulation. My skills are applied in various tasks, from scripting to automation.",
      popupExperience: "One Year",
      popupLevel: "Intermediate",
      popupProjects: "Equation Solving - Mathematics for Computing",
      popupCertificate:
        "Programming Foundations: Fundamentals, Programming Foundations: Beyond the Fundamentals",
    },
    {
      name: "C# | .NET",
      description:
        "C# is a general-purpose programming language created by Microsoft. .NET Framework is a proprietary software framework developed by Microsoft that runs primarily on Microsoft Windows.",
      icon: "symbol",
      popupHeader: "C#",
      popupCaption:
        "Having completed a certificate regarding .NET and C#, I feel I've grasped the basics of this language and framework and am likely to pursue learning it in the future. My skills in this language are mostly programming fundamentals, alike to python.",
      popupExperience: "One Month",
      popupLevel: "Beginner",
      popupProjects: "N/A",
      popupCertificate: ".NET Fundamentals",
    },
    {
      name: "PHP | phpMyAdmin",
      description:
        "PHP is a general-purpose scripting language geared towards web development. phpMyAdmin is a PHP-based software that allows you to manage databases.",
      icon: FaPhp,
      popupHeader: "PHP | phpMyAdmin",
      popupCaption:
        "I had some experience with this during my second year of college, I developed a front & back-end website with it. This combined with my experience with databases in uni makes me confident I could revisit it if necessary.",
      popupExperience: "Three Months",
      popupLevel: "Beginner",
      popupProjects: "N/A",
      popupCertificate: "N/A",
    },
    {
      name: "GitHub",
      description:
        "GitHub is a platform that allows developers to store and manage their code. Opening issues, making pull requests etc.",
      icon: FaGithub,
      popupHeader: "GitHub",
      popupCaption:
        "My two months of beginner experience with GitHub have provided me with a solid understanding of version control and collaborative workflows. I am learning to manage code changes. I still have some way to go.",
      popupExperience: "Two Months",
      popupLevel: "Beginner",
      popupProjects: "N/A",
      popupCertificate: "",
    },
  ];

  // responsive breakpoints for react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1537 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
    },
  };

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null); // Ensure type Skill or null
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };

  return (
    <div className="carousel-wrapper pt-16 ml-8 mr-8 ">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        customTransition="all 0.5s ease"
        transitionDuration={500}
        focusOnSelect={true}
        centerMode={false}
        partialVisible={true}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="carousel-item text-neutral-300 p-4"
            style={{
              flexBasis: "100%",
            }}
          >
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <div className="lower-section">
              <div className="read-more-wrapper">
                <button
                  className="text-3xl bg-neutral-400 hover:bg-neutral-300 p-2 rounded-full text-stone-700 transition ease 0.3s"
                  onClick={() => openModal(skill)}
                >
                  <FaLongArrowAltRight />
                </button>
                <span className="read-more-text">Read More</span>
              </div>
              <div className="icon">
                <skill.icon className="text-5xl" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(28, 28, 28, 0.44)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            height: "26rem",
            backgroundColor: "rgb(229 229 229)",
            borderRadius: "8px",
            padding: "2rem",
            color: "rgb(38 38 38)",
          },
        }}
      >
        {selectedSkill && (
          <>
            <h3 className="font-semibold text-xl">
              {selectedSkill.popupHeader}
            </h3>
            <p className="mt-2 font-medium text-md">
              {selectedSkill.popupCaption}
            </p>
            <hr className="skill-hr" />
            <ul className="skill-list">
              <li>
                <div className="skill-bp">Level:</div>{" "}
                {selectedSkill.popupLevel}
              </li>
              <li>
                <div className="skill-bp">Experience:</div>{" "}
                {selectedSkill.popupExperience}
              </li>
              <li>
                <div className="skill-bp">Projects:</div>{" "}
                {selectedSkill.popupProjects}
              </li>
              <li>
                <div className="skill-bp">Certificates:</div>{" "}
                {selectedSkill.popupCertificate}
              </li>
            </ul>
            <button
              className="mt-4 px-4 py-2 w-full bg-neutral-500 hover:bg-neutral-400 rounded text-white"
              onClick={closeModal}
            >
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default SkillsCarousel;

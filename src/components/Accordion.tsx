import React, { useState, useRef, useEffect } from "react";
import "/src/stylesheets/About.css"; // Include your CSS for styling
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionProps> = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      setMaxHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isActive]);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        <span>{title}</span>
        <span className="accordion-icon">
          {isActive ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: maxHeight,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="accordion">
      <AccordionItem title="I'm Jay Le-Moigne, a Front-End Developer...">
        <p>
          I'm Jay Le-Moigne, a software engineer with a focus on front-end
          development. I specialize in HTML/CSS/JS, React using JSX, and
          Tailwind CSS, creating responsive and visually appealing websites. My
          work combines creativity with technical expertise to build seamless
          user interfaces and optimize web performance.
          <br />
          <br />
          I'm studying Bsc Software Engineering (Hons) at Bournemouth
          University. I'm extremely eager to learn when it comes to
          websites/apps etc, I like to learn a variety of skills for the sake of
          my own interest as well as to push myself.
          <br />
          <br />
          Personally, I love folk music, being in new places - I'd love to
          travel given the opportunity - and putting myself in new situations. A
          lot of the inspiration from my projects comes from my passion for D&D from
          when I was younger, so with the skills I have now, I like making tools
          that could prove helpful for new and inspired players.
        </p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

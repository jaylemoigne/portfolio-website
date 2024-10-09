import "./Icons";
import { Link } from "react-scroll";

// icons
import Icons from "./Icons";
import { FaLongArrowAltDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-auto w-full pb-72"
        style={{ backgroundImage: "url('./images/bg-image-current.jpg')" }}
      >
        <div className="flex justify-center sm:justify-between items-center p-4 text-white font-sans">
          <h3 className="navbar-heading text-xl lg:text-2xl font-semibold text-center hidden sm:block">
            JAY
          </h3>

          <div className="navbar-links flex space-x-4">
            <Link
              smooth={true}
              duration={650}
              className="hover:cursor-pointer"
              to="about"
            >
              About
            </Link>
            <Link
              smooth={true}
              duration={650}
              className="hover:cursor-pointer"
              to="skills"
            >
              Skills
            </Link>
            <Link
              smooth={true}
              duration={650}
              className="hover:cursor-pointer"
              to="education"
            >
              Education
            </Link>
            <Link
              smooth={true}
              duration={650}
              className="hover:cursor-pointer"
              to="experience"
            >
              Experience
            </Link>
            <Link
              smooth={true}
              duration={650}
              className="hover:cursor-pointer"
              to="projects"
            >
              Projects
            </Link>
            <Link
              smooth={true}
              duration={650}
              className="hover:cursor-pointer"
              to="contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="content-wrapper w-full flex flex-wrap justify-center lg:justify-between items-center">
          <div className="title-left w-full text-center lg:w-1/2 lg:text-left pl-8 pr-4 lg:pl-20 mb-8 lg:mb-0">
            <div className="title-cptn-above text-lg font-sans text-gray-200">
              HELLO ! I'm...
            </div>
            <div className="title text-gray-200">
              <p className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.62rem]">
                FRONT-END
              </p>
              <p className="ml-4 lg:ml-8 text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.62rem]">
                DEVELOPER,
              </p>
              <p className="ml-8 lg:ml-16 text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-[6.62rem]">
                JAY LE-MOIGNE
              </p>
              <p className="title-cptn text-lg font-sans mt-4 lg:ml-20">
                Software Engineering Student at Bournemouth University
              </p>
            </div>
          </div>

          <div className="side-text-container border-l-gray-200 border-l-0 lg:border-l-4 p-6 lg:p-10 text-gray-200 text-center flex flex-col justify-center items-center h-72 w-full lg:w-1/2">
            <div className="side-text">
              Crafting Dynamic Web Experiences with React, using JSX, and
              Tailwind CSS to ensure a Cutting-Edge Design.
            </div>
            <div className="side-icons p-4">
              <Icons />
            </div>
            <Link
              smooth={true}
              duration={650}
              className="inline-block font-semibold hover:cursor-pointer"
              to="about"
            >
              Learn More <FaLongArrowAltDown className="inline-block mb-1" />
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-48 bg-no-repeat bg-bottom"
          style={{
            backgroundImage: 'url("./images/layered-peaks.svg")',
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;

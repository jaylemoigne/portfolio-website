import "/src/stylesheets/About.css";
import Accordion from "./Accordion";
// import DownloadButtons from "./DownloadButtons";

const About = () => {
  return (
    <div className="relative">
      <div
        className="sct-wrapper h-max w-full text-[#D3D3D3] bg-[#3E4A3D] flex flex-col items-center"
        id="about"
      >
        <h3 className="text-center title text-6xl flex justify-start items-center flex-col gap-4 pb-12 mt-8">
          About Me
        </h3>
        <div className="container flex justify-center items-center w-full">
          <div className="abt-wrapper flex flex-row flex-wrap justify-center items-center gap-8 mb-64">
            <div className="img-side h-96 w-[20rem] rounded">
              <img
                src="images/portrait.jpg"
                alt="Photo"
                className="h-96 w-[20rem] rounded"
              />
            </div>
            <div className="text-side h-96 w-[24rem] md:w-[32rem]">
              <p className="cpt text-md">Who am I?</p>
              <Accordion />
              <hr className="mt-6 mb-6" />
              <div className="btn-section flex flex-row gap-2">
                {/* <DownloadButtons /> */}
                <p className="p-2 italic text-sm">
                  "The best error message is the one that never shows up." -
                  Thomas Fuchs
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SVG at the bottom of the About section */}
        <div className="sct-svg-container">
          <div className="sct-svg-background"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

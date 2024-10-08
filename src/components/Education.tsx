import Timeline from "./Timeline";
import Certificates from "./Certificates";
import Units from "./Units";

// Left aligned heading Left aligned: Timeline format for college / uni,
// spanning the year starting to end. Right aligned: Certificate subsection,
// list certifications
// End Section

const Education = () => {
  return (
    <div
      id="education"
      className="education-wrapper section-styling bg-slate-800"
    >
      <div className="custom-heading-v2 header text-[#FFF]">
        <h3>Education</h3>
      </div>
      <Timeline />
      <Units />
      <Certificates />
      <div className="edu-svg-container">
        <div className="edu-svg-background"></div>
      </div>
    </div>
  );
};

export default Education;

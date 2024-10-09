import SkillsCarousel from "./SkillsCarousel";
import Blobs from "./Blobs";

const Skills = () => {
  return (
    <div>
      <div className="skills-wrapper bg-neutral-400" id="skills">
        <div className="custom-heading header text-neutral-700">
          <h3>Skills</h3>
        </div>
        <SkillsCarousel></SkillsCarousel>
        <Blobs />
        <div className="skills-svg-container">
          <div className="skills-svg-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

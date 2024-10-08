import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiGraduateCap } from "react-icons/gi";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(51 65 85)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(51 65 85)" }}
          date="Sep 2021 - June 2023"
          iconStyle={{ background: "rgb(51 65 85)", color: "#fff" }}
          icon={<GiGraduateCap />}
        >
          <h3>Isle of Wight College</h3>
          <h4 className="vertical-timeline-element-subtitle italic">
            Pearson BTEC Level 3 National Extended Diploma in Creative Media
            (Computing)
          </h4>
          <p>
            A two year course, with the first year covering primarily app
            development using Next.js to make some basic apps, and the
            fundamentals of web dev using HTML, CSS in VS Code.
          </p>
          <p className="indent-3">
            As well as 3D Modelling in AutoDesk 3ds Max, modelling to-scale
            objects and developing documentation for the process.
          </p>
          <br />
          <p>
            Second year focused on furthering front-end skills like
            responsiveness and design choice, as well as integrating a back-end
            like phpMyAdmin, connected with PHP.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(51 65 85)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(51 65 85)" }}
          date="Sep 2023 - June 2027"
          iconStyle={{ background: "rgb(51 65 85)", color: "#fff" }}
          icon={<GiGraduateCap />}
        >
          <h3>Bournemouth University</h3>
          <h4 className="vertical-timeline-element-subtitle italic">
            BSc (Hons) Software Engineering (G602)
          </h4>
          <p>
            Four year course, with one being placement year, currently in second
            year, with a focus on Software Engineering.
          </p>
          <p className="">
            First year, semester one focused on Mathematics, Programming and
            Computer Fundamentals. Second semester focused on Databases and
            Computing in Business (CiB)
          </p>
          <p className="italic">Read more below.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;

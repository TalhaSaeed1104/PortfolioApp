import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="experience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#138781">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent", color: "white" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="Nov, 2022 - Nov, 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Gamica Cloud, Faisalabad
              </h4>
              <p className="para-g">
                ✔ Developed and Maintain Web Applications using HTML, CSS,
                JavaScript, and ReactJs. <br />
                ✔ Work on Different Project including frontend and backend
                technologies at basic level. <br />✔ Colaborated with other
                developers on a daily basic to solve complex problems.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

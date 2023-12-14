import React from "react";
import "./Tech.css";
import { TechstackList } from "../../utills/TechstackList";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { IoArrowRedoSharp } from "react-icons/io5";

const Tech = () => {
  return (
    <>
      <div className="container techstack" id="teckstack">
        <Zoom right cascade>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            <IoArrowRedoSharp size={25} color="#138781" className="arrow-svg" />
            including programming languages, frameworks, databases, frontend and
            backend tools, and API's
          </p>
        </Zoom>
        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <Bounce top cascade>
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </Bounce>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;

// // <div key={tech._id} className="col-md-3">
// <div className="card m-2">
// <div className="card-content">
//   <div className="card-body">
//     <div className="media d-flex justify-content-center">
//       <div className="align-self-center">
//         <tech.icon className="tech-icon" />
//       </div>
//       <div className="media-body">
//         <h5>{tech.name}</h5>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// </div>;

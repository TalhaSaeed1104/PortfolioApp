import React from "react";
import "./Project.css";
import Project1_img from "../../assets/img/project1.jpg";
import { IoArrowRedoSharp } from "react-icons/io5";

const Project = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          <IoArrowRedoSharp size={25} color="#138781" className="arrow-svg" />
          Here are my top 3 recent projects with live links and source code.
        </p>
        <div className="row mobile-card" id="ads">
          <div className="col-md-4 ">
            <div className="card rounded">
              <div className="card-iamge">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1_img} alt="Project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">ExpressJs</span>
                <span className="card-detail-badge">NodeJs</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">YoziShop Ecomerace Website</h5>
                </div>
                <a href="#" className="add-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-iamge">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1_img} alt="Project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">ExpressJs</span>
                <span className="card-detail-badge">NodeJs</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">YoziShop Ecomerace Website</h5>
                </div>
                <a href="#" className="add-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-iamge">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1_img} alt="Project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">ExpressJs</span>
                <span className="card-detail-badge">NodeJs</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">YoziShop Ecomerace Website</h5>
                </div>
                <a href="#" className="add-btn">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

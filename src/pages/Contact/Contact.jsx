import React, { useRef } from "react";
import "./Contact.css";
import Contact_Us from "../../assets/img/contact-img.png";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

// import EmailJs
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// Email Js Account Data

// 1.   Service ID
//  service_x0jkasm
// 2.   Template Id
// template_wd3y2f4
// 3. Public Key
// 7euItxm3iY0z7jI9k

const Contact = () => {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_x0jkasm",
        // "YOUR_TEMPLATE_ID",
        "template_wd3y2f4",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "7euItxm3iY0z7jI9k"
      )
      .then(toast.success("Message Send Scuuessfully"));
    e.target.reset();
  };
  return (
    <>
      <div className="contact-tab" id="contact">
        <div className="card card0 border-0">
          <div className="row card-cont">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={Contact_Us} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="card-control col-lg-6 col-md-6">
              <div className="card2 d-flex border-0 px-4 py-4">
                <div className="row">
                  <div className="row">
                    <h6 className="icons">
                      Contact with
                      <BsLinkedin color="blue" size={25} className="ms-2" />
                      <BsGithub color="black" size={25} className="ms-2" />
                      <BsFacebook color="blue" size={25} className="ms-2" />
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="from_name"
                        className="mb-3"
                        ref={name}
                        placeholder="Enter Your Name......"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="from_email"
                        className="mb-3"
                        ref={email}
                        placeholder="Enter Your Email......"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="message"
                        className="mb-3"
                        ref={message}
                        placeholder="Enter Your Message......"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

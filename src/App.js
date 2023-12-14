import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import Tech from "./pages/TechStack/Tech";
import WorkExp from "./pages/WorkExp/WorkExp";
import { useTheme } from "./contest/ContextTheme";
import MobileNav from "./components/MobileNav/MobileNav";
// import Pic
import profile_img from "./assets/img/profile.jpg";

// Toast Container

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Tech />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">
            Made By Talha Saeed
            {/* <img src={profile_img} alt="not open" /> */}
            &copy; 2023
          </h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#e0b50f"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;

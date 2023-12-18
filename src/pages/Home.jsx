import { Link } from "react-router-dom";
import ReactTyped from "react-typed";
import "../styles/Home.css";
// import SideLinks from "../components/SideLinks";

function Home() {
  return (
    <div className="home">
      {/* <SideLinks/> */}
      <div className="hero" 
        data-aos="fade-up" data-aos-duration="3000" data-aos-once="true"
        >
        <h1 className="heroHead">
          Welcome, I'm <span className="hSpan">Chima</span>. <br />
          I'm a{" "}
          <ReactTyped className="fSpan"
            strings={[
              "Front-End Developer",
              "Software Engineer", 
              // "UI / UX Designer",
            ]}
            typeSpeed={80}
            loop
            backSpeed={30}
            showCursor={true}
          />
        </h1>
        <Link to="/about">
          <button className="heroBut">About Me</button>
        </Link>
      </div>
     
    </div> 
    
  );
}

export default Home;

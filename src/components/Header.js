import { TypeAnimation } from "react-type-animation";
import logo from "../assets/Untitled1.png";
import image from "../assets/image.JPG";

const Header = () => {
  return (
    <div class="container">
      {/* Nav Bar */}
      <div class="navbar">
        <div class="logo-container">
          <img src={logo} class="logo" alt="logo" />
          <div class="logo-text">ohid</div>
        </div>

        <div class="nav-items">
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div class="hero-section">
        <div class="faded-text">Tohid Khan</div>

        <div class="hero-section-left">
          <div class="hero-section-heading">Hi! Tohid Khan</div>

          <div class="hero-section-heading hero-section-sub-heading">
            <span className=" whitespace-nowrap">I am a </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Web Developer",
                1000,
                "UI-UX Designer",
                1000,
                "Backend Developer",
                1000,
                "Coder",
                1000,
              ]}
              repeat={Infinity}
              cursor={true}
              speed={1}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
            />
          </div>

          <div class="hero-section-description">
            I’m a software developer and here is my portfolio website. Here
            you’ll learn about my journey as a software developer.
          </div>

          <div class="btn-pink" id="btn">
            <a href="https://wa.me/916367097548">Hire me</a>
          </div>
        </div>

        <div class="hero-section-right">
          <div class="absolute icons icon-dots">
            <img src="../Images/userAsset/dots.png" alt="" />
          </div>
          <div class="absolute icons icon-cube">
            <img src="../Images/userAsset/cube.png" alt="" />
          </div>
          <div class="absolute icons icon-circle">
            <img src="../Images/userAsset/circle.png" alt="" />
          </div>
          <div class="absolute icons icon-zigzag">
            <img src="../Images/userAsset/zigzags.png" alt="" />
          </div>
          <div class="absolute icons icon-plus">
            <img src="../Images/userAsset/plus.png" alt="" />
          </div>
          <div class="user-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

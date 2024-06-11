import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiVercel,
  SiReact,
  SiGithub,
  SiBootstrap,
  SiNodemon,
} from "react-icons/si";
import { PiLinkThin } from "react-icons/pi";

const Projects = () => {
  return (
    <div class="project-section" id="projects">
      <h2 class="page-header">Projects</h2>

      <div class="project-container">
        <div class="project-card" id="project1">
          <div class="project-number project-number-right">01</div>
          <div class="project-content project-content-left">
            <div class="project-skills-container">
              <SiHtml5 class="project-skill" />
              <SiCss3 class="project-skill" />
              <SiJavascript class="project-skill" />
              <SiExpress class="project-skill" />
              <SiTailwindcss class="project-skill" />
              <SiNodedotjs class="project-skill" />
              <SiMongodb class="project-skill" />
              <SiRedux class="project-skill" />
              <SiVercel class="project-skill" />
              <SiMongoose class="project-skill" />
            </div>

            <h2 class="project-heading">Tint & Orange</h2>

            <p class="project-subHeading">
              Its is a car modification copany which provide you sheets to
              protect your car from scratch
            </p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">Read More</button>
              <a href="https://github.com/tohidkhan2464/studynotion">
                <SiGithub class="link" />
              </a>
              <a href="https://studynotion-drab.vercel.app/">
                <PiLinkThin class="link" />
              </a>
            </div>
          </div>
        </div>

        <div class="project-card" id="project2">
          <div class="project-number project-number-left">02</div>
          <div class="project-content project-content-right">
            <div class="project-skills-container">
              <SiNodedotjs class="project-skill" />
              <SiTailwindcss class="project-skill" />
              <SiRedux class="project-skill" />
              <SiCss3 class="project-skill" />
              <SiJavascript class="project-skill" />
              <SiReact class="project-skill" />
              <SiHtml5 class="project-skill" />
            </div>
            <h2 class="project-heading">Breaking Copyrights</h2>
            <p class="project-sub-heading">
              A platform to download copyrights free youtube music
            </p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">Read More</button>
              <a href="https://github.com/tohidkhan2464/Razorpay_Clone">
                <SiGithub class="link" />
              </a>
              <a href="https://razorpay-clone-henna.vercel.app/">
                <PiLinkThin class="link" />
              </a>
            </div>
          </div>
        </div>

        <div class="project-card" id="project3">
          <div class="project-number project-number-right">03</div>
          <div class="project-content project-content-left">
            <div class="project-skills-container">
              <SiBootstrap class="project-skill" />
              <SiNodemon class="project-skill" />
              <SiExpress class="project-skill" />
              <SiHtml5 class="project-skill" />
              <SiMongoose class="project-skill" />
              <SiMongodb class="project-skill" />
              <SiRedux class="project-skill" />
              <SiReact class="project-skill" />
              <SiNodedotjs class="project-skill" />
            </div>

            <h2 class="project-heading">Isha Tattva</h2>
            <p class="project-sub-heading">
              A Website for interior designer to showcase her works and samples
            </p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">Read More</button>
              <a href="https://github.com/tohidkhan2464/shopping-cart">
                <SiGithub class="link" />
              </a>
              <a href="https://shopping-cart-seven-blue.vercel.app/">
                <PiLinkThin class="link" />
              </a>
            </div>
          </div>
        </div>

        <div class="project-card" id="project4">
          <div class="project-number project-number-left">04</div>
          <div class="project-content project-content-right">
            <div class="project-skills-container">
              <SiTailwindcss class="project-skill" />
              <SiReact class="project-skill" />
              <SiVercel class="project-skill" />
            </div>
            <h2 class="project-heading">Granit</h2>
            <p class="project-sub-heading">
              A architectural website to plan your building or home (Hebrew
              Language)
            </p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">Read More</button>
              <a href="https://github.com/tohidkhan2464/blog-website">
                <SiGithub class="link" />
              </a>
              <a href="https://blog-website-inky.vercel.app/">
                <PiLinkThin class="link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

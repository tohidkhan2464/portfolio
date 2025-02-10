import { Icon } from "@iconify/react";

const Projects = () => {
  return (
    <div class="project-section" id="projects">
      <h2 class="page-header">Projects</h2>

      <div class="project-container">
        <div class="project-card" id="project1">
          <div class="project-number project-number-right">01</div>
          <div class="project-content project-content-left">
            <div class="project-skills-container">
              <Icon icon="devicon:html5" class="project-skill" />
              <Icon icon="skill-icons:css" class="project-skill" />
              <Icon icon="skill-icons:javascript" class="project-skill" />
              <Icon icon="devicon:tailwindcss" class="project-skill" />
              <Icon icon="devicon:figma" class="project-skill" />
              <Icon icon="devicon:nodejs-wordmark" class="project-skill" />
              <Icon icon="devicon:mongodb" class="project-skill" />
              <Icon icon="devicon:redux" class="project-skill" />
              <Icon icon="devicon:vercel" class="project-skill" />
              <Icon icon="devicon:mongoose" class="project-skill" />
            </div>

            <h2 class="project-heading">StudyNotion</h2>

            <p class="project-sub-heading">
              Its is a Edtech platoform where users either can sell their
              created courses or purchase the courses for learning.
            </p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">
                <a href="https://github.com/tohidkhan2464/studynotion">
                  Read More
                </a>
              </button>
              <a href="https://github.com/tohidkhan2464/studynotion">
                <Icon icon="devicon:github" class="link" />
              </a>
              <a href="https://studynotion-drab.vercel.app/">
                <Icon icon="twemoji:link" class="link" />
              </a>
            </div>
          </div>
        </div>

        <div class="project-card" id="project2">
          <div class="project-number project-number-left">02</div>
          <div class="project-content project-content-right">
            <div class="project-skills-container">
              <Icon icon="devicon:nodejs-wordmark" class="project-skill" />
              <Icon icon="devicon:tailwindcss" class="project-skill" />
              <Icon icon="devicon:redux" class="project-skill" />
              <Icon icon="skill-icons:css" class="project-skill" />
              <Icon icon="skill-icons:javascript" class="project-skill" />
              <Icon icon="devicon:react-wordmark" class="project-skill" />
              <Icon icon="devicon:html5" class="project-skill" />
            </div>
            <h2 class="project-heading">Razorpay Landing Page</h2>
            <p class="project-sub-heading">
              A simple razorpay landing page clone using tailwindcss.
            </p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">
                <a href="https://github.com/tohidkhan2464/Razorpay_Clone">
                  Read More
                </a>
              </button>
              <a href="https://github.com/tohidkhan2464/Razorpay_Clone">
                <Icon icon="devicon:github" class="link" />
              </a>
              <a href="https://razorpay-clone-henna.vercel.app/">
                <Icon icon="twemoji:link" class="link" />
              </a>
            </div>
          </div>
        </div>

        <div class="project-card" id="project3">
          <div class="project-number project-number-right">03</div>
          <div class="project-content project-content-left">
            <div class="project-skills-container">
              <Icon icon="skill-icons:bootstrap" class="project-skill" />
              <Icon icon="devicon:nodemon" class="project-skill" />
              <Icon icon="devicon:express" class="project-skill" />
              <Icon icon="devicon:html5" class="project-skill" />
              <Icon icon="devicon:mongoose" class="project-skill" />
              <Icon icon="devicon:mongodb" class="project-skill" />
              <Icon icon="devicon:redux" class="project-skill" />
              <Icon icon="devicon:react-wordmark" class="project-skill" />
              <Icon icon="devicon:nodejs-wordmark" class="project-skill" />
            </div>

            <h2 class="project-heading">Shoppin Cart</h2>
            <p class="project-sub-heading">
              A basic website with the shopping cart functionality.
            </p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">
                <a href="https://github.com/tohidkhan2464/shopping-cart">
                  Read More
                </a>
              </button>
              <a href="https://github.com/tohidkhan2464/shopping-cart">
                <Icon icon="devicon:github" class="link" />
              </a>
              <a href="https://shopping-cart-seven-blue.vercel.app/">
                <Icon icon="twemoji:link" class="link" />
              </a>
            </div>
          </div>
        </div>

        <div class="project-card" id="project4">
          <div class="project-number project-number-left">04</div>
          <div class="project-content project-content-right">
            <div class="project-skills-container">
              <Icon icon="devicon:tailwindcss" class="project-skill" />
              <Icon icon="devicon:react-wordmark" class="project-skill" />
              <Icon icon="skill-icons:css" class="project-skill" />
              <Icon icon="devicon:vercel" class="project-skill" />
            </div>
            <h2 class="project-heading">A Blog Website</h2>
            <p class="project-sub-heading">A simple blogging platform.</p>
            <div class="btn-grp">
              <button class="btn-pink btn-project">
                <a href="https://github.com/tohidkhan2464/blog-website">
                  Read More
                </a>
              </button>
              <a href="https://github.com/tohidkhan2464/blog-website">
                <Icon icon="devicon:github" class="link" />
              </a>
              <a href="https://blog-website-inky.vercel.app/">
                <Icon icon="twemoji:link" class="link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

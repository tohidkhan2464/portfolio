import { SiGithub, SiInstagram, SiWhatsapp, SiLinkedin } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

import { Icon } from "@iconify/react";
const ContactMe = () => {
  return (
    <div>
      <section id="contact" class="contact-section">
        <div class="contact-faded-text">Contact</div>
        <div class="contact-section-header">
          <h2>Let's work together...</h2>
          <p>How do you take your coffee?</p>
        </div>
        <div class="contact-links">
          <a
            href="https://www.instagram.com/tohidkhan_30/"
            class="btn contact-details "
            className="contact-button-style"
          >
            <Icon icon="skill-icons:instagram" className="text-3xl" /> Instagram
          </a>
          <a
            id="profile-link"
            href="https://github.com/tohidkhan2464"
            class="btn contact-details"
            className="contact-button-style"
          >
            <Icon icon="devicon:github" className="text-3xl" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tohidkhan324/"
            class="btn contact-details"
            className="contact-button-style"
          >
            <Icon icon="logos:linkedin-icon" className="text-3xl" />
            LinkedIn
          </a>
          <a
            href="mailto:tohid1193407@gmail.com?"
            class="btn contact-details"
            className="contact-button-style"
          >
            <Icon icon="logos:mailgun-icon" className="text-3xl" />
            Send a mail
          </a>
          <a
            href="tel:6367097548"
            class="btn contact-details"
            className="contact-button-style"
          >
            <Icon icon="marketeq:phone" className="text-3xl" /> Call me
          </a>
          <a
            href="https://wa.me/916367097548"
            class="btn contact-details"
            className="contact-button-style"
          >
            <Icon icon="logos:whatsapp-icon" className="text-3xl" />
            Whatsapp me
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;

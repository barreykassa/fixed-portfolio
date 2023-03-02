import React from "react";
import "./css/footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/hu";
// AiFillGithub

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <ul className="footer-links">
            <li>
            <a href="https://github.com/barikassa">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bari-kassa-34a777226/">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://emailanalytics.com/gmail-tips-and-tricks/">
              <SiGmail />
            </a>
          </li>
        </ul>
        <div className="footer-name">
          <p>
            BARIKASSA<span>@2022</span>
          </p>
        </div>
      </div>
    </div>
  );
}

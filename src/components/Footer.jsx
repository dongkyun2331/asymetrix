import "./Footer.css";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { BsMedium, BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="" className="footer-a">
        SMART CONTRACT AUDIT
      </a>
      <a href="" className="footer-a">
        <FaGithub size={14} className="icon" />
        GITHUB
      </a>
      <a href="" className="footer-a">
        <FaTwitter size={14} className="icon" />
        TWITTER
      </a>
      <a href="" className="footer-a">
        <BsMedium size={14} className="icon" />
        MEDIUM
      </a>
      <a href="" className="footer-a">
        <BsDiscord size={14} className="icon" />
        DISCORD
      </a>
      <a href="" className="footer-a">
        DOCUMENTATION
      </a>
      <a href="" className="footer-a">
        TOKENOMICS
      </a>
    </footer>
  );
}

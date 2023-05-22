import "./Footer.css";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { BsMedium, BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="">SMART CONTRACT AUDIT</a>
      <a href="">
        <FaGithub size={14} className="icon" />
        GITHUB
      </a>
      <a href="">
        <FaTwitter size={14} className="icon" />
        TWITTER
      </a>
      <a href="">
        <BsMedium size={14} className="icon" />
        MEDIUM
      </a>
      <a href="">
        <BsDiscord size={14} className="icon" />
        DISCORD
      </a>
      <a href="">DOCUMENTATION</a>
      <a href="">TOKENOMICS</a>
    </footer>
  );
}

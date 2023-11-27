import "./Dock.css";
import home from "../assets/home.png";
import social from "../assets/social.png";
import project from "../assets/project.png";
import achiev from "../assets/achiev.png";
import me from "../assets/me.png";
const Dock = () => {
  return (
    <div className="dock-container">
      <div className="dock">
        <a href="#home">
          <img className="dock-icon" src={home} alt="" />
        </a>
        <a href="#social">
          <img className="dock-icon" src={social} alt="" />
        </a>{" "}
        <a href="#project">
          <img className="dock-icon" src={project} alt="" />
        </a>
        <a href="#achiev">
          <img className="dock-icon" src={achiev} alt="" />
        </a>
        <a href="#me">
          <img className="dock-icon" src={me} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Dock;

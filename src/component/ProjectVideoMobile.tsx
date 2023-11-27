import "./ProjectMobile.css";
import circleTri from "../assets/circletri.png";

const ProjectVideoMobile = (props: {
  title: string;
  index: number;
  desc: string;
  video: string;
  imageWidth: string;
  techLogos: Array<string>;
  githubURL: string;
  deployURL: string;
}) => {
  return (
    <div className="main-project-mobile">
      <div className="divider-project-mobile">
        <div className="line-project-mobile"></div>
        <div className="index-project-mobile">{props.index}</div>
        <div className="line-project-mobile"></div>
      </div>
      <div className="title-project-mobile">{props.title}</div>
      <div className="image-circle-stack-mobile">
        <img className="circletri-mobile" src={circleTri} width="60%" />
        <video
          className="project-image-mobile"
          autoPlay={true}
          muted={true}
          controls={true}
          src={props.video}
          width="70%"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        />
      </div>
      <div className="project-tech-logo-mobile">
        {props.techLogos.map((logo) => (
          <img className="logo-project-mobile" src={logo} width="15%" />
        ))}
      </div>
      <div className="desc-project-mobile">{props.desc}</div>
      <div className="project-links-mobile">
        <a
          style={{ color: "white", textDecoration: "none" }}
          href={props.githubURL}
          target="_blank"
        >
          <div className="github-button">GITHUB</div>
        </a>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href={props.deployURL}
          target="_blank"
        >
          <div className="deploy-button">DEPLOYMENT</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectVideoMobile;

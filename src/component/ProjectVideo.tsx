import "./Project.css";
import circleTri from "../assets/circletri.png";

const ProjectVideo = (props: {
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
    <div className="main-project">
      <div className="index-container-project">
        <div className="index-project">{props.index}</div>
        <div className="divider-project"></div>
      </div>
      <div className="content-project">
        <div className="title-project">{props.title}</div>

        {props.index % 2 === 0 ? (
          <div className="image-tech-container">
            <div className="stack-tp">
              <img
                src={circleTri}
                color="white"
                width="90%"
                alt=""
                className="circletri-project"
              />
              <video
                className="project-image"
                src={props.video}
                autoPlay={true}
                muted={true}
                controls={true}
                width={props.imageWidth}
              />
            </div>
            <div className="tech-container-project">
              <div className="tech-logos-project">
                {props.techLogos.map((logo) => (
                  <img src={logo} alt="" width="80px" />
                ))}
              </div>
              <div className="desc-project-container">{props.desc}</div>
            </div>
          </div>
        ) : (
          <div className="image-tech-container">
            <div className="tech-container-project">
              <div className="tech-logos-project">
                {props.techLogos.map((logo) => (
                  <img src={logo} alt="" width="80px" />
                ))}
              </div>
              <div className="desc-project-container">{props.desc}</div>
            </div>
            <div className="stack-tp">
              <img
                src={circleTri}
                color="white"
                width="90%"
                alt=""
                className="circletri-project"
              />
              <video
                className="project-image"
                src={props.video}
                autoPlay={true}
                muted={true}
                controls={true}
                width={props.imageWidth}
              />
            </div>
          </div>
        )}

        <div className="urls-project">
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
    </div>
  );
};

export default ProjectVideo;

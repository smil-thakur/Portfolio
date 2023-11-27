import Marquee from "react-fast-marquee";
import githubLogo from "./assets/github.png";
import linkedinLogo from "./assets/linkedin.png";
import twitterLogo from "./assets/twitter.png";
import instagramLogo from "./assets/instagram.png";

const SecondPage = () => {
  return (
    <>
      <div className="main-sp-desktop">
        <div className="title-sp">SOCIAL CONTACTS.</div>

        <div className="social-title-sp">Explore my projects at:</div>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://github.com/smil-thakur"
          target="_blank"
        >
          <Marquee className="social-marquee" autoFill={true}>
            <img
              className="social-title-icon-desktop-sp"
              src={githubLogo}
              alt=""
              width="60px"
            />
            <div className="social-scroll-item">GITHUB</div>
          </Marquee>
        </a>

        <div className="social-title-sp">Explore my acads at:</div>

        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://www.linkedin.com/in/smil-raj-thakur-b499471bb/"
          target="_blank"
        >
          <Marquee className="social-marquee" autoFill={true}>
            <img src={linkedinLogo} alt="" width="60px" />
            <div className="social-scroll-item">LINKEDIN</div>
          </Marquee>
        </a>
        <div className="social-title-sp">Explore my tweets at:</div>

        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://twitter.com/SmilThakur"
          target="_blank"
        >
          <Marquee className="social-marquee" autoFill={true}>
            <img
              className="social-title-icon-desktop-sp"
              src={twitterLogo}
              alt=""
              width="60px"
            />
            <div className="social-scroll-item">TWITTER</div>
          </Marquee>
        </a>

        <div className="social-title-sp">Explore me at:</div>

        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://www.instagram.com/smil_thakur/"
          target="_blank"
        >
          <Marquee className="social-marquee" autoFill={true}>
            <img
              className="social-title-icon-desktop-sp"
              src={instagramLogo}
              alt=""
              width="60px"
            />
            <div className="social-scroll-item">INSTAGRAM</div>
          </Marquee>
        </a>
      </div>

      <div className="main-block-mobile-sp">
        <div className="sidewalk-1">
          <Marquee speed={5}>
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              SOCIAL CONTACT
            </div>
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              SOCIAL CONTACT
            </div>
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              SOCIAL CONTACT
            </div>
          </Marquee>
        </div>
        <div className="main-sp-mobile">
          {/* <div className="title-sp">SOCIAL CONTACTS</div> */}
          <div className="social-item-sp-mobile">
            <div className="social-item-div">
              <img src={githubLogo} alt="" width="100px" />
              <div className="social-scroll-item">GITHUB</div>
            </div>
            <div className="social-item-div">
              <img src={linkedinLogo} alt="" width="80px" />
              <div className="social-scroll-item">LINKEDIN</div>
            </div>
            <div className="social-item-div">
              <img src={twitterLogo} alt="" width="70px" />
              <div className="social-scroll-item">TWITTER</div>
            </div>
            <div className="social-item-div">
              <img src={instagramLogo} alt="" width="80px" />
              <div className="social-scroll-item">INSTAGRAM</div>
            </div>
          </div>
        </div>

        <div className="sidewalk-2">
          <Marquee speed={5}>
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              SOCIAL CONTACT
            </div>
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              SOCIAL CONTACT
            </div>
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
              SOCIAL CONTACT
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default SecondPage;

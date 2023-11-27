import Marquee from "react-fast-marquee";
import jslogo from "./assets/javascript.png";
import nodejsLogo from "./assets/nodejs.png";
import reactjsLogo from "./assets/react.png";
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.png";
import javaLogo from "./assets/java.png";
import pythonLogo from "./assets/python.png";
import cppLogo from "./assets/c++.png";
import swiftLogo from "./assets/swift.png";
import swiftUILogo from "./assets/swiftui.png";
import flutterLogo from "./assets/flutter.png";
import dartLogo from "./assets/dart.png";

const FirstPage = () => {
  const greetings = [
    "HELLO", // English
    "HOLA", // Spanish
    "BONJOUR", // French
    "CIAO", // Italian
    "HALLO", // German
    "नमस्ते", // Hindi
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "السلام عليكم", // Arabic
    "Здравствуйте", // Russian
  ];

  const techSkills = [
    { tech: "JavaScript", logo: jslogo },
    { tech: "Node.js", logo: nodejsLogo },
    { tech: "React.js", logo: reactjsLogo },
    { tech: "HTML", logo: htmlLogo },
    { tech: "CSS", logo: cssLogo },
    { tech: "Java", logo: javaLogo },
    { tech: "Python", logo: pythonLogo },
    { tech: "C/C++", logo: cppLogo },
    { tech: "Swift", logo: swiftLogo },
    { tech: "SwiftUI", logo: swiftUILogo },
    { tech: "Flutter", logo: flutterLogo },
    { tech: "Dart", logo: dartLogo },
  ];

  return (
    <>
      <div className="main-fp">
        <div className="greet-desktop-fp">
          <Marquee gradient={true} autoFill={true}>
            {greetings.map((greet, index) => (
              <div key={index} className="greet-fp">
                {greet}
              </div>
            ))}
          </Marquee>
        </div>

        <div className="greet-mobile-fp">
          {greetings.map((greet, index) => (
            <Marquee key={index} gradient={true} autoFill={true}>
              <div key={index} className="greet-fp">
                {greet}
              </div>
            </Marquee>
          ))}
        </div>

        <div className="title-fp">SOFTWARE DEVELOPER</div>
        <div className="divider"></div>
        <div className="name-fp">SMIL RAJ THAKUR</div>
        <div className="tech-desktop-scroll">
          <Marquee gradient={true} autoFill={true}>
            {techSkills.map((techskill, index) => (
              <div key={index} className="greet-fp">
                <img
                  src={techskill.logo}
                  alt="logo"
                  width="50px"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                />
                {techskill.tech}
              </div>
            ))}
          </Marquee>
        </div>
        <div className="tech-mobile-scroll">
          {techSkills.map((techskill, index) => (
            <Marquee key={index} gradient={true} autoFill={true}>
              <div key={index} className="greet-fp">
                {techskill.tech}
              </div>
            </Marquee>
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstPage;

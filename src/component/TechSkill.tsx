import { TypeAnimation } from "react-type-animation";

const TechSkill = () => {
  return (
    <div className="techSkill-fp">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "I can develope software using Flutter",
          1000,
          "I can develope software using React.JS",
          1000,
          "I can develope software using SwiftUI",
          500,
        ]}
        speed={20}
        repeat={Infinity}
      />
    </div>
  );
};

export default TechSkill;

import "./ThirdPage.css";
import Project from "./component/Project";
import htmlLogo from "./assets/html.png";
import jsLogo from "./assets/javascript.png";
import cssLogo from "./assets/css.png";
import reactLogo from "./assets/react.png";
import flutterLogo from "./assets/flutter.png";
import dartLogo from "./assets/Dart_logo.png";
import firebaseLogo from "./assets/firebase.png";
import justjotImage from "./assets/justjotnbg.png";
import skywayImage from "./assets/skywaynbg.png";
import ProjectVideo from "./component/ProjectVideo";
import justdropVideo from "./assets/justdrop og.mp4";
import pomoImage from "./assets/pomo.png";
import ProjectMobile from "./component/ProjectMobile";
import ProjectVideoMobile from "./component/ProjectVideoMobile";
import dialyHacksImage from "./assets/dailyhacks.png";
import swiftLogo from "./assets/swift.png";
import dailynewsVideo from "./assets/dailynews2.mp4";
const ThirdPage = () => {
  return (
    <>
      <div className="main-tp-desktop">
        <div className="title-tp">PROJECTS.</div>

        <Project
          index={1}
          image={justjotImage}
          imageWidth="50%"
          title="JUST JOT."
          desc="Just Jot is a responsive website that enables you to maintain colorful chits of notes in a highly interactive UI. It leverages local storage for seamless data persistence and offers essential features such as searching, editing, deleting, and adding notes."
          techLogos={[htmlLogo, jsLogo, cssLogo, reactLogo]}
          githubURL="https://github.com/smil-thakur/Just-Jot"
          deployURL="https://smil-thakur.github.io/Just-Jot/"
        />
        <Project
          index={2}
          image={skywayImage}
          imageWidth="50%"
          title="SKYWAY."
          desc="Skyway - Nothing but Authentic: Skyway is a user-friendly news aggregator delivering an authentic experience. Seamlessly integrating with Google, it tailors news across diverse categories."
          techLogos={[flutterLogo, dartLogo, firebaseLogo]}
          githubURL="https://github.com/smil-thakur/skyway"
          deployURL="https://github.com/smil-thakur/skyway/releases/tag/v2.0.0"
        />
        <ProjectVideo
          index={3}
          video={justdropVideo}
          imageWidth="50%"
          title="JUST DROP."
          desc="Just Drop, our cutting-edge software built on React and Firebase, redefines file-sharing simplicity. Effortlessly drag and drop files onto the application for quick transfers."
          techLogos={[reactLogo, htmlLogo, cssLogo, firebaseLogo]}
          githubURL="https://github.com/smil-thakur/justDrop"
          deployURL="https://smil-thakur.github.io/justDrop/"
        />
        <Project
          index={4}
          image={pomoImage}
          imageWidth="50%"
          title="POMO."
          desc="Pomo, a dynamic Windows application crafted with Flutter, seamlessly integrates Pomodoro focus methods into your daily routine. It empowers users to set and achieve goals with features like recording session accomplishments, customizing work and break durations, and effortlessly toggling between light and dark modes. The app enhances productivity with sound alerts."
          techLogos={[flutterLogo, dartLogo]}
          githubURL="https://github.com/smil-thakur/pomo"
          deployURL="https://github.com/smil-thakur/pomo/releases/tag/v1.2"
        />
        <Project
          index={5}
          image={dialyHacksImage}
          imageWidth="50%"
          title="DailyHacks."
          desc="Tech Related Articles,A native SwiftUI app for Apple platform.That fetches recent and trending Hacker news from ycombinator API and pushes it into the listview, and provides a buildin webview to show full article."
          techLogos={[swiftLogo]}
          githubURL="https://github.com/smil-thakur/DailyHacks"
          deployURL="https://github.com/smil-thakur/DailyHacks"
        />
        <ProjectVideo
          index={6}
          video={dailynewsVideo}
          imageWidth="50%"
          title="DAILYNEWS."
          desc="A news app that categories different news in different sections, plus its Totally ads free with a simple yet amazing UI, build using Flutter and using news.org APIA news app that categories different news in different sections, plus its Totally ads free."
          techLogos={[swiftLogo, flutterLogo, dartLogo]}
          githubURL="https://github.com/smil-thakur/DailyNews"
          deployURL="https://github.com/smil-thakur/Daily-News-App"
        />
      </div>

      <div className="main-tp-mobile">
        <div className="title-tp">PROJECTS.</div>
        <ProjectMobile
          index={1}
          image={justjotImage}
          imageWidth="50%"
          title="JUST JOT."
          desc="Just Jot is a responsive website that enables you to maintain colorful chits of notes in a highly interactive UI. It leverages local storage for seamless data persistence and offers essential features such as searching, editing, deleting, and adding notes."
          techLogos={[htmlLogo, jsLogo, cssLogo, reactLogo]}
          githubURL="https://github.com/smil-thakur/Just-Jot"
          deployURL="https://smil-thakur.github.io/Just-Jot/"
        />
        <ProjectMobile
          index={2}
          image={skywayImage}
          imageWidth="50%"
          title="SKYWAY."
          desc="Skyway - Nothing but Authentic: Skyway is a user-friendly news aggregator delivering an authentic experience. Seamlessly integrating with Google, it tailors news across diverse categories."
          techLogos={[flutterLogo, dartLogo, firebaseLogo]}
          githubURL="https://github.com/smil-thakur/skyway"
          deployURL="https://github.com/smil-thakur/skyway/releases/tag/v2.0.0"
        />
        <ProjectVideoMobile
          index={3}
          video={justdropVideo}
          imageWidth="50%"
          title="JUST DROP."
          desc="Just Drop, our cutting-edge software built on React and Firebase, redefines file-sharing simplicity. Effortlessly drag and drop files onto the application for quick transfers."
          techLogos={[reactLogo, htmlLogo, cssLogo, firebaseLogo]}
          githubURL="https://github.com/smil-thakur/justDrop"
          deployURL="https://smil-thakur.github.io/justDrop/"
        />
        <ProjectMobile
          index={4}
          image={pomoImage}
          imageWidth="50%"
          title="POMO."
          desc="Pomo, a dynamic Windows application crafted with Flutter, seamlessly integrates Pomodoro focus methods into your daily routine. It empowers users to set and achieve goals with features like recording session accomplishments, customizing work and break durations, and effortlessly toggling between light and dark modes. The app enhances productivity with sound alerts."
          techLogos={[flutterLogo, dartLogo]}
          githubURL="https://github.com/smil-thakur/pomo"
          deployURL="https://github.com/smil-thakur/pomo/releases/tag/v1.2"
        />
        <ProjectMobile
          index={5}
          image={dialyHacksImage}
          imageWidth="50%"
          title="DailyHacks."
          desc="Tech Related Articles,A native SwiftUI app for Apple platform.That fetches recent and trending Hacker news from ycombinator API and pushes it into the listview, and provides a buildin webview to show full article."
          techLogos={[swiftLogo]}
          githubURL="https://github.com/smil-thakur/DailyHacks"
          deployURL="https://github.com/smil-thakur/DailyHacks"
        />
        <ProjectVideoMobile
          index={6}
          video={dailynewsVideo}
          imageWidth="50%"
          title="DAILYNEWS."
          desc="A news app that categories different news in different sections, plus its Totally ads free with a simple yet amazing UI, build using Flutter and using news.org APIA news app that categories different news in different sections, plus its Totally ads free."
          techLogos={[swiftLogo, flutterLogo, dartLogo]}
          githubURL="https://github.com/smil-thakur/DailyNews"
          deployURL="https://github.com/smil-thakur/Daily-News-App"
        />
      </div>
    </>
  );
};

export default ThirdPage;

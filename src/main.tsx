import React from "react";
import ReactDOM from "react-dom/client";
import "./FirstPage.css";
import "./SecondPage.css";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import Dock from "./component/Dock";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <section id="home">
      <FirstPage />
    </section>

    <section id="social">
      <SecondPage />
    </section>

    <section id="project">
      <ThirdPage />
    </section>

    <section id="achiev">
      <FourthPage />
    </section>

    <section id="me">
      <FifthPage />
    </section>
    <Dock />
  </React.StrictMode>
);

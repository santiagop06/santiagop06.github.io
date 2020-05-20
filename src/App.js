import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import "./App.css";
import Home from "./components/Text/Home";
import Projects from "./components/Text/Projects";
import Resume from "./components/Text/Resume";
import Skills from "./components/Text/Skills";
import Particles from "react-particles-js";

function App() {
  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
    },
  };
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navbar />
      <Container Text={Home} />
      <Container Text={Projects} />
      <Container Text={Resume} />
      <Container Text={Skills} />
    </div>
  );
}

export default App;

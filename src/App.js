import React from "react";
import Head from "./components/Head";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        {/* <Ripples></Ripples> */}
        <Head></Head>
        {/* <About></About> */}
        {/* <Links></Links> */}
        {/* <Projects></Projects> */}
      </div>
    </div>
  );
}

export default App;

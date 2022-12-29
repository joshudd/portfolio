import React from "react";
import Head from "./components/Head";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Head></Head>
        <About></About>
      </div>
    </div>
  );
}

export default App;

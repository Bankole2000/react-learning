import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter /> 
      {/* <Greet name="Bruce" heroName="Batman">
        {" "}
        <p>Bruce Wayne? or Banner?</p>{" "}
      </Greet>
      <Greet name="Clark" heroName="Superman">
        {" "}
        <button>A button</button>{" "}
      </Greet>
      <Greet name="Diana" heroName="Wonderwoman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonderwoman" />
      <h1>Something Else</h1> */}
    </div>
  );
}

export default App;

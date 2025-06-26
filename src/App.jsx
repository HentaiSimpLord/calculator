import { useState } from "react";
import "./App.scss";
import { Display } from "./components/display";
import { Buttons } from "./components/buttons";

function App() {
  return (
    <div id="calculator">
      <Display />
      <Buttons />
    </div>
  );
}

export default App;

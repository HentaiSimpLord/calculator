import { useState } from "react";
import "./App.scss";
import { Display } from "./components/display";
import { Buttons } from "./components/buttons";

function App() {
  const [value, setValue] = useState("0");
  const [calculation, setCalculation] = useState("0");

  return (
    <div id="calculator">
      <Display value={value} calculation={calculation} />
      <Buttons setValue={setValue} setCalculation={setCalculation} />
    </div>
  );
}

export default App;

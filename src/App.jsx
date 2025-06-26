import { useState } from "react";
import "./App.scss";
import { Display } from "./components/display";
import buttons from "./buttons";

function App() {
  const [value, setValue] = useState([]);
  const [calculation, setCalculation] = useState([]);
  const [shouldclear, setShouldClear] = useState(false);

  const handleClick = (btn) => {
    if (shouldclear) {
      setValue([]);
      setShouldClear(false);
    }

    switch (btn.type) {
      case "number":
        setCalculation((prev) => [...prev, btn.value]);
        setValue((prev) => [...prev, btn.value]);
        break;
      case "clear":
        setCalculation([]);
        setValue([]);
        break;
      case "sign":
        setValue([]);
        setCalculation((prev) => [...prev, btn.value]);
        setShouldClear(true);
        setValue(btn.value);
        break;
      default:
        return btn;
    }
  };

  return (
    <>
      <div className="container" id="calculator">
        <div className="container" id="display-container">
          <Display value={value} calculation={calculation} />
        </div>
        <div className="container" id="buttonbord-container">
          {Object.entries(buttons).map(([key, btn]) => (
            <button key={key} id="{btn.id}" onClick={() => handleClick(btn)}>
              {btn.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

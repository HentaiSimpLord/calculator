import { useState, useRef } from "react";
import "./App.scss";
import { buttons } from "./buttons";
import { evaluate } from "mathjs";

function App() {
  const [displayState, setDisplayState] = useState({
    currentInput: ["0"],
    currentCalculation: ["0"],
  });

  const nextClearAction = useRef(null);

  const handleClick = (btn) => {
    nextClearAction.current?.();

    nextClearAction.current = null;

    switch (btn.type) {
      case "clear":
        setDisplayState({
          currentInput: ["0"],
          currentCalculation: ["0"],
        });
        break;
      case "number":
        setDisplayState((prev) => ({
          currentInput:
            prev.currentInput[0] === "0"
              ? [btn.label]
              : [...prev.currentInput, btn.label],
          currentCalculation:
            prev.currentInput[0] === "0"
              ? [btn.label]
              : [...prev.currentCalculation, btn.label],
        }));
        break;
      case "operator":
        nextClearAction.current = () => {
          setDisplayState({
            currentInput: [""],
          });
        };
        setDisplayState((prev) => ({
          currentInput: [btn.label],
          currentCalculation: [...prev.currentCalculation, btn.label],
        }));
        break;
      case "equals":
        setDisplayState((prev) => ({
          currentInput: [evaluate(displayState.currentCalculation)],
          currentCalculation: [
            ...prev.currentCalculation,
            "=",
            evaluate(displayState.currentCalculation),
          ],
        }));
      default:
        return;
    }
  };

  return (
    <div id="calculator">
      <div id="display-container">
        <div id="calculation">{displayState.currentCalculation.join("")}</div>
        <div id="display">{displayState.currentInput.join("")}</div>
      </div>
      <div id="button-container">
        {buttons.map((btn, i) => (
          <button
            key={`button-${i}`}
            id={btn.id}
            onClick={() => handleClick(btn)}
          >
            {btn.label}
          </button>
        ))}
        ;
      </div>
    </div>
  );
}

export default App;

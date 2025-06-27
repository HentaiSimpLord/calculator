import { useState } from "react";
import buttons from "../buttons";

export const Buttons = (props) => {
  const [shouldClear, setShouldClear] = useState(false);

  const clearDisplay = () => {
    props.setValue("0");
    props.setCalculation("0");
  };

  const zeroAtStart = (arr) => {
    if (arr[0] === "0") {
      return true;
    } else {
      return false;
    }
  };

  const writeInDisplay = (btn) => {
    props.setValue((prev) => {
      if (zeroAtStart(prev)) {
        const newPrev = prev.slice(1);
        return [...newPrev, btn.name];
      } else {
        return [...prev, btn.name];
      }
    });
    props.setCalculation((prev) => {
      if (zeroAtStart(prev)) {
        const newPrev = prev.slice(1);
        return [...newPrev, btn.name];
      } else {
        return [...prev, btn.name];
      }
    });
  };

  const handleClick = (btn) => {
    if (shouldClear) {
      props.setValue([]);
      setShouldClear(false);
    }

    switch (btn.type) {
      case "clear":
        clearDisplay();
        break;
      case "sign":
        props.setValue((prev) => [...prev, btn.name]);
        props.setCalculation((prev) => [...prev, btn.name]);
        setShouldClear(true);
        break;
      case "number":
        writeInDisplay(btn);
        break;
      case "equals":
        break;
      default:
        return btn.type;
    }
  };

  return (
    <div id="buttons">
      {Object.entries(buttons).map(([key, btn]) => (
        <button key={key} id={btn.id} onClick={() => handleClick(btn)}>
          {btn.name}
        </button>
      ))}
    </div>
  );
};

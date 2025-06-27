import { useState } from "react";
import buttons from "../buttons";
import { boolean, evaluate } from "mathjs";

export const Buttons = (props) => {
  const [shouldClear, setShouldClear] = useState([false, false]);

  const clearDisplay = () => {
    props.setValue("0");
    setShouldClear([false, false]);
  };
  const clearCalculation = () => {
    props.setCalculation("0");
    setShouldClear([false, false]);
  };

  const zeroAtStart = (arr) => {
    return arr[0] === "0" ? true : false;
  };

  const decimalInNumber = (arr) => {
    if (Array.isArray(arr)) {
      return arr.includes(".");
    }
  };

  const writeInDisplay = (btn) => {
    console.log(decimalInNumber(props.value));
    if (decimalInNumber(props.value) && btn.name === ".") return;

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
    switch (shouldClear.toString()) {
      case "true,false":
        clearDisplay();
        break;
      case "false,true":
        clearCalculation();
        break;
      case "true,true":
        if (btn.type !== "sign") clearCalculation(), clearDisplay();
        // needs to clear calculation for further calculations
        break;
      default:
        break;
    }

    switch (btn.type) {
      case "clear":
        clearDisplay();
        clearCalculation();
        break;
      case "sign":
        writeInDisplay(btn);
        setShouldClear([true, false]);
        break;
      case "number":
        writeInDisplay(btn);
        break;
      case "equals":
        props.setCalculation((prev) => {
          const res = evaluate(prev.join(""));
          const resArr = res.toString().split("").map(Number);

          props.setValue(() => {
            return resArr;
          });

          return [...prev, "=", resArr];
        });

        setShouldClear([true, true]);

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

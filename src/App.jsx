import { useState } from "react";

export default function App() {
  const [displayState, setDisplayState] = useState("0");
  let afterEquals = false;

  const clearAction = () => {
    setDisplayState("0");

    afterEquals = false;
  };

  const numberAction = (number) => {
    if (displayState === "0" || displayState === "Error" || afterEquals) {
      setDisplayState(number);
    } else {
      setDisplayState(displayState + number);
    }

    afterEquals = false;
  };

  const signAction = (sign) => {
    if (afterEquals) {
      setDisplayState(displayState.split(/[\+\-\*\/]/).pop() + sign);

      afterEquals = false;

      return;
    }

    if (
      !/([+\-*/]{1,})$/.test(displayState) ||
      (/([+\*/]{1})$/.test(displayState) && sign === "-")
    ) {
      setDisplayState(displayState + sign);
    } else {
      setDisplayState(displayState.replace(/([+\-*/]{1,2})$/, sign));
    }

    afterEquals = false;
  };

  const decimalAction = () => {
    if (
      !displayState
        .split(/[\+\-\*\/]/)
        .pop()
        .includes(".") &&
      displayState.split(/[\+\-\*\/]/).pop() !== ""
    ) {
      setDisplayState(displayState + ".");
    }

    afterEquals = false;
  };

  const equalsAction = () => {
    const result = eval(displayState);

    afterEquals = true;

    setDisplayState(result);
  };

  return (
    <>
      <div id="calculator">
        <div id="display">{displayState}</div>
        <div id="keyboard">
          <button id="clear" onClick={() => clearAction()}>
            AC
          </button>
          <button id="divide" onClick={() => signAction("/")}>
            /
          </button>
          <button id="multiply" onClick={() => signAction("*")}>
            *
          </button>
          <button id="seven" onClick={() => numberAction("7")}>
            7
          </button>
          <button id="eight" onClick={() => numberAction("8")}>
            8
          </button>
          <button id="nine" onClick={() => numberAction("9")}>
            9
          </button>
          <button id="subtract" onClick={() => signAction("-")}>
            -
          </button>
          <button id="four" onClick={() => numberAction("4")}>
            4
          </button>
          <button id="five" onClick={() => numberAction("5")}>
            5
          </button>
          <button id="six" onClick={() => numberAction("6")}>
            6
          </button>
          <button id="add" onClick={() => signAction("+")}>
            +
          </button>
          <button id="one" onClick={() => numberAction("1")}>
            1
          </button>
          <button id="two" onClick={() => numberAction("2")}>
            2
          </button>
          <button id="three" onClick={() => numberAction("3")}>
            3
          </button>
          <button id="equals" onClick={() => equalsAction()}>
            =
          </button>
          <button id="zero" onClick={() => numberAction("0")}>
            0
          </button>
          <button id="decimal" onClick={() => decimalAction()}>
            .
          </button>
        </div>
      </div>
    </>
  );
}

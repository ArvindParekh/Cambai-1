import { useState } from "react";

const CalculatorCard = () => {
  const [inputValue, setInputValue] = useState(undefined);
  const buttonArr = [
    1,
    2,
    3,
    "/",
    4,
    5,
    6,
    "*",
    7,
    8,
    9,
    "+",
    0,
    ".",
    "-",
    "=",
  ];

  function handleClick(event) {
    const value = event.target.getAttribute("data-value");
    if (value === "=") {
      handleSubmit();
    } else {
      if (inputValue === undefined) {
        setInputValue(value);
      } else {
        setInputValue((prev) => prev + value);
      }
    }
  }

  function handleSubmit() {
    if (inputValue === undefined) {
      alert("Covered the edge cases, lol");
    }
    const result = eval(inputValue);
    setInputValue(result);
  }

  function handleClear() {
    setInputValue("");
  }

  return (
    <aside className="border border-1 bg-white rounded-xl shadow-2xl p-5">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-6xl font-bold">Calculator</h1>
        <input
          className="p-2 border-2 border-black text-xl font-medium rounded-lg"
          value={inputValue}
          readOnly
        />
        <div className="grid grid-rows-4 grid-cols-4 gap-4 w-full text-center">
          {buttonArr.map((value, index) => {
            return (
              <button
                key={index}
                className="border p-4 rounded-lg border-1"
                onClick={handleClick}
                data-value={value}
              >
                {value}
              </button>
            );
          })}
        </div>
        {/* <div className="grid grid-rows-4 grid-cols-4 gap-4 w-full text-center">
          <button
            className="border p-4 rounded-lg border-1"
            data-value={1}
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={2}
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={3}
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={"/"}
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={4}
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={5}
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={6}
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={"*"}
            onClick={handleClick}
          >
            *
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={7}
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={8}
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={9}
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={"-"}
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={0}
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={"."}
            onClick={handleClick}
          >
            .
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={"="}
            onClick={handleClick}
          >
            =
          </button>
          <button
            className="border p-4 rounded-lg border-1"
            data-value={"+"}
            onClick={handleClick}
          >
            +
          </button>
        </div> */}
        <button
          className="border border-1 w-full p-3 rounded-lg"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </aside>
  );
};

export default CalculatorCard;

import { useState } from "react";
import { transpile } from "typescript";

export default function Counter() {
  const [isMouse, isnowmouse] = useState(false);
  const [count, setCount] = useState(0);
  const [nmbr, setnmbr] = useState(99999);
  const [store, nstore] = useState(nmbr);

  function add() {
    if (store == "") setCount(count + 1);
    if (count < store) setCount(count + 1);
  }

  function subtract() {
    if (count > 0) setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  function onMouseovr() {
    isnowmouse(true);
  }
  function onMouseot() {
    isnowmouse(false);
  }
  function handleset() {
    nstore(nmbr);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="number"
          onChange={(e) => setnmbr(e.target.value)}
          style={{ width: 50, marginRight: 10 }}
        />
        <button onClick={handleset}>Set</button>
      </div>
      <br />
      <br />
      <div className="counter">
        <button onClick={subtract}>Subtract</button>
        <p style={{ fontSize: 30 }}>{count}</p>
        <button onClick={add}>Add</button>

        <button
          onClick={reset}
          style={{
            backgroundColor: isMouse ? "black" : "white",
            color: "blueviolet",
          }}
          onMouseOver={onMouseovr}
          onMouseOut={onMouseot}
        >
          reset
        </button>
      </div>
    </>
  );
}

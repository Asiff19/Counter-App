import { useEffect, useState } from "react";

export default function Mindread() {
  const [num, inputnum] = useState(null);
  const [show, shownow] = useState(null);
  const [load, loader] = useState(false);
  const [wait, newwait] = useState(true);

  useEffect(() => {
    let timer, timer2;
    if (load) {
      timer = setTimeout(() => {
        shownow(num);
      }, 3000);

      timer2 = setInterval(() => {
        newwait((prev) => !prev);
      }, 500);
    }
    return () => {
      clearTimeout(timer);
      clearInterval(timer2);
    };
  }, [load]);

  function handlebtn() {
    loader(true);
  }

  return (
    <>
      <p>I will read your Mind!</p>
      <input
        type="number"
        placeholder="Think about a number.."
        required
        value={num}
        onChange={(e) => {
          inputnum(e.target.value);
        }}
      ></input>
      <button onClick={handlebtn}>Submit</button>

      <h4 style={{ visibility: wait ? "visible" : "hidden" }}>
        Reading your mind..
      </h4>
      <h3 style={{ visibility: show != null ? "visible" : "hidden" }}>
        Your are thinking of a number {show}
      </h3>
    </>
  );
}

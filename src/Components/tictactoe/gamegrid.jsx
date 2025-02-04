import { useState } from "react";
import { matchedsymbol } from "./matchedsymbol";

const gridarr = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gamegrid() {
  const [gridmat, newgrid] = useState(gridarr);
  const [activesym, newactivesym] = useState("X");

  function handleClicking(rowin, colin) {
    newactivesym(activesym === "X" ? "O" : "X");
    newgrid((prevgrid) => {
      const updatedgrid = [...prevgrid.map((innerarr) => [...innerarr])];
      updatedgrid[rowin][colin] = activesym;
      return updatedgrid;
    });
  }

  let winval = null,
    gameisover = null;

  for (let winind of matchedsymbol) {
    const fval = gridmat[winind[0].row][winind[0].col];
    const sval = gridmat[winind[1].row][winind[1].col];
    const tval = gridmat[winind[2].row][winind[2].col];
    if (fval && fval === sval && fval === tval) {
      winval = fval;
    }
  }
  if (
    gridmat[0][0] &&
    gridmat[0][1] &&
    gridmat[0][2] &&
    gridmat[1][0] &&
    gridmat[1][1] &&
    gridmat[1][2] &&
    gridmat[2][0] &&
    gridmat[2][1] &&
    gridmat[2][2] &&
    winval === null
  ) {
    gameisover = "Game Over!";
  }

  function handleRestart() {
    newgrid([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  }
  return (
    <>
      <ol>
        {gridmat.map((row, rowin) => (
          <li key={rowin} style={{ listStyleType: "none", margin: 10 }}>
            <ul style={{ display: "flex", gap: 10, listStyleType: "none" }}>
              {row.map((col, colin) => (
                <li key={colin}>
                  <button
                    style={{
                      width: 60,
                      height: 60,
                      color: "black",
                      fontSize: 30,
                    }}
                    onClick={() => handleClicking(rowin, colin)}
                    disabled={col != null || winval != null}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <span
        style={{
          color: "white",
          position: "absolute",
          top: 120,
          left: 120,
          backgroundColor: "grey",
        }}
      >
        {winval && (
          <p
            style={{
              textAlign: "center",
              height: 80,
              width: 150,
              paddingTop: 40,
              fontSize: 22,
            }}
          >
            You won, {winval}!<hr />{" "}
            <button onClick={handleRestart}>Rematch</button>
          </p>
        )}
        {gameisover && (
          <p
            style={{
              textAlign: "center",
              height: 80,
              width: 150,
              paddingTop: 40,
              fontSize: 22,
            }}
          >
            {gameisover} <hr />
            <button onClick={handleRestart}>Rematch</button>{" "}
          </p>
        )}
      </span>
    </>
  );
}

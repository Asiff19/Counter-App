import React, { useState } from "react";
import Playerarea from "./playerarea";
import Gamegrid from "./gamegrid";

export default function Gamearea() {
  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "110px",
        }}
      >
        <Playerarea name={"Player 1"} symbol="X" />{" "}
        <Playerarea name={"Player 2"} symbol={"O"} />
      </span>
      <br />
      <br />

      <Gamegrid />
    </>
  );
}

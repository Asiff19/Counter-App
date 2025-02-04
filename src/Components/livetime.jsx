import { React, useState } from "react";
export default function Livetime() {
  const time = new Date().toLocaleTimeString();
  const [cur, up] = useState(time);
  setInterval(update, 1000);
  function update() {
    const newtime = new Date().toLocaleTimeString();
    up(newtime);
  }

  return <h1>{cur}</h1>;
}

import { useState } from "react";

export default function Greeting() {
  const date = new Date();
  const time = date.getHours();
  const custColor = {
    color: "",
  };
  const [name, setName] = useState(" ");
  const [store, setStore] = useState(" ");
  let out;
  if (time >= 12 && time < 17) {
    out = "Good Afternoon";
    custColor.color = "red";
  } else if (time >= 17 && time < 20) {
    out = "Good Evening";
    custColor.color = "blue";
  } else if (time >= 20 && time <= 24) {
    out = "Good Night";
    custColor.color = "black";
  } else if (time < 12) {
    out = "Good Morning";
    custColor.color = "green";
  }

  function handlechange(event) {
    setName(event.target.value);
  }
  function handleStore(event) {
    setStore(name);
  }

  return (
    <>
      <p className="greet" style={custColor}>
        Hey {store}, {out}
      </p>
      <br /> <br />
      <input placeholder="What is your Name?" onChange={handlechange} />
      <div>
        <button style={{ marginLeft: 50, marginTop: 5 }} onClick={handleStore}>
          Submit
        </button>
      </div>
    </>
  );
}

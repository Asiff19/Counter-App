import { useState } from "react";
export default function Playerarea({ name, symbol }) {
  let initialval = name;
  const [editing, isEditable] = useState(false);
  const [name1, name2] = useState(initialval);

  function handleEdit() {
    isEditable(!editing);
  }

  function handleName(e) {
    name2(e.target.value);
  }

  let ename = <span className="namearea">{name1} </span>;
  if (editing) {
    ename = (
      <input
        style={{ width: 50 }}
        onChange={handleName}
        required
        value={name1}
      />
    );
  }

  return (
    <li>
      {ename}
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>{symbol} </span>
      <button onClick={handleEdit}>{editing ? "save" : "edit"}</button>
    </li>
  );
}

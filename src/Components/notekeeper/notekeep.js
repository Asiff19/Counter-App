import { useState } from "react";
import Notedetail from "./notedetail";
export default function Notekeeper() {
  const [textIn, newTxtIn] = useState({
    title: "",
    content: "",
  });

  const [isMouse, isnowmouse] = useState(false);

  const [notess, newnotes] = useState([]);

  function onadd(texts) {
    newnotes((newitm) => {
      return [...newitm, texts];
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    newTxtIn((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleOnclck(event) {
    onadd(textIn);
    newTxtIn({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function onDeleted(id) {
    newnotes((previtm) => {
      return previtm.filter((noteitm, index) => {
        return index !== id;
      });
    });
  }

  function onOvrMouse() {
    isnowmouse(true);
  }
  function onOutMouse() {
    isnowmouse(false);
  }

  return (
    <>
      <header>
        <h1>Keeper</h1>
      </header>
      <hr />
      <form>
        <div>
          <input
            name="title"
            value={textIn.title}
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <textarea
          name="content"
          placeholder="Take a note.."
          rows={4}
          value={textIn.content}
          style={{ width: 280 }}
          onChange={handleChange}
        />
        <button
          onClick={handleOnclck}
          style={{ backgroundColor: isMouse ? "black" : "white" }}
          onMouseOver={onOvrMouse}
          onMouseOut={onOutMouse}
        >
          Add
        </button>
      </form>
      {notess.map((noteitm, index) => {
        return (
          <Notedetail
            id={index}
            title={noteitm.title}
            content={noteitm.content}
            onDelete={onDeleted}
          />
        );
      })}
      <footer className="footers">
        <p>Copyright © 2024</p>
      </footer>
    </>
  );
}

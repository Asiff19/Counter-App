import { useState } from "react";
export default function Proposal() {
  const [accpt, isaccpt] = useState("");
  const [position, setposition] = useState({ top: "1%", left: "52%" });
  const positionarr = [
    { top: "119%", left: "39%" },
    { top: "-290%", left: "75%" },
    { top: "220%", left: "65%" },
    { top: "-919%", left: "21%" },
    { top: "-419%", left: "81%" },
    { top: "-119%", left: "11%" },
    { top: "479%", left: "91%" },
    { top: "419%", left: "17%" },
    { top: "-319%", left: "21%" },
  ];

  const currentpos = () => {
    const getarr = positionarr[Math.floor(Math.random() * 9)];
    setposition(getarr);
    isaccpt("");
  };
  const styleofbtn = {
    position: "absolute",
    top: position.top,
    left: position.left,
    width: 40,
    borderRadius: 5,
    height: 25,
    backgroundColor: "cyan",
    fontWeight: "bold",
    cursor: "none",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
      >
        <img
          style={{ height: 200, width: 200 }}
          src="https://thumbs.dreamstime.com/z/rabbit-bear-sleeping-together-cartoon-hand-drawn-style-animal-character-drawing-vector-design-160326973.jpg"
          alt="teddy friendship"
        />
      </div>
      <pre
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Will you be my Valentine?🥺
      </pre>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <button
          style={{
            height: 25,
            width: 40,
            borderRadius: 5,
            backgroundColor: "cyan",
            fontWeight: "bold",
            marginRight: 45,
          }}
          onClick={() => isaccpt("I knew you are in love with me!!<3")}
        >
          Yes
        </button>

        <button
          className="noBtn"
          style={styleofbtn}
          onMouseOver={currentpos}
          onClick={() => isaccpt("I hate you")}
        >
          No
        </button>
      </div>

      <br />
      <span
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {accpt}
      </span>
    </>
  );
}

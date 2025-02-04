import { React, useState } from "react";
import { SlOptions } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dummytext from "./dummytext";
export default function Navbar() {
  const [bar, isbar] = useState(false);
  return (
    <>
      <div>
        <header
          style={{ fontSize: 18, backgroundColor: "#011627", color: "white" }}
        >
          {bar ? (
            <AiOutlineClose
              style={{ paddingTop: 20, paddingLeft: 15, fontSize: 25 }}
              onClick={() => isbar(!bar)}
            />
          ) : (
            <SlOptions
              style={{ paddingTop: 20, paddingLeft: 15, fontSize: 25 }}
              onClick={() => isbar(!bar)}
            />
          )}
          <span
            className="wlcm"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "gray",
            }}
          >
            Welcome
          </span>
        </header>
      </div>
      <div className={bar ? "navigoff" : "navig"}>
        <ul
          style={{
            listStyle: "none",
            padding: 10,
            lineHeight: 2,
          }}
        >
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dummytext"
              onClick={() => isbar(!bar)}
              style={{ textDecoration: "none", color: "white" }}
            >
              About us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          color: "black",
          position: "absolute",
          left: bar ? 180 : 20,
          top: 90,
        }}
      >
        <p>Follow me on insta- asifitsok</p>
        <Routes>
          <Route path="/dummytext" element={<Dummytext />} />
        </Routes>
      </div>
    </>
  );
}

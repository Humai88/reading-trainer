import React, { useState } from "react";
import "./App.css";
import { Letters } from "./components/Letters/Letters";
import { IoMdRefreshCircle } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

function App() {
  function refreshPage() {
    window.location.reload();
  }
  const [paintMode, setPaintMode] = useState(false);
  const paintModeHandler = () => {
    setPaintMode(true);
  };
  const stopPaintModeHandler = () => {
    setPaintMode(false);
  };
  return (
    <div className="main" aria-hidden="true">
      <Letters paintMode={paintMode} />
      <div onClick={paintModeHandler} className="btn btnStart">
        <BiPencil />
      </div>
      <div onClick={stopPaintModeHandler} className=" btn btnStop">
        <ImCancelCircle />
      </div>
      <div onClick={refreshPage} className="img">
        <IoMdRefreshCircle />
      </div>
    </div>
  );
}

export default App;

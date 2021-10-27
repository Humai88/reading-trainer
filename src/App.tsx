import React, { useEffect, useState } from "react";
import "./App.css";
import { Letters } from "./components/Letters/Letters";
import { IoMdRefreshCircle } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { Preloader } from "./components/Preloader/Preloader";

function App() {
  const [paintMode, setPaintMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  function refreshPage() {
    window.location.reload();
  }
  const paintModeHandler = () => {
    setPaintMode(true);
  };
  const stopPaintModeHandler = () => {
    setPaintMode(false);
  };
  return isLoading ? (
    <Preloader />
  ) : (
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

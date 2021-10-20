import React from "react";
import "./App.css";
import { Letters } from "./components/Letters/Letters";
import { IoMdRefreshCircle } from "react-icons/io";

function App() {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <main>
      <Letters />

      <div onClick={refreshPage} className="img">
        <IoMdRefreshCircle />
      </div>
    </main>
  );
}

export default App;

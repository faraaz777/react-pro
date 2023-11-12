import Themecontext from "../components/context/themecontext";
import "./button.css";
import { useContext, useState } from "react";

function Playbutton({ onplay, onpause, children }) {
  let [playing,setPlaying]=useState(false);

  const theme =useContext(Themecontext);

  function Whenclicked() {
    if (playing) onplay();
    else onpause();
    setPlaying(playing=!playing)
  }
  return (
    <>
      <button className={`btn ${theme}`} onClick={Whenclicked}>
        {children} : {playing?'||':'>'}
      </button>
    </>
  );
}
export default Playbutton;

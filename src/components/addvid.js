import { useContext, useEffect, useState } from "react";
import "./addvid.css";
import { useMemo } from "react";
import Themecontext from "./context/themecontext";

export default function Addvid({ dispatch, EditVideo }) {
  const theme = useContext(Themecontext);

  let intialformState = {
    time: "1 month ago",
    chanel: "coder dost",
    title: "",
    views: "",
  };

  const [video, setVideo] = useState(intialformState);

  function handlechange(e) {
    //adding name and value from the given input
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  }

  function handlesubmite(e) {
    //sending new or edited video to App.js
    if (EditVideo) {
      dispatch({ type: "updateVid", payload: video });
    } else {
      dispatch({ type: "add", payload: video });
    } //clearing the form
    setVideo(intialformState);
  }

  useEffect(() => {
    if (EditVideo) {
      setVideo(EditVideo);
    }
  }, [EditVideo]);

  return (
    <div className="forms">
      <form className="forms">
        <input
          placeholder="title"
          name="title"
          onChange={handlechange}
          value={video.title}
        ></input>
        <input
          name="views"
          onChange={handlechange}
          placeholder="views"
          value={video.views}
        ></input>
      </form>

      <button className={`btn ${theme}`} onClick={handlesubmite}>
        {EditVideo ? "Edit" : "Add"} video
      </button>
    </div>
  );
}

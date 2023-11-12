import { useContext } from "react";
import "./video.css";
import Themecontext from "./context/themecontext";

function Video({ id, title, chanel, views, time, DeletingVid, editableVideo }) {
  const theme = useContext(Themecontext);
  return (
    <div className="thumbnail">
      <button className={`close  btn ${theme}`} onClick={() => DeletingVid(id)}>
        X
      </button>

      <button className={`edit btn ${theme}`} onClick={() => editableVideo(id)}>
        Edit
      </button>

      <img
        src={`https://picsum.photos/id/${id}/150/110`}
        className="vid"
        alt="pic"
      />
      <div className={`title color ${theme}`}>{title}</div>
      <div className={`chanelName color ${theme}`}>{chanel}</div>
      <div className={`views color ${theme}`}>
        {views} views<pre className="pre"> . </pre>
      </div>
      <div className={`time color ${theme}`}>{time}</div>
    </div>
  );
}
export default Video;

import Video from "./components/video";
import Playbutton from "./button/button";
import data from "./components/data";
import Addvid from "./components/addvid";
import { useEffect, useReducer, useState } from "react";
import Themecontext from "./components/context/themecontext";
import Counter from "./components/counter";
import "./App.css";

export function App() {
  let [editableVideo, setEditableVideo] = useState(null);
  //this can be writen in diffrent file
  //useReducer for state management
  function videoReducer(videoDB, action) {
    switch (action.type) {
      case "add":
        return [...videoDB, { ...action.payload, id: videoDB.length + 1 }];

      case "delet":
        return videoDB.filter((vid) => vid.id !== action.payload);

      case "updateVid":
        let index = videoDB.findIndex((vid) => vid.id === action.payload.id);
        console.log(index);
        let EditedVid = [...videoDB];
        EditedVid.splice(index, 1, action.payload);
        setEditableVideo(null);
        return EditedVid;

      default:
        return videoDB;
    }
  }
  // let [videoDB, setVideoDB] = useState(data);
  let [videoDB, dispatch] = useReducer(videoReducer, data);
  
  function addingVideo(vid) {
    //Adding new video to vizdeo data base with id
    dispatch({ type: "add", payload: vid });
    // setVideoDB();
  }
  function DeletingVid(id) {
    //to delet a video
    dispatch({ type: "delet", payload: id });
    // setVideoDB();
  }
  function EditVideo(id) {
    //to select the video and too add it into the form
    setEditableVideo(videoDB.find((vid) => vid.id === id));
  }
  function updateVid(video) {
    //to remove and add from the array and replacing it with edited one
    dispatch({ type: "updateVid", payload: video });
  }
  let [mode, setMode] = useState("lightMode");
  return (
    // using context API
    <Themecontext.Provider value={mode}>
      <Counter></Counter>
      <button
        className="btn"
        onClick={() => {
          setMode(mode === "darkMode" ? "lightMode" : "darkMode");
        }}
      >
        mode
      </button>
      <div className={`vidcompnts ${mode}`}>
        <Addvid
          mode={mode}
          dispatch={dispatch}
          EditVideo={editableVideo}
        ></Addvid>
        {videoDB.map((e) => (
          <div className="vidcompnt">
            <Video
              id={e.id}
              title={e.title}
              chanel={e.chanel}
              views={e.views}
              time={e.time}
              DeletingVid={DeletingVid}
              editableVideo={EditVideo}
            ></Video>

            <Playbutton
              className="button"
              onplay={() => console.log("play")}
              onpause={() => console.log("pause")}
            >
              play
            </Playbutton>
          </div>
        ))}
      </div>
    </Themecontext.Provider>
  );
}
export default App;

import React from "react";
import {
  MdAddAlert,
  MdPersonAdd,
  MdPalette,
  MdImage,
  MdArchive,
  MdMoreVert,
} from "react-icons/md";
import "./NoteOptions.scss";

const NoteOptions = () => {
  return (
    <div className="payO-noteoptions">
      <div>
        <MdAddAlert />
      </div>
      <div>
        <MdPersonAdd />
      </div>
      <div>
        <MdPalette />
      </div>
      <div>
        <MdImage />
      </div>
      <div>
        <MdArchive />
      </div>
      <div>
        <MdMoreVert />
      </div>
    </div>
  );
};

export default NoteOptions;

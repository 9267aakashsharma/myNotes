import React from "react";
import { Note } from "../../../../models/note";
import "./SingleNote.scss";

const SingleNote = ({ title, content }: Note) => {
  return (
    <div className="payO-note">
      <h2>{title}</h2>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SingleNote;

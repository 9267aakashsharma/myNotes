import React from "react";
import { Note } from "../../../../models/note";
import "./SingleNote.scss";
import { NoteOptions } from "../../../../shared/components";
import { MdCheckCircle } from "react-icons/md";
const Pushpin = require("../../../../assets/svg/push_pin.svg") as string;

const SingleNote = ({ title, content }: Note) => {
  return (
    <div className="payO-note">
      <div className="check-icon">
        <MdCheckCircle />
      </div>
      <h2>
        {title}
        <span>
          <img src={Pushpin} alt="Push pin" />
        </span>
      </h2>
      <div className="content">
        <p>{content}</p>
      </div>
      <div className="noteoptions">
        <NoteOptions />
      </div>
    </div>
  );
};

export default SingleNote;

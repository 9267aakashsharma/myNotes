import React from "react";
import { Note } from "../../../../models/note";
import "./SingleNote.scss";
import { NoteOptions } from "../../../../shared/components";
import { MdCheckCircle } from "react-icons/md";
const Pushpin = require("../../../../assets/svg/push_pin.svg") as string;
const PushpinBlack = require("../../../../assets/svg/push_pin-black.svg") as string;

type Props = {
  note: Note;
  togglePinned: (id: string) => void;
};

const SingleNote = (props: Props) => {
  return (
    <div className="payO-note">
      <div className="check-icon">
        <MdCheckCircle />
      </div>
      <h2>
        {props.note.title}
        <span
          onClick={() => {
            props.togglePinned(props.note.id);
          }}
        >
          {props.note.pinned ? (
            <img src={PushpinBlack} alt="Unpin" />
          ) : (
            <img src={Pushpin} alt="Push pin" />
          )}
        </span>
      </h2>
      <div className="content">
        <p>{props.note.content}</p>
      </div>
      <div className="noteoptions">
        <NoteOptions />
      </div>
    </div>
  );
};

export default SingleNote;

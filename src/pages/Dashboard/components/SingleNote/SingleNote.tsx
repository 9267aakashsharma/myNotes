import React from "react";
import { Note } from "../../../../models/note";
import "./SingleNote.scss";
import { NoteOptions } from "../../../../shared/components";
import { MdCheckCircle } from "react-icons/md";
import Linkify from "react-linkify";
const Pushpin = require("../../../../assets/svg/push_pin.svg") as string;
const PushpinBlack = require("../../../../assets/svg/push_pin-black.svg") as string;

type Props = {
  note: Note;
  togglePinned: (id: string) => void;
  onUploadImage: (id: string, fileUrl: string) => void;
};

const SingleNote = (props: Props) => {
  const handleFile = (file: string) => {
    props.onUploadImage(props.note.id, file);
  };

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
        <Linkify>
          <p>{props.note.content}</p>
        </Linkify>
        {props.note.imageUrl.map((image: string, index: number) => {
          return <img src={image} alt={image} key={index} />;
        })}
      </div>
      <div className="noteoptions">
        <NoteOptions handleFile={handleFile} />
      </div>
    </div>
  );
};

export default SingleNote;

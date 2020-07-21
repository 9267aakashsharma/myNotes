import React, { useEffect, useState } from "react";
import "./CreateNote.scss";
import TextareaAutosize from "react-autosize-textarea";
import { Note } from "../../../../models/note";
import { NoteOptions } from "../../../../shared/components";
const Pushpin = require("../../../../assets/svg/push_pin.svg") as string;

interface Props extends React.HTMLProps<HTMLDivElement> {
  saveNote: (note: Note) => void;
}

const CreateNote = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (title === "" && content === "") {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [title, content]);
  return (
    <div className="payO-createNote">
      <div className="title">
        <input
          placeholder="Title"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <div>
          <img src={Pushpin} alt="pin item" />
        </div>
      </div>
      <div className="content">
        <TextareaAutosize
          placeholder="Take a note..."
          rows={1}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setContent(event.target.value);
          }}
          value={content}
        />
      </div>
      <div className="options">
        <NoteOptions />
        <button
          onClick={() => {
            props.saveNote({ title, content });
            setContent("");
            setTitle("");
          }}
          disabled={disableButton}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;

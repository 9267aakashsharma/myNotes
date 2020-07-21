import React, { useEffect, useState } from "react";
import "./CreateNote.scss";
import TextareaAutosize from "react-autosize-textarea";
import { Note } from "../../../../models/note";
import { NoteOptions } from "../../../../shared/components";
const Pushpin = require("../../../../assets/svg/push_pin.svg") as string;

interface Props extends React.HTMLProps<HTMLDivElement> {
  saveNote: (note: Note) => void;
}

const initalNoteProperties: Note = {
  title: "",
  content: "",
  checked: false,
  pinned: false,
  color: "#ffffff",
};

const CreateNote = (props: Props) => {
  const [noteProperties, setNoteProperties] = useState(initalNoteProperties);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (noteProperties.title === "" && noteProperties.content === "") {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [noteProperties]);

  return (
    <div className="payO-createNote">
      <div className="title">
        <input
          placeholder="Title"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNoteProperties({ ...noteProperties, title: event.target.value });
          }}
          value={noteProperties.title}
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
            setNoteProperties({
              ...noteProperties,
              content: event.target.value,
            });
          }}
          value={noteProperties.content}
        />
      </div>
      <div className="options">
        <NoteOptions />
        <button
          onClick={() => {
            props.saveNote(noteProperties);
            setNoteProperties({ ...noteProperties, title: "", content: "" });
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

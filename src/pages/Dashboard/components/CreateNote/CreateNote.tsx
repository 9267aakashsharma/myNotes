import React, { useState } from "react";
import "./CreateNote.scss";
import TextareaAutosize from "react-textarea-autosize";
import { Note } from "../../../../models/note";
import { NoteOptions } from "../../../../shared/components";
import { ReactComponent as PushPin } from "../../../../assets/svg/push_pin.svg";

interface Props extends React.HTMLProps<HTMLDivElement> {
  saveNote: (note: Note) => void;
}

const CreateNote = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
          <PushPin />
        </div>
      </div>
      <div className="content">
        <TextareaAutosize
          placeholder="Take a note..."
          minRows={1}
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
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;

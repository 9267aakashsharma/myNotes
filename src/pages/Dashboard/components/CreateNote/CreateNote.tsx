import React, { useEffect, useState } from "react";
import "./CreateNote.scss";
import TextareaAutosize from "react-autosize-textarea";
import { Note } from "../../../../models/note";
import { NoteOptions } from "../../../../shared/components";
import { v4 as uuid } from "uuid";
const Pushpin = require("../../../../assets/svg/push_pin.svg") as string;
const PushpinBlack = require("../../../../assets/svg/push_pin-black.svg") as string;

interface Props extends React.HTMLProps<HTMLDivElement> {
  saveNote: (note: Note) => void;
}

const initalNoteProperties: Note = {
  id: "",
  title: "",
  content: "",
  imageUrl: [],
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

  const togglePinned = () => {
    const changePin = !noteProperties.pinned;
    setNoteProperties({ ...noteProperties, pinned: changePin });
  };

  const handleFile = (file: string) => {
    setNoteProperties({
      ...noteProperties,
      imageUrl: [...noteProperties.imageUrl, file],
    });
  };

  const unSetProperties = () => {
    setNoteProperties(initalNoteProperties);
  };

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
        <div onClick={togglePinned}>
          {noteProperties.pinned ? (
            <img src={PushpinBlack} alt="unpin item" />
          ) : (
            <img src={Pushpin} alt="pin item" />
          )}
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
        {noteProperties.imageUrl.map((image: string, index: number) => {
          return <img src={image} alt={image} key={index} />;
        })}
      </div>
      <div className="options">
        <NoteOptions handleFile={handleFile} />
        <button
          onClick={() => {
            props.saveNote({ ...noteProperties, id: uuid() });
            unSetProperties();
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

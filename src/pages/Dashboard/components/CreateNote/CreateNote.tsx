import React, { useEffect, useRef, useState } from "react";
import "./CreateNote.scss";
import { FaCheckSquare, FaImage, FaPaintBrush } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="payO-createNote">
      <input
        placeholder="Title"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
        value={title}
      />
      <div className="title">
        <TextareaAutosize
          placeholder="Take a note..."
          minRows={1}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setContent(event.target.value);
          }}
          value={content}
        />
        <FaCheckSquare />
        <FaPaintBrush />
        <FaImage />
      </div>

      <div>
        <div className="content"></div>
        <div className="options">
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;

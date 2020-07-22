import React, { useRef, useState } from "react";
import {
  MdAddAlert,
  MdPersonAdd,
  MdPalette,
  MdImage,
  MdArchive,
  MdMoreVert,
} from "react-icons/md";
import "./NoteOptions.scss";

const NoteOptions = (props: any) => {
  const [deleteNote, setDeleteNote] = useState(false);
  const hiddenImageFileInput = useRef<HTMLInputElement>(null);

  const handleImageClick = (event: React.MouseEvent<HTMLInputElement>) => {
    hiddenImageFileInput.current?.click();
  };

  const handleImageChange = (event: any) => {
    const fileUpload = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileUpload);
    reader.onload = () => {
      props.handleFile(reader.result);
    };
    reader.onerror = (err) => {
      console.error(err);
    };
  };

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
      <div onClick={handleImageClick}>
        <input
          type="file"
          ref={hiddenImageFileInput}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <MdImage />
      </div>
      <div>
        <MdArchive />
      </div>
      <div
        onClick={() => {
          setDeleteNote(!deleteNote);
        }}
        className="more-option"
      >
        <MdMoreVert />
        {deleteNote && <span>Delete</span>}
      </div>
    </div>
  );
};

export default NoteOptions;

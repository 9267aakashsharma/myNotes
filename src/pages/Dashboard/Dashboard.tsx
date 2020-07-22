import React, { useState } from "react";
import { Note } from "../../models/note";
import { CreateNote, SingleNote } from "./components";
import { Row, Grid, Col } from "react-flexbox-grid";
import "./Dashboard.scss";

const initialNotes: Note[] = [];

const Dashboard = () => {
  const [savedNotes, setSavedNotes] = useState(initialNotes);
  const saveNote = (note: Note) => {
    setSavedNotes([...savedNotes, note]);
  };

  const togglePinned = (id: string) => {
    setSavedNotes(
      savedNotes.map((note) => {
        if (note.id === id) {
          return { ...note, pinned: !note.pinned };
        }
        return note;
      })
    );
  };

  return (
    <div className="payO-dashboard">
      <Grid fluid className="payO-grid">
        <Row className="create-note">
          <CreateNote saveNote={saveNote} />
        </Row>
        <div className="pinned-notes">
          <p>Pinned Notes</p>
          <Row>
            {savedNotes
              .filter((note) => note.pinned)
              .map((note: Note) => {
                return (
                  <Col xs={12} sm={6} lg={3} key={note.id}>
                    <SingleNote note={note} togglePinned={togglePinned} />
                  </Col>
                );
              })}
          </Row>
        </div>
        <div className="unpinned-notes">
          <p>Others</p>
          <Row>
            {savedNotes
              .filter((note) => !note.pinned)
              .map((note: Note) => {
                return (
                  <Col xs={12} sm={6} lg={3} key={note.id}>
                    <SingleNote note={note} togglePinned={togglePinned} />
                  </Col>
                );
              })}
          </Row>
        </div>
      </Grid>
    </div>
  );
};

export default Dashboard;

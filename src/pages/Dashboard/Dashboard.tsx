import React, { useState } from "react";
import { Note } from "../../models/note";
import { CreateNote, SingleNote } from "./components";
import { Row, Grid, Col } from "react-flexbox-grid";

const initialNotes: Note[] = [];

const Dashboard = () => {
  const [savedNotes, setSavedNotes] = useState(initialNotes);
  const saveNote = (note: Note) => {
    setSavedNotes([...savedNotes, note]);
  };
  return (
    <div className="payO-dashboard">
      <Grid fluid className="payO-grid">
        <Row>
          <CreateNote saveNote={saveNote} />
        </Row>
        <Row className="notes">
          {savedNotes.map((note: Note, index: number) => {
            return (
              <Col xs={12} sm={6} lg={3} key={index}>
                <SingleNote {...note} />
              </Col>
            );
          })}
        </Row>
      </Grid>
    </div>
  );
};

export default Dashboard;

import React from "react";
import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import { getAllNotes } from "../store/notesSlice";

const NoteList = () => {
  const notes = useSelector(getAllNotes);
  return (
    <div className="notes-grid">
      {notes.map((note) => {
        return <NoteCard key={note.id} note={note} />;
      })}
    </div>
  );
};

export default NoteList;

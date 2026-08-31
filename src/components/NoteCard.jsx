import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { setEditingNote } from "../store/uiSlice";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/notesSlice";
import { useCallback } from "react";

const NoteCard = ({ note, onEdit, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (note) => {
      dispatch(deleteNote({ id: note.id }));
    },
    [deleteNote],
  );

  return (
    <div className="note-card" style={{ background: "#fff" }}>
      <div className="note-card-header">
        <h3 className="note-card-title">{note.title}</h3>
      </div>
      <p className="note-card-content">{note.content}</p>

      <div className="note-card-footer">
        <button
          className="icon-btn"
          title="edit"
          onClick={() => dispatch(setEditingNote(note))}
        >
          <MdEdit />
        </button>
        <button
          className="icon-btn"
          title="delete"
          onClick={() => handleDelete(note)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

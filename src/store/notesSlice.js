import { createSlice } from "@reduxjs/toolkit";

const INITIAL_NOTES = [
  {
    id: 1,
    title: "CURD",
    content: "CREATE, UPDATE, READ, DELETE",
    color: "#fff8b8",
  },
  {
    id: 2,
    title: "React Fundamentals",
    content: "Hooks, Props, State management",
    color: "#fff8b8",
  },
];

const loadInitialNotes = () => {
  try {
    const saved = localStorage.getItem("notes_app");
    return saved && JSON.parse(saved)?.length !== 0
      ? JSON.parse(saved)
      : INITIAL_NOTES;
  } catch {
    return INITIAL_NOTES;
  }
};

const initialState = {
  items: loadInitialNotes(),
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // addNote,
    addNote: (state, action) => {
      const { title, content } = action.payload;
      const newNote = {
        id: Date.now(),
        title,
        content,
        color: "#fff8b8",
      };
      state.items.unshift(newNote);
    },
    // updateNote,
    updateNote: (state, action) => {
      const { id, updatedFields } = action.payload;
      const index = state.items.findIndex((note) => note.id === id);
      state.items[index] = { ...state.items[index], ...updatedFields };
    },
    // DeleteNote
    deleteNote: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((e) => e.id !== id);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;

export const getAllNotes = (state) => {
  const notes = state.notes.items;
  return notes;
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingNote: null,
  deleteNote: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setEditingNote: (state, action) => {
      state.editingNote = action.payload;
    },
    setDeleteNote: (state, action) => {
      state.deleteNote = action.payload;
    },
  },
});

export const { setDeleteNote, setEditingNote } = uiSlice.actions;

export const selectEditingNote = (state) => state.ui.editingNote;

export default uiSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    ui: uiReducer,
  },
});
export default store;

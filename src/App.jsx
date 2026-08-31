import React from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteList from "./components/NoteList";
import EditModel from "./components/EditModel";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <ToastContainer position="top-right" />

      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="main-container">
        {/* CREATE (C) */}
        <NoteForm />
        {/*READ (R) */}
        <NoteList />

        <EditModel />
      </main>
    </div>
  );
};

export default App;

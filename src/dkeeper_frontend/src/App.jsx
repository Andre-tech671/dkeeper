import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { dkeeperActor } from "./services/dkeeper";
import "./index.scss";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const result = await dkeeperActor.getNotes();
      setNotes(result);
    }
    loadNotes();
  }, []);

  async function addNote(newNote) {
    await dkeeperActor.addNote(newNote);
    const updated = await dkeeperActor.getNotes();
    setNotes(updated);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, idx) => (
        <Note key={idx} content={note} />
      ))}
      <Footer />
    </div>
  );
}

export default App;


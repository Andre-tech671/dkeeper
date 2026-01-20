import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import {dkeeper_backend} from "../../declarations/dkeeper_backend";

function App() {
  const [notes, setNotes] = useState([]);

  // Function to add a new note
  function addNote(newNote) {
    setNotes(prevNotes => {
      dkeeper_backend.createNote(newNote.title, newNote.content);
      return [ newNote, ...prevNotes];
    });
  }

  // useEffect to fetch notes on every render
  // (this is not optimal, but works for demonstration purposes)
  useEffect(() => {
    console.log("Use Effect is triggered");
    fetchData();
  }, []); // Empty dependency array to run only once on mount

  // Fetch notes from backend
  // and update the state
  async function fetchData() {
    const notesArray = await dkeeper_backend.readNotes();
    setNotes(notesArray);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => { 
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState("");

  async function submitNote(event) {
    event.preventDefault();
    if (note.trim() === "") return;
    await onAdd(note);
    setNote("");
  }

  return (
    <div className="create-area">
      <form>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


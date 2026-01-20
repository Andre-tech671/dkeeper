import React from "react";
import { FaTrash } from "react-icons/fa";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default Note;

import List "mo:base/List";
import Debug "mo:base/Debug";

persistent actor Dkeeper {

  public type Note = {
    title: Text;  
    content: Text;
  };

  var notes: List.List<Note> = List.nil<Note>();

  // A function to create a new note and add it to the notes list
  public func createNote(titleText: Text, contextText: Text){

    let newNote: Note = {
      title = titleText;
      content = contextText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };

  public func readNotes(): async [Note]{
    return List.toArray(notes);
  };
}

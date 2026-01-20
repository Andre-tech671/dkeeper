import List "mo:base/List";
import Debug "mo:base/Debug";

persistent actor Dkeeper {

  public type Note = {
    title: Text;  
    content: Text;
  };

  // A persistent list to store notes
  stable var notes: List.List<Note> = List.nil<Note>();

  // A function to create a new note and add it to the notes list
  public func createNote(titleText: Text, contextText: Text){

    let newNote: Note = {
      title = titleText;
      content = contextText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };

  // A function to read all notes
  // Returns an array of notes
  public func readNotes(): async [Note]{
    return List.toArray(notes);
  };


  // A function to remove a note by its index
  public func removeNote(id: Nat){
    // Remove note at the specified index
    let listFront = List.take(notes, id);
    let listBack = List.drop(notes, id + 1);
    notes := List.append(listFront, listBack);
    Debug.print(debug_show(notes));
  };


}

import List "mo:base/List";
import Debug "mo:base/Debug";

persistent actor Dkeeper {

  public type Note = {
    title: Text;  
    content: Text;
  };

  var notes: List.List<Note> = List.nil<Note>();
  
  public func createNote(titleText: Text, contextText: Text){

    let newNote: Note = {
      title = titleText;
      content = contextText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));

  }
}

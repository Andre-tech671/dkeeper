import List "mo:base/List";

persistent actor main {
  stable var notes : List.List<Text> = null;

  public func addNote(note : Text) : async () {
    notes := List.push<Text>(note, notes);
  };

  public query func getNotes() : async [Text] {
    return List.toArray(notes);
  };
};


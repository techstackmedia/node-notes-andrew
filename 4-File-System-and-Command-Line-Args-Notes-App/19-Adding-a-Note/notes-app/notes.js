const fs = require("fs");
const getNotes = function () {
  return "Your notes";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  //   console.log(notes);

  const dublicateNote = notes.filter(function (note) {
    return note.title === title; // true if duplicate, false otherwise
  });

  if (dublicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

// load the existing notes - such as json (parse them)
// add something new to array
// save them back to file system

// e.g. load note when to remove a note

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON); // toObj
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};

/*
  export const getNotes = getNotes;
  export const addNote = addNote;
*/

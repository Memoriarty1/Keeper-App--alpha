import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((el, index) => id !== index)
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      <div className='notes-container'>
        {notes.map((noteItems, index) =>
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

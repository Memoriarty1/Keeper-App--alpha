import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }
  function submitNote() {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input onChange={handleChange} value={note.title} type="text" name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button
          onClick={submitNote}>
          Add
          </button>
      </form>
    </div>
  );
}

export default CreateArea;

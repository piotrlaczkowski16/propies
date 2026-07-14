import { useState } from "react";

function App() {
  function handleSubmit (event) {
    event.preventDefault();
    alert("your important form has been Submited");
  }

  return(
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" />
      <button type="submit">wyslij</button>
      </form>
  );
}
export default App;
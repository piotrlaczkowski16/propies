import React from "react";
function App() {
    const students = ["Rahim", "Karim", "Jamal", "alberto", "hasan", "falafel", "ceyrowsky", "NIEMCY!"]
  return (
    <div>
      {students.slice(0,7).map((student, index) =>(
        <h2 key={index}>{student}</h2>


      ))}
    </div>
  );
}

export default App;
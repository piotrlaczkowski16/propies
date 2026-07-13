import React from "react";
function App() {
    const students = [
      "Rahim", 
      "Karim", 
      "Jamal", 
      "alberto", 
      "hasan", 
      "falafel", 
      "ceyrowsky", 
      "NIEMCY!"
    ];
    const showStudents = ["falafel", "hasan"];

  return (
    <div>
      {students
        .filter((student) => showStudents.includes(student))
        .map((student, index) => (
        <h2 key={index}>{student}</h2>
        ))}
    </div>
  );
}

export default App;
function App() {
    const students = ["Rahim", "Karim", "Jamal", "alberto"]
  return (
    <div>
      {students.map ((student, index) =>(


        <h2 key={index}>{student}</h2>


      ))}
    </div>
  );
}

export default App;
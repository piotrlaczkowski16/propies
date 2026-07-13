function App() {
    const students = ["Rahim", "Karim", "Jamal", "alberto"]
  return (
    <div>
      {students.map ((student) =>(
        <h2>{student}</h2>
      ))}
    </div>
  );
}

export default App;
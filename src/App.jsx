import React from "react";
function App() {
    const students = [
      {name: "Rahim",
       age: 20,
       city: "city"
      },

      {name: "Karim",
        age: 21,
        city: "city2"
      },
      {name: "Jamal",
        age: 16,
        city: "bydgoszcz"
      } ,
      {name: "alberto",
        age: 16,
        city: "bydgoszcz3"
      }  ,
      {name: "hasan",
        age: 26,
        city: "bydgoszcz16"
      } ,
      {name: "falafel",
        age: 56,
        city: "city67"
      } ,
      {name: "ceyrowsky",
        age: "yes",
        city: "hawaii"
      }  ,
      {name: "NIEMCY!",
        age: 500,
        city: "berlin"
      } ,
    ];
    const showStudents = ["falafel", "hasan"];

  return (
    <div>
      {students.map ((student, index) => (
        <div>
          <h2>{student.name}</h2>
          <p>age:{student.age}</p>
          <p>city: {student.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
function StudentList ({students}) {
    return(
        <div>
        {students.map ((student, index)=>(
            <div key={index}>
            <h2>{student.name}</h2>
            <p>age: {student.age}</p>
            <p>city: {student.city}</p>
            </div>
        ))}
        </div>
    );
}

export default StudentList;
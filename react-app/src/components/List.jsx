import React from "react";
//list redenering
//map function
const List = () =>{
    const item = ['Apple', 'Banana', 'Cherry'];
    const student = [
        {
            "id": 1,
            "name": "Boom",
            "age": 21,
            "gender": "Male",
            "grade": "Year 2",
            "major": "Information Technology",
            "gpa": 3.85,
            "email": "hun.davin@example.com"
        },
        {
            "id": 2,
            "name": "Sok Vannak",
            "age": 22,
            "gender": "Female",
            "grade": "Year 3",
            "major": "Business Administration",
            "gpa": 3.60,
            "email": "sok.vannak@example.com"
        },
        {
            "id": 3,
            "name": "Kim Dara",
            "age": 20,
            "gender": "Male",
            "grade": "Year 1",
            "major": "Computer Science",
            "gpa": 3.75,
            "email": "kim.dara@example.com"
        }
    ]

    return(
        <>
        {
              item.map((item)=>(
                    <p>{item}</p>
                ))
        }

        {
                student.map((s)=>(
                    <h4>{s.id}, {s.name}, Grade :{s.grade}</h4>

                ))
        }
        </>
    )
}

export default List;
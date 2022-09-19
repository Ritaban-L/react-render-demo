import React, { useState } from "react";

const initState = {
    fname: 'Virat',
    lname: 'Kohli'
}

export const ObjectUseState = () =>{
    const [person,setPerson] = useState(initState)

    const changeName = () =>{
        // person.fname = 'Rohit'
        // person.lname = 'Sharma'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname='Rohit'
        newPerson.lname='Sharma'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render');

    return(
        <div>
            <button onClick={changeName}>
                {person.fname}
                {person.lname} 
            </button>
        </div>
    )
}
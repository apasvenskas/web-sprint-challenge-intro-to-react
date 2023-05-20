// Write your Character component here
import React from "react";



const Character = ({char}) => {
    return(
        <div>
            {char.map((c) => (
            <div className='main' key={c.name} style={{ border: '3px solid black', margin: '10px', padding: '20px'}}>
                <h2>Name: {c.name}</h2>
                <p>Birth Year: {c.birth_year}</p>
                <p>Films: {c.films}</p>
            </div>
            ))}
            </div>
        )
    }
    

export default Character; 
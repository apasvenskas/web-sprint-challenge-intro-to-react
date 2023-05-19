// Write your Character component here
import React from "react";



const Character = ({char}) => (
    <div>
    {
        char.forEach(element => {
            <h3>Name: {element?.name}</h3>
        })
        }
    {/* <p>Birth Day: {birthYear}</p>
    <p>Home: {homeWorld}</p> */}
</div>
)
    

export default Character; 
// Write your Character component here
import React from "react";



const Character = ({name, birthYear, homeWorld}) => {
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Birth Day: {birthYear}</p>
            <p>Home: {homeWorld}</p>
        </div>
    );
};

export default Character; 
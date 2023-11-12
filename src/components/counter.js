import { useState } from "react";


export default function Counter(){
    let [number,setNumbers] = useState(0);
    function handleCLick(){
        console.log(number);
        setNumbers(number+1)
    }
    return(
        <>
        <h1>{number}</h1>
        <button className="counterbtn"
        onClick={handleCLick}  
         >Counter</button>
        </>
    )
}
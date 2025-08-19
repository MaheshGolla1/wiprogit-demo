import React,{useState} from'react'


function IncrementDecre(){

    const [Increment,setIncrement]=useState(0);
     const updateI=()=>setIncrement(Increment+1);

    //const [Decrement,setDecrement]=useState(0);
    const updateD=()=>setIncrement(Increment-1);

   // const [Reset,setRest]=useState(0);
    const updateR=()=>setIncrement(0);

    return(
        <>
            <h1> Order here {Increment} </h1>
            <button onClick={updateI}> Increment</button>
            <button onClick={updateD}> Decrement</button>
            <button onClick={updateR}> Reset</button>


        </>

    );
}
export default IncrementDecre;
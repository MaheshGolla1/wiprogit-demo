import React,{useState} from'react'


function UpdateFunction(){

    const [Increment,setIncrement]=useState(0);
    function updateincr(){
        setIncrement(I=>I+1);
        setIncrement(I=>I+1);
        setIncrement(I=>I+1);
    }


    //const [Decrement,setDecrement]=useState(0);
    function updatedec(){
        setIncrement(I=>I-1);
        setIncrement(I=>I-1);
        setIncrement(I=>I-1);
    }


    // const [Reset,setRest]=useState(0);
    function updaterest(){
        setIncrement(0);

    }

    return(
        <>
            <h1> Order here {Increment} </h1>
            <button onClick={updateincr}> Increment</button>
            <button onClick={updatedec}> Decrement</button>
            <button onClick={updaterest}> Reset</button>


        </>

    );
}
export default UpdateFunction;
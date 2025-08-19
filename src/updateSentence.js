import React,{useState} from 'react';
function UpdateSentence(){
    const [car,setcar]=useState({year:2024,model:"ford"});
    function updateyear(event){
        setcar(c=>({...c,year:event.target.value}));
    }



    function updatemodel(event){
        setcar(c=>({...c,model:event.target.value}));
    }
    return(
        <>
            <h2>{car.year} - {car.model}</h2>
            <p> {JSON.stringify(car)}</p>
            <input type="number"  value={car.year}      onChange={updateyear}/>

            <input type="text"  value={car.model}    onChange={updatemodel}/>

        </>

    );
}
export default UpdateSentence;
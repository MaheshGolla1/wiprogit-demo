import React,{useState} from 'react';


function ColorPicker(){
    const [color,setcolor]=useState("#FFFFFF");
    function handleColor(event){
        setcolor(event.target.value);
    }


   return(
       <>
           <h1> Color picker</h1>
           <div>
               <p> Select color:{color}</p>
           </div>
           <label>select the color </label>
           <input type="color"  value={color} onChange={handleColor}/>

       </>


   );
}
export default ColorPicker;

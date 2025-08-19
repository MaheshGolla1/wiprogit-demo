import React,{useState} from 'react'
import List from "./List";
function TODoList(){

    const styles={
        color: "Green" ,
        textAlign:"center",
        width:"20px",
        height:"40px",margin:"20px 20px ",
        cursor:"pointer"
    }

  const [task,settask]=useState(["wakeup","bath","class"]);
  const [addtask,setaddtask]=useState([]);



  function Handleinputchanges(event){
      setaddtask(event.target.value);

  }
  function AddtaskM(){
      if(addtask.trim() !== "") {
          settask(t => [...t, addtask]);
          setaddtask("");
      }

  }
  function deletetask(index){
      const deletet = task.filter((_,i)=> i !== index);
      settask(deletet);


  }
  function upbuttonbytask(index){
      if(index > 0){
          const update=[...task];
          [update[index],update[index-1]]=[update[index-1],update[index]];
          settask(update);
      }

  }
    function downbuttonbytask(index){
        if(index < task.length-1){
            const update=[...task];
            [update[index],update[index+1]]=[update[index+1],update[index]];
            settask(update);
        }
    }



    return(
        <>
            <h1>TO-DO-LIST</h1>
            <div>
            <input type="text" value={addtask} placeholder="enter the task"
             onChange={Handleinputchanges} />
            <button onClick={AddtaskM}>Add</button>
            </div>

            <ol>
                {task.map((t,index)=>
                    <li key={index}>
                        <span>{t}</span>
                        <button1   style={styles}  onClick={() =>deletetask(index)}>Delete</button1>
                        <button1 style={styles} onClick={() =>upbuttonbytask(index)}>☝</button1>
                        <button1   style={styles}  onClick={() =>downbuttonbytask(index)}>👇</button1>
                    </li>)}
            </ol>


        </>


    );
}
export default TODoList;
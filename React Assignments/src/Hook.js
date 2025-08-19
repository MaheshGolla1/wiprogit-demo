
import React,{useState} from "react"
function Hook(){
    const styles={
       color: "Green" ,
           textAlign:"center"
    }

    const [Name,setName]=useState("Guest")
    const updateName=()=>setName("Mahesh");
    const [Age,setAge]=useState(0);
    const updateAge=()=>setAge(Age+1)

    const [emp,setemp]=useState(false);
    const isemp=()=>setemp(!emp)

    return(
        <>
            <p style={styles}>Name:{Name}</p>
            <button onClick={updateName}>click me</button>

            <p  style={styles}>Age:{Age}</p>
            <button onClick={updateAge}>updateAge Here</button>

            <p  style={styles}>emp:{emp?"yes":"no"}</p>
            <button onClick={isemp}>Employee</button>
        </>
    );
}
export default Hook;
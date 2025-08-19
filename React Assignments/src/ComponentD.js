import {useContext} from 'react';
import {myContext} from "./ComponentA.js";

function ComponentD(){
    const a=useContext(myContext);
    return(
        <>
            <h2 className="box"> ComponentD</h2>

            <h> bye `${a}`</h>
        </>
    );
}
export default ComponentD;
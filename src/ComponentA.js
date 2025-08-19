import ComponentB from "./ComponentB.js";
import React,{useState} from 'react';
import {createContext} from "react";
export const myContext=createContext();

function ComponentA(){
    const [user,setname]=useState("mahesh")
    return(
        <>
            <div>
            <h2 > ComponentA</h2>
                <h>HI `${user} </h>
                <myContext.Provider  value={user}>
            <ComponentB  user={user} />
                </myContext.Provider>
            </div>
        </>
    );
}
export default ComponentA;
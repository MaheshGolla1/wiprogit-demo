import ComponentC from "./ComponentC.js";

function ComponentB(){
    return(
        <>
            <h2 className="box"> ComponentB</h2>
            {/*<ComponentC user={user}/>*/}
            <ComponentC />

        </>
    );
}
export default ComponentB;
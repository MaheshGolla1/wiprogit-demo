function Food(){
    const item1='banana';
    const item2='orange';
    return(
        <>
            <ul>
                <li>Apple</li>
                <li>{item1}</li>
                <li>{item2.toUpperCase()}</li>
            </ul>
        </>

    );
}
export default Food;
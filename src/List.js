function List(props){

    // const list=["Banana","Apple","Orange","PineApple","Coconut"];

const category=props.category;
const itemlist=props.items;

    const iter=itemlist.map(fru=><li key={fru.id}>{fru.name} :
                                                    <b>{fru.calorie}</b></li>)

   // list.sort((a,b)=>a.name.LocaleCompare(b.name)); //Alhapbet
    //list.sort((a,b)=>b.name.LocaleCompare(a.name))//reverse of
   // list.sort((a,b)=>a.calorie-b.calorie); //numeric
    // list.sort((a,b)=>b.calorie-a.calorie); // reverse numeric
    //const lowcal=list.filter(furit=>furit.calorie>100)



    return(<ol>{iter}</ol>);


}
export default List;
import logo from './logo.svg';
import './App.css';
import  Header from './Header.js'
import Footer from './Footer.js'
import Food from './Food.js'
import Card from './Card.js'
import Button from './Modulebutton/Button.js'
import Button1 from './Button1.js'
import Student from './student.js'
import UserGreetings from "./UserGreetings.js";
import List from "./List.js"
import Eventclick from "./Eventclick.js";
import Hook from "./Hook.js"
import SchoolList from "./SchoolList.js"
import IncrementDecre from "./IncrementDecre.js";
import OnchangeTigger from "./OnchangeTigger.js";
import ColorPicker from "./ColorPicker.js";
import UpdateFunction from "./UpdateFunction.js";
import UpdateSentence from "./updateSentence.js";
import AddReemoveItems from "./AddReemoveItems";
import TODoList from "./TO-Do-List.js";
import ClockTime from "./ClockTime";
import ComponentA from "./ComponentA";



function App() {
    const furits=[{id:1,name:"Banana",calorie:120},
        {id:2,name:"Apple",calorie:100},
        {id:3,name:"Orange",calorie:200},
        {id:4,name:"PineApple",calorie:500},
        {id:5,name:"Coconut",calorie:900}];
    const vegeatables=[{id:5,name:"Potatoes",calorie:120},
             {id:6,name:"Onions",calorie:100},
             {id:7,name:"Tomatotes",calorie:200},
            {id:8,name:"cabaji",calorie:500},
            {id:9,name:"beans",calorie:900}];


  return (
    <div className="App">
      <Header />
        <Student Name="Mahesh" Age={23} Company="wipro"></Student>
        <Student   Name="Druva" Age={23} Company="wipro"></Student>
        <Student Name="Satya" Age={23} Company="wipro"></Student>
        <Student  Company="wipro"></Student>
        <UserGreetings  Login={true} Name="Mahesh"/>
        <List   items={furits}  category="furits"/>
        <List   items={vegeatables}  category="vegetables"/>
        <Hook/>
        <SchoolList />
        <IncrementDecre />
        <ColorPicker />
        <UpdateFunction />
        <UpdateSentence />
        <AddReemoveItems />
        <TODoList/>
        <ClockTime />
        <ClockTime />
        <ClockTime />
        <ClockTime />
        <ClockTime />
        <div>
            <h1>App Component</h1>
            <ComponentA />
        </div>


        <div >
            <Card />
            <Button />

            <Button1 />
        </div>
        <Eventclick />
        <OnchangeTigger />


        <Food />
        <Footer />




    </div>
  );
}

export default App;
/*
React hook=Special functional components to use react features
            without writing class components(React v16.8)
         (useState,useContent,useContext,useReducer,useCallback,and more....)



 useState()=A React hool that allow the creation of a stateful variable
        And a setter function to update its value in the virtual DOM


 onChange= event handler used primarily with form elements
            ex.<input>,<textarea>,<select>,<radio>
           Triggers a function every time the value of the input changes


   Useeffect()//use sidecode = React  Hook that tells React DO SOME CODE WHEN (pick one);
               This component re-renders
               This component mounts
               The state of a value

  useEffect(function,[dependencies])
  1.useEffect(()=>{})             // Runs after every Re-Render
  2.useEffect(()=>{},[])         //Runs only on mount
  3.useEffect(()=>{},[value])    // Runs on mount+when value changes

    USES
    #1.Event Listeners
    #2.DOM manipulation
    #3.Subscriptions(real-time updates)
    #4.Fetching Data from an API
    #5.clean up when a component unmounts








  */

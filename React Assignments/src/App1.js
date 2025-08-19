// App.js
import React from "react";

//importing all lab components
import GroceryList from "./Assignment/GroceryList.js";
import Car from "./Assignment/Car.js";
import Phone from "./Assignment/Phone.js";
import SweetsList from "./Assignment/SweetsList.js";
import Electronics from "./Assignment/Electronics.js";
import CanteenMenu from "./Assignment/CanteenMenu.js";
import JuiceList from "./Assignment/JuiceList.js";
import Restaurant from "./Assignment/Restaurant.js";
import TempleList from "./Assignment/TempleList.js";
import TailorShop from "./Assignment/TailorShop.js";
import BakingItemsForm from "./Assignment/BakingItemsForm.js";
import Fruits from "./Assignment/Fruits.js";
import MarriageForm from "./Assignment/MarriageForm.js";
import TelevisionManager from "./Assignment/TelevisionManager.js";
import AccessoriesForm from "./Assignment/AccessoriesForm.js";
import FlightBooking from "./Assignment/FlightBooking";
import MovieForm from "./Assignment/MovieForm";
function App1() {
    return (
        <div className="container">
            <GroceryList items={["Rice", "Wheat", "Sugar", "Milk", "Oil"]} />
            <Car brand="Toyota" model="Fortuner" color="Black" year="2022" />
            <Phone />
            <SweetsList/>
            <Electronics/>
            <CanteenMenu/>
            <JuiceList/>
            <Restaurant/>
            <TempleList/>
            <TailorShop/>
            <BakingItemsForm />
            <Fruits />
            <MarriageForm />
            <TelevisionManager />
                <AccessoriesForm />
               <FlightBooking />
                <MovieForm />
        </div>
    );
}
export default App1;
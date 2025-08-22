
import React from "react";
import CanteenItem from "./CanteenItem";

const CanteenMenu = () => {
    return (
        <div>
            <h2>Canteen Menu</h2>
            <p>Canteen: Campus Food Court</p>
            <p>Location: Block A</p>
            <p>Open Hours: 9 AM - 9 PM</p>

            {/* child components */}
            <CanteenItem name="Idli" price={30} category="Breakfast" available="Yes" />
            <CanteenItem name="Meals" price={80} category="Lunch" available="Yes" />
            <CanteenItem name="Samosa" price={20} category="Snack" available="No" />
        </div>
    );
};
export default CanteenMenu;

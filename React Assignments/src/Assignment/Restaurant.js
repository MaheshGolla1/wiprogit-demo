
import React, { Component } from "react";
import MenuItem from "./MenuItem";
// Parent class component
class Restaurant extends Component {
    render() {
        return (
            <div>
                <h2>Restaurant</h2>
                <p>Name: Spice Hub</p>
                <p>Location: City Center</p>
                <p>Open Hours: 10 AM - 11 PM</p>

                {/* Injecting the child MenuItem components */}
                <MenuItem name="Pizza" price={200} category="Main Course" available="Yes" />
                <MenuItem name="Pasta" price={150} category="Main Course" available="Yes" />
                <MenuItem name="Ice Cream" price={100} category="Dessert" available="No" />
            </div>
        );
    }
}
export default Restaurant;

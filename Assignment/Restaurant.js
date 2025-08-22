
import React, { Component } from "react";
import MenuItem from "./MenuItem";
// Parent class component
class Restaurant extends Component {
    render() {
        return (
            <div>
                <h2>Restaurant</h2>
                <p>Name: Spice Hub</p>
                <p>Location: Block B,first floor</p>
                <p>Open Hours: 10 AM - 10 PM</p>

                {/* Injecting the child MenuItem components */}
                <MenuItem name="Paneer butter masala" price={150} category="Main Course" available="Yes" />
                <MenuItem name="Chicken biryani" price={200} category="Main Course" available="Yes" />
                <MenuItem name="Masala dosa" price={80} category="breakfast" available="Yes" />
                <MenuItem name="Gulab jamun" price={40} category="dessert" available="no"/>
                <MenuItem name="veg thali" price={120} category="combo" available="Yes"/>

            </div>
        );
    }
}
export default Restaurant;

// MenuItem.jsx
import React, { Component } from "react";

class MenuItem extends Component {
    render() {
        const { name, price, category, available } = this.props;

        return (
            <p>
                {name} - ₹{price} | {category} | Available: {available}
            </p>
        );
    }
}

export default MenuItem;

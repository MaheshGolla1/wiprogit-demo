
import React, { Component } from "react";

// Class Component Car
// Uses props to display details
class Car extends Component {
    render() {
        // Destructure props
        const { brand, model, color, year } = this.props;

        return (
            <div>
                <h2>Car Details</h2>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
            </div>
        );
    }
}

export default Car;

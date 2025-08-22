import React, { useState } from "react";
// Arrow functional component
const Phone = () => {
    // we declare the states
    const [brand] = useState("Samsung");
    const [model] = useState("Galaxy S24");
    const [price, setPrice] = useState(79999);
    // Function to update the price when we click the button
    const updatePrice = () => {
        setPrice(price + 5000);
    };
    return (
        <div>
            <h2>Phone Details</h2>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Price: ₹{price}</p>
            {/* Button updates price when we click */}
            <button onClick={updatePrice}>Increase Price</button>
        </div>
    );
};
export default Phone;
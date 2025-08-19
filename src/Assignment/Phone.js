// Phone.jsx
import React, { useState } from "react";

// Arrow functional component
const Phone = () => {
    // useState hooks for phone details
    const [brand] = useState("Samsung");
    const [model] = useState("Galaxy S24");
    const [price, setPrice] = useState(60000);

    // Function to update price
    const updatePrice = () => {
        setPrice(price + 5000);
    };

    return (
        <div>
            <h2>Phone Details</h2>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Price: ₹{price}</p>

            {/* Button updates price */}
            <button onClick={updatePrice}>Increase Price</button>
        </div>
    );
};

export default Phone;

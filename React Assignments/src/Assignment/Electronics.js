// Electronics.jsx
import React, { useState } from "react";

function Electronics() {
    // useState hooks for details
    const [name] = useState("Laptop");
    const [brand, setBrand] = useState("Dell");
    const [price, setPrice] = useState(50000);

    return (
        <div>
            <h2>Electronics</h2>
            <p>Name: {name}</p>
            <p>Brand: {brand}</p>
            <p>Price: ₹{price}</p>

            {/* Button to update brand */}
            <button onClick={() => setBrand("HP")}>Change Brand</button>

            {/* Button to increase price */}
            <button onClick={() => setPrice(price + 5000)}>Increase Price</button>
        </div>
    );
}

export default Electronics;

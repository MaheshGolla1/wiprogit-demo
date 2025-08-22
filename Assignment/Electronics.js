import React, { useState } from "react";
function Electronics() {
    // declaring states for electronic items
    const [name] = useState("Laptop");
    const [brand, setBrand] = useState("Dell");
    const [price, setPrice] = useState(5500);

    return (
        <div>
            <h2>Electronics</h2>
            <p>Name: {name}</p>
            <p>Brand: {brand}</p>
            <p>Price: ₹{price}</p>

            {/* Button to update brand when we click*/}
            <button onClick={() => setBrand("HP")}>Change Brand</button>

            {/* Button to increase price when we click it*/}
            <button onClick={() => setPrice(price + 5000)}>Increase Price</button>
        </div>
    );
}
export default Electronics;
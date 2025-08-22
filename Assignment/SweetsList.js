// SweetsList.jsx
import React from "react";
//functional component
function SweetsList() {
    // Array of JSON objects
    const sweets = [
        { id: 1, name: "laddu", price: 50 },
        { id: 2, name: "jalebi", price: 40 },
        { id: 3, name: "rasgulla", price: 60 },
        {id: 4, name: "gulab jamun", price:70},
    ];

    return (
        <div>
            <h2>Sweets List</h2>
            {/* Map through sweets array */}
            {sweets.map((sweet) => (
                <div key={sweet.id}>
                    {sweet.name} - Price: ₹{sweet.price}
                </div>
            ))}
        </div>
    );
}

export default SweetsList;

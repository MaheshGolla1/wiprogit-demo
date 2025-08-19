// SweetsList.jsx
import React from "react";

function SweetsList() {
    // Array of JSON objects
    const sweets = [
        { id: 1, name: "Gulab Jamun", price: 100 },
        { id: 2, name: "Rasgulla", price: 80 },
        { id: 3, name: "Kaju Katli", price: 150 },
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

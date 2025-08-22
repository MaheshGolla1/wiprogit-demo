// CanteenItem.jsx
import React from "react";

// Arrow component accepts props and displays details
const CanteenItem = ({ name, price, category, available }) => {
    return (
        <div>
            <p>
                {name} - ₹{price} | {category} | Available: {available}
            </p>
        </div>
    );
};

export default CanteenItem;

// Juice.jsx
import React from "react";

// Juice Component it displays a single juice row
const Juice = ({ id, name, price }) => {
    return (
        <tr>
            <td className="table-cell">{id}</td>
            <td className="table-cell">{name}</td>
            <td className="table-cell">₹ {price}</td>
        </tr>
    );
};

export default Juice;

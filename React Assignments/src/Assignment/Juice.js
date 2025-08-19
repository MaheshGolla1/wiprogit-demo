// Juice.jsx
import React from "react";

// it displays a single juice row inside a table
const Juice = ({ id, name, price }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>₹{price}</td>
        </tr>
    );
};
export default Juice;

// JuiceList.jsx
import React from "react";
import Juice from "./Juice.js";

const JuiceList = () => {
    const juices = [
        { id: 1, name: "Mango", price: 50 },
        { id: 2, name: "Orange", price: 40 },
        { id: 3, name: "Apple", price: 60 },
    ];

    return (
        <div>
            <h2>Juice List</h2>
            {/* Table with header row */}
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price (₹)</th>
                </tr>
                </thead>
                {/* it maps juices to Juice component */}
                <tbody>
                {juices.map((juice) => (
                    <Juice key={juice.id} {...juice} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default JuiceList;

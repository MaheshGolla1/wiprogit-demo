import React from "react";
import Juice from "./Juice";

const JuiceList = () => {
    // Array of juice objects
    const juices = [
        { id: 1, name: "Orange Juice", price: 80 },
        { id: 2, name: "Apple Juice", price: 100 },
        { id: 3, name: "Mango Juice", price: 120 },
    ];

    return (
        <div className="juice-container">
            {/* Internal CSS */}
            <style>
                {`
          .juice-container {
            margin-top: 30px;
            padding-left: 50px; /* Push table a little to the right */
          }
          .juice-title {
            font-weight: bold;
            margin-bottom: 20px;
            text-align: left; /* Align title to left */
          }
          .juice-table {
            border-collapse: collapse;
            width: 60%;
            text-align: left; /* Table content aligned left */
          }
          .juice-table, .table-cell {
            border: 2px solid black;
          }
          .table-cell {
            padding: 10px;
          }
        `}
            </style>

            {/* Title */}
            <h2 className="juice-title">Juice Menu</h2>

            {/* Table */}
            <table className="juice-table">
                <thead>
                <tr>
                    <th className="table-cell">ID</th>
                    <th className="table-cell">Juice Name</th>
                    <th className="table-cell">Price</th>
                </tr>
                </thead>
                <tbody>
                {juices.map((juice) => (
                    <Juice
                        key={juice.id}
                        id={juice.id}
                        name={juice.name}
                        price={juice.price}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default JuiceList;

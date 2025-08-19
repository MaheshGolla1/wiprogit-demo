
import React from "react";

const TempleList = () => {
    //array of temples to display
    const temples = [
        {
            name: "Tirupati Balaji",
            location: "Andhra Pradesh",
            deities: ["Balaji", "Padmavati"],
        },
        {
            name: "Meenakshi Temple",
            location: "Madurai",
            deities: ["Meenakshi", "Sundareswarar"],
        },
        {
            name :"jagannath temple",
            location:"puri,odisa",
            deities:["jagannath","balabhadra","subadra"]
        }
    ];

    return (
        <div>
            <h2>Temple List</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Temple</th>
                    <th>Location</th>
                    <th>Deities</th>
                </tr>
                </thead>
                <tbody>
                {/* Outer map will iterate the temples */}
                {temples.map((temple, index) => (
                    <tr key={index}>
                        <td>{temple.name}</td>
                        <td>{temple.location}</td>
                        <td>
                            {/* Inner map will iterate the deities */}
                            <ul>
                                {temple.deities.map((deity, i) => (
                                    <li key={i}>{deity}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TempleList;

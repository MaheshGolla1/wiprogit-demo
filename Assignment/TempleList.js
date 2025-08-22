import React from "react";

const TempleList = () => {
    // 🔹 Array of temples with nested deities
    const temples = [
        {
            id: 1,
            name: "Meenakshi Amman Temple",
            location: "Madurai, Tamil Nadu",
            deities: ["Meenakshi", "Sundareshwar"],
        },
        {
            id: 2,
            name: "Sri Venkateswara Temple",
            location: "Tirupati, Andhra Pradesh",
            deities: ["Venkateswara", "Lakshmi"],
        },
        {
            id: 3,
            name: "Jagannath Temple",
            location: "Puri, Odisha",
            deities: ["Jagannath", "Balabhadra", "Subhadra"],
        },
    ];

    return (
        <div style={{ margin: "20px" }}>
            {/* Title with emoji */}
            <h2>
                Famous Temples in India
            </h2>

            {/* Table */}
            <table style={{ width: "100%", borderCollapse: "collapse" }} border="1">
                <thead>
                <tr style={{ backgroundColor: "#f8f9fa" }}>
                    <th style={{ padding: "8px" }}>ID</th>
                    <th style={{ padding: "8px" }}>Temple Name</th>
                    <th style={{ padding: "8px" }}>Location</th>
                    <th style={{ padding: "8px" }}>Deities</th>
                </tr>
                </thead>
                <tbody>
                {temples.map((temple) => (
                    <tr key={temple.id}>
                        <td style={{ padding: "8px", textAlign: "center" }}>
                            {temple.id}
                        </td>
                        <td style={{ padding: "8px" }}>{temple.name}</td>
                        <td style={{ padding: "8px" }}>{temple.location}</td>
                        <td style={{ padding: "8px" }}>
                            <ul style={{ margin: 0, paddingLeft: "20px" }}>
                                {/* 🔹 Nested map for deities */}
                                {temple.deities.map((deity, index) => (
                                    <li key={index}>{deity}</li>
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

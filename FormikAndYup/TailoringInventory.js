import React, { useEffect, useState } from "react";  // React Hooks
import axios from "axios"; // For API calls

const TailoringInventory = () => {
    const [items, setItems] = useState([]); // State to hold inventory data
    const [loading, setLoading] = useState(true); // Loader state

    // Fetch data from JSON server on component mount
    useEffect(() => {
        axios
            .get("http://localhost:3003/tailoringItems") // API endpoint
            .then((response) => {
                setItems(response.data); // Save response data to state
                setLoading(false); // Stop loading
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    // Show loading message until data is fetched
    if (loading) {
        return <p className="text-center mt-4">Loading inventory...</p>;
    }

    return (
        <div className="container mt-5">
            {/* Heading */}
            <h2 className="text-center mb-4">Tailoring Inventory</h2>

            {/* Bootstrap Table */}
            <table className="table table-bordered table-striped text-center">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {/* Map over items and render table rows */}
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.size}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TailoringInventory;

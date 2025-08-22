import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function BakingItemsForm() {
    // State for form fields
    const [formData, setFormData] = useState({
        itemName: "",
        quantity: "",
        ingredients: "",
        bakingTime: "",
        category: "Cake"
    });
    // State for storing submitted baking items
    const [bakingItems, setBakingItems] = useState([]);
    // Handle input changes for all fields
    const handleChange = (e) => {
        setFormData({
            ...formData, // it keeps the previous values
            [e.target.name]: e.target.value //it updates the current field
        });
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents from page reloading
        // Add formData to bakingItems list using spread operator
        setBakingItems([...bakingItems, formData]);
        // Resetting the form fields
        setFormData({
            itemName: "",
            quantity: "",
            ingredients: "",
            bakingTime: "",
            category: "Cake"
        });
    };
    return (
        <div className="container mt-4">
            <div className="card p-4">
                <h3 className="mb-3"> Baking Items Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Item Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Ingredients</label>
                        <input
                            type="text"
                            className="form-control"
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Baking Time (minutes)</label>
                        <input
                            type="number"
                            className="form-control"
                            name="bakingTime"
                            value={formData.bakingTime}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Category</label>
                        <select
                            className="form-control"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="Cake">Cake</option>
                            <option value="Bread">Bread</option>
                            <option value="Pastry">Pastry</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                        Add Baking Item
                    </button>
                </form>
            </div>

            {/* Table Section */}
            {bakingItems.length > 0 && (
                <div className="card mt-4 p-4">
                    <h3>Baking Items List</h3>
                    <table className="table table-bordered mt-3">
                        <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Ingredients</th>
                            <th>Baking Time</th>
                            <th>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bakingItems.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.itemName}</td>
                                <td>{item.quantity}</td>
                                <td>{item.ingredients}</td>
                                <td>{item.bakingTime} mins</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BakingItemsForm;

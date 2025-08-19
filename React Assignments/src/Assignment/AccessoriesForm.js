import React, { Component } from "react";

class AccessoriesForm extends Component {
    constructor(props) {
        super(props);
        // Initializng the state
        this.state = {
            accessoryName: "",
            description: "",
            category: "",
            brand: "",
            inStock: false,
            warranty: "",
            submittedData: [] // Stores all the values
        };
    }
    // it handles the input changes for all values
    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({
            [name]: type === "checkbox" ? checked : value
        });
    };
    // form submit
    handleSubmit = (e) => {
        e.preventDefault();
        // Save the form data into submittedData array
        const newEntry = {
            accessoryName: this.state.accessoryName,
            description: this.state.description,
            category: this.state.category,
            brand: this.state.brand,
            inStock: this.state.inStock,
            warranty: this.state.warranty
        };
        this.setState((prevState) => ({
            submittedData: [...prevState.submittedData, newEntry],
            // Clear form after submission
            accessoryName: "",
            description: "",
            category: "",
            brand: "",
            inStock: false,
            warranty: ""
        }));
    };
    render() {
        return (
            <div className="container mt-4">
                <h2 className="text-center mb-4">Accessories Form</h2>
                <form onSubmit={this.handleSubmit} className="border p-4 rounded bg-light">
                    {/* Text input */}
                    <div className="mb-3">
                        <label className="form-label">Accessory Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="accessoryName"
                            value={this.state.accessoryName}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    {/* Textarea */}
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            rows="3"
                        ></textarea>
                    </div>
                    {/* Select */}
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                            className="form-select"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                            required
                        >
                            <option value="">-- Select Category --</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Sports">Sports</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    {/* Radio Buttons */}
                    <div className="mb-3">
                        <label className="form-label">Brand</label>
                        <div>
                            <input
                                type="radio"
                                name="brand"
                                value="Sony"
                                checked={this.state.brand === "Sony"}
                                onChange={this.handleChange}
                            />{" "}
                            Sony
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="brand"
                                value="Samsung"
                                checked={this.state.brand === "Samsung"}
                                onChange={this.handleChange}
                            />{" "}
                            Samsung
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="brand"
                                value="Other"
                                checked={this.state.brand === "Other"}
                                onChange={this.handleChange}
                            />{" "}
                            Other
                        </div>
                    </div>
                    {/* Checkbox */}
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="inStock"
                            checked={this.state.inStock}
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label">Available in Stock</label>
                    </div>
                    {/* Number */}
                    <div className="mb-3">
                        <label className="form-label">Warranty (Years)</label>
                        <input
                            type="number"
                            className="form-control"
                            name="warranty"
                            value={this.state.warranty}
                            onChange={this.handleChange}
                            min="0"
                            max="10"
                        />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
                {/* Submitted Data Table */}
                {this.state.submittedData.length > 0 && (
                    <div className="mt-5">
                        <h3>Submitted Data</h3>
                        <table className="table table-bordered table-striped">
                            <thead className="table-dark">
                            <tr>
                                <th>Accessory Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>In Stock</th>
                                <th>Warranty</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.submittedData.map((entry, idx) => (
                                <tr key={idx}>
                                    <td>{entry.accessoryName}</td>
                                    <td>{entry.description}</td>
                                    <td>{entry.category}</td>
                                    <td>{entry.brand}</td>
                                    <td>{entry.inStock ? "Yes" : "No"}</td>
                                    <td>{entry.warranty} years</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}
export default AccessoriesForm;

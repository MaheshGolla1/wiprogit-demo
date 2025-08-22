import React, { Component } from "react";
class MarriageForm extends Component {
    constructor(props) {
        super(props);
        // Initializing state for form inputs and submitted details
        this.state = {
            brideName: "",
            groomName: "",
            date: "",
            venue: "",
            submitted: false // it shows details only after submission
        };
    }
    //it handles the input changes for all fields
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    // Handle form submission
    handleSubmit = (e) => {
        e.preventDefault(); // it prevents the page reload
        this.setState({ submitted: true }); // it marks form as submitted
    };
    render() {
        return (
            <div className="container mt-5">
                <div className="card p-4">
                    <h3 className="text-center mb-3">Marriage Form</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mb-3">
                            <label>Bride Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="brideName"
                                value={this.state.brideName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Groom Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="groomName"
                                value={this.state.groomName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Marriage Date</label>
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Venue</label>
                            <input
                                type="text"
                                className="form-control"
                                name="venue"
                                value={this.state.venue}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </form>
                </div>
                {/* it shows submitted details only after form is submitted */}
                {this.state.submitted && (
                    <div className="card mt-4 p-4">
                        <h3 className="text-center mb-3">Marriage Details</h3>
                        <p>
                            <strong>Bride Name:</strong> {this.state.brideName}
                        </p>
                        <p>
                            <strong>Groom Name:</strong> {this.state.groomName}
                        </p>
                        <p>
                            <strong>Date:</strong> {this.state.date}
                        </p>
                        <p>
                            <strong>Venue:</strong> {this.state.venue}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}
export default MarriageForm;
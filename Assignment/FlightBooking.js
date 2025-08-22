import React, { Component, createRef } from "react";
// Controlled Component
class FlightBookingControlled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passengerName: "",
            email: "",
            gender: "",
            mealPreference: "",
            specialRequest: "",
            submitted: false,
        };
    }
    // it handle input change for controlled inputs
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    // it handle form submission
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
    };
    render() {
        return (
            <div className="col-md-6">
                <h3>Controlled Flight Booking Form</h3>
                <form onSubmit={this.handleSubmit} className="border p-3 rounded">
                    <div className="mb-3">
                        <label className="form-label">Passenger Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="passengerName"
                            value={this.state.passengerName}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={this.state.gender === "Male"}
                                onChange={this.handleChange}
                                className="form-check-input me-2"
                            />
                            Male
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={this.state.gender === "Female"}
                                onChange={this.handleChange}
                                className="form-check-input ms-3 me-2"
                            />
                            Female
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Meal Preference</label>
                        <select
                            className="form-select"
                            name="mealPreference"
                            value={this.state.mealPreference}
                            onChange={this.handleChange}
                            required
                        >
                            <option value="">-- Select --</option>
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Request</label>
                        <textarea
                            className="form-control"
                            name="specialRequest"
                            rows="2"
                            value={this.state.specialRequest}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

                {/* it display submitted data in a Bootstrap Table */}
                {this.state.submitted && (
                    <div className="mt-3">
                        <table className="table table-bordered">
                            <thead className="table-dark">
                            <tr>
                                <th>Passenger Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Meal</th>
                                <th>Special Request</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.passengerName}</td>
                                <td>{this.state.email}</td>
                                <td>{this.state.gender}</td>
                                <td>{this.state.mealPreference}</td>
                                <td>{this.state.specialRequest}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}

//Uncontrolled Component
class FlightBookingUncontrolled extends Component {
    constructor(props) {
        super(props);

        // Create refs for each input
        this.flightNumberRef = createRef();
        this.sourceRef = createRef();
        this.destinationRef = createRef();
        this.dateRef = createRef();
        this.termsRef = createRef();

        this.state = { submittedData: null };
    }
    //it handles form submission
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submittedData: {
                flightNumber: this.flightNumberRef.current.value,
                source: this.sourceRef.current.value,
                destination: this.destinationRef.current.value,
                travelDate: this.dateRef.current.value,
                terms: this.termsRef.current.checked ? "Yes" : "No",
            },
        });
    };
    render() {
        return (
            <div className="col-md-6">
                <h3>Uncontrolled Flight Booking Form</h3>
                <form onSubmit={this.handleSubmit} className="border p-3 rounded">
                    <div className="mb-3">
                        <label className="form-label">Flight Number</label>
                        <input type="text" className="form-control" ref={this.flightNumberRef} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Source</label>
                        <input type="text" className="form-control" ref={this.sourceRef} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Destination</label>
                        <input type="text" className="form-control" ref={this.destinationRef} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Travel Date</label>
                        <input type="date" className="form-control" ref={this.dateRef} required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" ref={this.termsRef} />
                        <label className="form-check-label">Terms Accepted</label>
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
                {/* it display submitted data*/}
                {this.state.submittedData && (
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Flight Details</h5>
                            <p><b>Flight Number:</b> {this.state.submittedData.flightNumber}</p>
                            <p><b>Source:</b> {this.state.submittedData.source}</p>
                            <p><b>Destination:</b> {this.state.submittedData.destination}</p>
                            <p><b>Travel Date:</b> {this.state.submittedData.travelDate}</p>
                            <p><b>Terms Accepted:</b> {this.state.submittedData.terms}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

//Parent Component
class FlightBooking extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <FlightBookingControlled />
                    <FlightBookingUncontrolled />
                </div>
            </div>
        );
    }
}

export default FlightBooking;

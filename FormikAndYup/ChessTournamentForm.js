// ChessTournamentForm.jsx
import React, { useState } from "react"; // Import React and useState hook
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components
import * as Yup from "yup"; // Import Yup for validation
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

//  Validation schema using Yup
const validationSchema = Yup.object({
    playerName: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"), // Name must have min 3 chars

    dob: Yup.date()
        .required("Required")
        .test("age", "Age must be between 5 and 90 years", function (value) {
            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();
            return age >= 5 && age <= 90; // Age check
        }),

    gender: Yup.string().required("Required"), // Gender required

    fideId: Yup.string()
        .matches(/^\d{8}$/, "FIDE ID must be exactly 8 digits")
        .required("Required"),

    rating: Yup.number()
        .min(100, "Rating must be at least 100")
        .max(3000, "Rating cannot exceed 3000")
        .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"), // Email validation

    mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Must be 10 digits starting with 6-9")
        .required("Required"),

    country: Yup.string().required("Required"), // Country required

    category: Yup.string().required("Required"), // Category required

    parentContact: Yup.string().when("category", {
        is: "U-12", // If category is U-12, then parent contact required
        then: (schema) =>
            schema.matches(/^[6-9]\d{9}$/, "Must be valid 10-digit number").required(),
        otherwise: (schema) => schema.notRequired(),
    }),

    paymentConfirmed: Yup.boolean().oneOf(
        [true],
        "Payment confirmation required"
    ), // Checkbox must be checked

    terms: Yup.boolean().oneOf([true], "You must accept Terms & Conditions"),
});

// Component starts
const ChessTournamentForm = () => {
    const [players, setPlayers] = useState([]); // State to store submitted players

    // Initial form values
    const initialValues = {
        playerName: "",
        dob: "",
        gender: "",
        fideId: "",
        rating: "",
        email: "",
        mobile: "",
        country: "",
        category: "",
        parentContact: "",
        paymentConfirmed: false,
        terms: false,
    };

    // Handle form submission
    const handleSubmit = (values, { resetForm }) => {
        console.log("Registration Data:", values); // Log data to console
        setPlayers([...players, values]); // Append to players list
        resetForm(); // Reset form after submit
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Chess Tournament Registration</h2>

            {/* Formik wrapper */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="border p-4 shadow rounded">
                    {/* Player Name */}
                    <div className="mb-3">
                        <label>Player Name</label>
                        <Field name="playerName" className="form-control" />
                        <ErrorMessage
                            name="playerName"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-3">
                        <label>Date of Birth</label>
                        <Field type="date" name="dob" className="form-control" />
                        <ErrorMessage name="dob" component="div" className="text-danger" />
                    </div>

                    {/* Gender */}
                    <div className="mb-3">
                        <label>Gender</label>
                        <Field as="select" name="gender" className="form-control">
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage name="gender" component="div" className="text-danger" />
                    </div>

                    {/* FIDE ID */}
                    <div className="mb-3">
                        <label>FIDE ID</label>
                        <Field name="fideId" className="form-control" />
                        <ErrorMessage name="fideId" component="div" className="text-danger" />
                    </div>

                    {/* Rating */}
                    <div className="mb-3">
                        <label>Rating</label>
                        <Field name="rating" type="number" className="form-control" />
                        <ErrorMessage name="rating" component="div" className="text-danger" />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label>Email</label>
                        <Field name="email" type="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    {/* Mobile */}
                    <div className="mb-3">
                        <label>Mobile Number</label>
                        <Field name="mobile" className="form-control" />
                        <ErrorMessage name="mobile" component="div" className="text-danger" />
                    </div>

                    {/* Country */}
                    <div className="mb-3">
                        <label>Country</label>
                        <Field name="country" className="form-control" />
                        <ErrorMessage name="country" component="div" className="text-danger" />
                    </div>

                    {/* Category */}
                    <div className="mb-3">
                        <label>Category</label>
                        <Field as="select" name="category" className="form-control">
                            <option value="">Select</option>
                            <option value="U-12">Under 12</option>
                            <option value="U-18">Under 18</option>
                            <option value="Open">Open</option>
                        </Field>
                        <ErrorMessage
                            name="category"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    {/* Parent Contact */}
                    <div className="mb-3">
                        <label>Parent Contact (Only for U-12)</label>
                        <Field name="parentContact" className="form-control" />
                        <ErrorMessage
                            name="parentContact"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    {/* Checkboxes */}
                    <div className="form-check">
                        <Field
                            type="checkbox"
                            name="paymentConfirmed"
                            className="form-check-input"
                        />
                        <label className="form-check-label">Payment Confirmed</label>
                        <ErrorMessage
                            name="paymentConfirmed"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-check mb-3">
                        <Field type="checkbox" name="terms" className="form-check-input" />
                        <label className="form-check-label">
                            I accept Terms & Conditions
                        </label>
                        <ErrorMessage
                            name="terms"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </Form>
            </Formik>

            {/*  Display Table */}
            <div className="mt-4">
                <h4>Registered Players</h4>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>FIDE ID</th>
                        <th>Rating</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Country</th>
                        <th>Category</th>
                        <th>Parent Contact</th>
                    </tr>
                    </thead>
                    <tbody>
                    {players.map((p, index) => (
                        <tr key={index}>
                            <td>{p.playerName}</td>
                            <td>{p.dob}</td>
                            <td>{p.gender}</td>
                            <td>{p.fideId}</td>
                            <td>{p.rating}</td>
                            <td>{p.email}</td>
                            <td>{p.mobile}</td>
                            <td>{p.country}</td>
                            <td>{p.category}</td>
                            <td>{p.parentContact}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChessTournamentForm;

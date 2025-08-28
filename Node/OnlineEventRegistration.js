// App.js
// Online Event Registration System using React, Formik, Yup, Bootstrap, and HOC

import React, { useState } from "react";
// Import Formik for form handling
import { Formik, Form, Field, ErrorMessage } from "formik";
// Import Yup for validation
import * as Yup from "yup";
// Import Bootstrap for layout
import "bootstrap/dist/css/bootstrap.min.css";

// ---------------------- HOC for Form Sections ----------------------
// This Higher-Order Component wraps each form section with common styles,
// header, error handling, and consistent layout
const withFormSection = (Component, title) => {
    return (props) => (
        <div className="card mb-3 shadow-sm">
            <div className="card-header bg-primary text-white">{title}</div>
            <div className="card-body">
                <Component {...props} />
            </div>
        </div>
    );
};

// ---------------------- Personal Details Component ----------------------
const PersonalDetails = () => (
    <>
        {/* Name field */}
        <div className="mb-3">
            <label className="form-label">Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        {/* Email field */}
        <div className="mb-3">
            <label className="form-label">Email</label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
        </div>
        {/* Phone field */}
        <div className="mb-3">
            <label className="form-label">Phone</label>
            <Field type="text" name="phone" className="form-control" />
            <ErrorMessage name="phone" component="div" className="text-danger" />
        </div>
        {/* Organization field */}
        <div className="mb-3">
            <label className="form-label">Organization</label>
            <Field type="text" name="organization" className="form-control" />
            <ErrorMessage name="organization" component="div" className="text-danger" />
        </div>
    </>
);

// ---------------------- Ticket Selection Component ----------------------
const TicketSelection = () => (
    <>
        {/* Ticket Type dropdown */}
        <div className="mb-3">
            <label className="form-label">Ticket Type</label>
            <Field as="select" name="ticketType" className="form-select">
                <option value="">Select</option>
                <option value="Regular">Regular</option>
                <option value="VIP">VIP</option>
                <option value="Student">Student</option>
            </Field>
            <ErrorMessage name="ticketType" component="div" className="text-danger" />
        </div>
        {/* Quantity field */}
        <div className="mb-3">
            <label className="form-label">Quantity</label>
            <Field type="number" name="quantity" className="form-control" min="1" />
            <ErrorMessage name="quantity" component="div" className="text-danger" />
        </div>
    </>
);

// ---------------------- Session Preferences Component ----------------------
const SessionPreferences = () => (
    <>
        <label className="form-label">Session Preferences</label>
        <div role="group" aria-labelledby="checkbox-group">
            <label className="me-3">
                <Field type="checkbox" name="sessions" value="Workshop A" /> Workshop A
            </label>
            <label className="me-3">
                <Field type="checkbox" name="sessions" value="Panel B" /> Panel B
            </label>
            <label>
                <Field type="checkbox" name="sessions" value="Keynote" /> Keynote
            </label>
        </div>
        <ErrorMessage name="sessions" component="div" className="text-danger" />
    </>
);

// ---------------------- Payment Details Component ----------------------
const PaymentDetails = () => (
    <>
        {/* Payment Method dropdown */}
        <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <Field as="select" name="paymentMethod" className="form-select">
                <option value="">Select</option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </Field>
            <ErrorMessage name="paymentMethod" component="div" className="text-danger" />
        </div>
        {/* Promo Code field */}
        <div className="mb-3">
            <label className="form-label">Promo Code</label>
            <Field type="text" name="promoCode" className="form-control" />
        </div>
        {/* Invoice Address field */}
        <div className="mb-3">
            <label className="form-label">Invoice Address</label>
            <Field type="text" name="invoiceAddress" className="form-control" />
        </div>
    </>
);

// Wrap each component with HOC for consistent layout
const PersonalDetailsSection = withFormSection(PersonalDetails, "Personal Details");
const TicketSelectionSection = withFormSection(TicketSelection, "Ticket Selection");
const SessionPreferencesSection = withFormSection(SessionPreferences, "Session Preferences");
const PaymentDetailsSection = withFormSection(PaymentDetails, "Payment Details");

// ---------------------- Validation Schema with Yup ----------------------
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    organization: Yup.string().required("Organization is required"),
    ticketType: Yup.string().required("Ticket type is required"),
    quantity: Yup.number().min(1, "At least 1 ticket required").required("Quantity is required"),
    sessions: Yup.array().min(1, "Select at least one session"),
    paymentMethod: Yup.string().required("Payment method is required"),
});

// ---------------------- Main App ----------------------
function OnlineEventRegistration() {
    const [submittedData, setSubmittedData] = useState(null);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">ONLINE EVENT REGISTRATION</h2>

            {/* If form is submitted, show confirmation page */}
            {submittedData ? (
                <div className="alert alert-success">
                    <h4>Registration Successful!</h4>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            ) : (
                // Formik Form
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        organization: "",
                        ticketType: "",
                        quantity: 1,
                        sessions: [],
                        paymentMethod: "",
                        promoCode: "",
                        invoiceAddress: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        setSubmittedData(values);
                    }}
                >
                    {() => (
                        <Form>
                            {/* Render each section */}
                            <PersonalDetailsSection />
                            <TicketSelectionSection />
                            <SessionPreferencesSection />
                            <PaymentDetailsSection />

                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    REGISTER
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}

export default OnlineEventRegistration;

import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const PlayerSchema = Yup.object().shape({
    name: Yup.string().min(3, "At least 3 characters").required("Required"),
    age: Yup.number().min(16).max(40).required("Required"),
    position: Yup.string().required("Required"),
    club: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    goals: Yup.number().min(0).required("Required"),
    matchesPlayed: Yup.number().min(0).required("Required"),
    jerseyNumber: Yup.number().min(1).max(99).required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contactNumber: Yup.string().length(10, "Must be 10 digits").required("Required"),
});

function PlayerForm({ addPlayer, updatePlayer, selectedPlayer, clearSelection }) {
    return (
        <Formik
            enableReinitialize
            initialValues={selectedPlayer || {
                name: "",
                age: "",
                position: "",
                club: "",
                nationality: "",
                goals: "",
                matchesPlayed: "",
                jerseyNumber: "",
                email: "",
                contactNumber: "",
            }}
            validationSchema={PlayerSchema}
            onSubmit={(values, { resetForm }) => {
                if (values.id) {
                    updatePlayer(values); // If player has id → update
                } else {
                    addPlayer(values); // Else → add new
                }
                resetForm();
                clearSelection();
            }}
        >
            {({ resetForm }) => (
                <Form className="card p-4 mb-4 shadow">
                    <h4 className="mb-3">Player Form</h4>

                    {/* Row 1 */}
                    <div className="row mb-3">
                        <div className="col">
                            <label>Name</label>
                            <Field name="name" className="form-control" />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="col">
                            <label>Age</label>
                            <Field type="number" name="age" className="form-control" />
                            <ErrorMessage name="age" component="div" className="text-danger" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="row mb-3">
                        <div className="col">
                            <label>Position</label>
                            <Field as="select" name="position" className="form-control">
                                <option value="">Select Position</option>
                                <option>Forward</option>
                                <option>Midfielder</option>
                                <option>Defender</option>
                                <option>Goalkeeper</option>
                            </Field>
                            <ErrorMessage name="position" component="div" className="text-danger" />
                        </div>
                        <div className="col">
                            <label>Club</label>
                            <Field name="club" className="form-control" />
                            <ErrorMessage name="club" component="div" className="text-danger" />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="row mb-3">
                        <div className="col">
                            <label>Nationality</label>
                            <Field name="nationality" className="form-control" />
                            <ErrorMessage name="nationality" component="div" className="text-danger" />
                        </div>
                        <div className="col">
                            <label>Goals</label>
                            <Field type="number" name="goals" className="form-control" />
                            <ErrorMessage name="goals" component="div" className="text-danger" />
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="row mb-3">
                        <div className="col">
                            <label>Matches Played</label>
                            <Field type="number" name="matchesPlayed" className="form-control" />
                            <ErrorMessage name="matchesPlayed" component="div" className="text-danger" />
                        </div>
                        <div className="col">
                            <label>Jersey Number</label>
                            <Field type="number" name="jerseyNumber" className="form-control" />
                            <ErrorMessage name="jerseyNumber" component="div" className="text-danger" />
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="row mb-3">
                        <div className="col">
                            <label>Email</label>
                            <Field name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="col">
                            <label>Contact Number</label>
                            <Field name="contactNumber" className="form-control" />
                            <ErrorMessage name="contactNumber" component="div" className="text-danger" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <button type="submit" className="btn btn-primary me-2">
                        {selectedPlayer ? "Update Player" : "Add Player"}
                    </button>
                    <button
                        type="button"
                        onClick={() => { resetForm(); clearSelection(); }}
                        className="btn btn-secondary"
                    >
                        Clear
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default PlayerForm;

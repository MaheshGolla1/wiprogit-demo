// Importing necessary libraries
import React, { useState } from "react"; // React and useState for handling table data
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"; // Formik for form handling
import * as Yup from "yup"; // Yup for validation

// Main Component
const HockeyTournamentForm = () => {
    // State to store submitted players data
    const [players, setPlayers] = useState([]);

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        playerName: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(40, "Must be at most 40 characters")
            .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces allowed")
            .required("Player name is required"),

        jerseyNumber: Yup.number()
            .min(1, "Jersey must be between 1-99")
            .max(99, "Jersey must be between 1-99")
            .required("Jersey number is required"),

        position: Yup.string().oneOf(["Forward", "Defense", "Goalie"]).required("Position is required"),

        stickHand: Yup.string().oneOf(["Left", "Right"]).required("Stick hand is required"),

        dateOfBirth: Yup.date()
            .required("Date of birth is required")
            .test("age", "Age must be between 10 and 55", (value) => {
                if (!value) return false;
                const age = new Date().getFullYear() - new Date(value).getFullYear();
                return age >= 10 && age <= 55;
            }),

        nationality: Yup.string().required("Nationality is required"),

        email: Yup.string().email("Invalid email").required("Email is required"),

        phone: Yup.string()
            .matches(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian mobile number")
            .required("Phone is required"),

        playerId: Yup.string()
            .matches(/^HOCK-\d{4}$/, "Format must be HOCK-XXXX")
            .required("Player ID is required"),

        guardianName: Yup.string().when("dateOfBirth", (dob, schema) => {
            if (dob) {
                const age = new Date().getFullYear() - new Date(dob).getFullYear();
                return age < 18 ? schema.required("Guardian name is required") : schema;
            }
            return schema;
        }),

        teamName: Yup.string().required("Team name is required"),

        leagueLevel: Yup.string().oneOf(["Amateur", "College", "Pro"]).required("League level is required"),

        tournamentName: Yup.string().required("Tournament name is required"),

        startDate: Yup.date().required("Start date is required"),
        endDate: Yup.date()
            .required("End date is required")
            .min(Yup.ref("startDate"), "End date cannot be before start date"),

        jerseySize: Yup.string().when("position", {
            is: (val) => val !== "Goalie",
            then: Yup.string().required("Jersey size is required"),
        }),

        padSize: Yup.string().when("position", {
            is: "Goalie",
            then: Yup.string().required("Pad size is required"),
        }),

        hasMedicalCondition: Yup.boolean(),
        medicalCertNumber: Yup.string().when("hasMedicalCondition", {
            is: true,
            then: Yup.string()
                .matches(/^MED-\d{4}$/, "Format must be MED-XXXX")
                .required("Medical cert number required"),
        }),

        consent: Yup.boolean().oneOf([true], "Consent must be given"),

        pastTeams: Yup.array()
            .of(
                Yup.object().shape({
                    clubName: Yup.string()
                        .min(2, "Club name must be at least 2 characters")
                        .max(30, "Club name must be at most 30 characters")
                        .required("Club name is required"),
                    years: Yup.number()
                        .min(1, "Must be at least 1")
                        .max(20, "Cannot exceed 20 years")
                        .required("Years required"),
                })
            )
            .max(3, "You can add up to 3 past teams"),
    });

    // Initial values for the form
    const initialValues = {
        playerName: "",
        jerseyNumber: "",
        position: "",
        stickHand: "",
        dateOfBirth: "",
        nationality: "",
        email: "",
        phone: "",
        playerId: "",
        guardianName: "",
        teamName: "",
        leagueLevel: "",
        tournamentName: "",
        startDate: "",
        endDate: "",
        jerseySize: "",
        padSize: "",
        hasMedicalCondition: false,
        medicalCertNumber: "",
        consent: false,
        pastTeams: [],
    };

    // Handle form submission
    const onSubmit = (values, { resetForm }) => {
        console.log("Form Submitted: ", values); // log to console
        setPlayers([...players, values]); // add player to table
        resetForm(); // reset form
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Hockey Tournament Registration</h2>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ values, isValid }) => (
                    <Form className="row g-3">
                        {/* Player Name */}
                        <div className="col-md-6">
                            <label>Player Name</label>
                            <Field name="playerName" className="form-control" />
                            <ErrorMessage name="playerName" component="div" className="text-danger" />
                        </div>

                        {/* Jersey Number */}
                        <div className="col-md-6">
                            <label>Jersey Number</label>
                            <Field name="jerseyNumber" type="number" className="form-control" />
                            <ErrorMessage name="jerseyNumber" component="div" className="text-danger" />
                        </div>

                        {/* Position */}
                        <div className="col-md-6">
                            <label>Position</label>
                            <Field as="select" name="position" className="form-control">
                                <option value="">Select</option>
                                <option value="Forward">Forward</option>
                                <option value="Defense">Defense</option>
                                <option value="Goalie">Goalie</option>
                            </Field>
                            <ErrorMessage name="position" component="div" className="text-danger" />
                        </div>

                        {/* Stick Hand */}
                        <div className="col-md-6">
                            <label>Stick Hand</label>
                            <Field as="select" name="stickHand" className="form-control">
                                <option value="">Select</option>
                                <option value="Left">Left</option>
                                <option value="Right">Right</option>
                            </Field>
                            <ErrorMessage name="stickHand" component="div" className="text-danger" />
                        </div>

                        {/* Date of Birth */}
                        <div className="col-md-6">
                            <label>Date of Birth</label>
                            <Field name="dateOfBirth" type="date" className="form-control" />
                            <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
                        </div>

                        {/* Nationality */}
                        <div className="col-md-6">
                            <label>Nationality</label>
                            <Field name="nationality" className="form-control" />
                            <ErrorMessage name="nationality" component="div" className="text-danger" />
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <label>Email</label>
                            <Field name="email" type="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        {/* Phone */}
                        <div className="col-md-6">
                            <label>Phone</label>
                            <Field name="phone" className="form-control" />
                            <ErrorMessage name="phone" component="div" className="text-danger" />
                        </div>

                        {/* Player ID */}
                        <div className="col-md-6">
                            <label>Player ID</label>
                            <Field name="playerId" className="form-control" />
                            <ErrorMessage name="playerId" component="div" className="text-danger" />
                        </div>

                        {/* Guardian Name */}
                        <div className="col-md-6">
                            <label>Guardian Name</label>
                            <Field name="guardianName" className="form-control" />
                            <ErrorMessage name="guardianName" component="div" className="text-danger" />
                        </div>

                        {/* Team Name */}
                        <div className="col-md-6">
                            <label>Team Name</label>
                            <Field name="teamName" className="form-control" />
                            <ErrorMessage name="teamName" component="div" className="text-danger" />
                        </div>

                        {/* League Level */}
                        <div className="col-md-6">
                            <label>League Level</label>
                            <Field as="select" name="leagueLevel" className="form-control">
                                <option value="">Select</option>
                                <option value="Amateur">Amateur</option>
                                <option value="College">College</option>
                                <option value="Pro">Pro</option>
                            </Field>
                            <ErrorMessage name="leagueLevel" component="div" className="text-danger" />
                        </div>

                        {/* Tournament Name */}
                        <div className="col-md-6">
                            <label>Tournament Name</label>
                            <Field name="tournamentName" className="form-control" />
                            <ErrorMessage name="tournamentName" component="div" className="text-danger" />
                        </div>

                        {/* Start Date */}
                        <div className="col-md-6">
                            <label>Start Date</label>
                            <Field name="startDate" type="date" className="form-control" />
                            <ErrorMessage name="startDate" component="div" className="text-danger" />
                        </div>

                        {/* End Date */}
                        <div className="col-md-6">
                            <label>End Date</label>
                            <Field name="endDate" type="date" className="form-control" />
                            <ErrorMessage name="endDate" component="div" className="text-danger" />
                        </div>

                        {/* Jersey Size */}
                        {values.position !== "Goalie" && (
                            <div className="col-md-6">
                                <label>Jersey Size</label>
                                <Field name="jerseySize" className="form-control" />
                                <ErrorMessage name="jerseySize" component="div" className="text-danger" />
                            </div>
                        )}

                        {/* Pad Size */}
                        {values.position === "Goalie" && (
                            <div className="col-md-6">
                                <label>Pad Size</label>
                                <Field name="padSize" className="form-control" />
                                <ErrorMessage name="padSize" component="div" className="text-danger" />
                            </div>
                        )}

                        {/* Medical Condition */}
                        <div className="col-md-6">
                            <label>
                                <Field type="checkbox" name="hasMedicalCondition" /> Medical Condition
                            </label>
                        </div>

                        {/* Medical Cert Number */}
                        {values.hasMedicalCondition && (
                            <div className="col-md-6">
                                <label>Medical Cert Number</label>
                                <Field name="medicalCertNumber" className="form-control" />
                                <ErrorMessage name="medicalCertNumber" component="div" className="text-danger" />
                            </div>
                        )}

                        {/* Consent */}
                        <div className="col-md-12">
                            <label>
                                <Field type="checkbox" name="consent" /> I agree to terms
                            </label>
                            <ErrorMessage name="consent" component="div" className="text-danger" />
                        </div>

                        {/* Past Teams (Dynamic Field Array) */}
                        <div className="col-md-12">
                            <label>Past Teams</label>
                            <FieldArray name="pastTeams">
                                {({ push, remove }) => (
                                    <div>
                                        {values.pastTeams.map((_, index) => (
                                            <div key={index} className="d-flex gap-2 mb-2">
                                                <Field
                                                    name={`pastTeams[${index}].clubName`}
                                                    placeholder="Club Name"
                                                    className="form-control"
                                                />
                                                <Field
                                                    name={`pastTeams[${index}].years`}
                                                    placeholder="Years"
                                                    type="number"
                                                    className="form-control"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => remove(index)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                        {values.pastTeams.length < 3 && (
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => push({ clubName: "", years: "" })}
                                            >
                                                Add Past Team
                                            </button>
                                        )}
                                    </div>
                                )}
                            </FieldArray>
                        </div>

                        {/* Submit Button */}
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary" disabled={!isValid}>
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

            {/* Bootstrap Table to show submitted data */}
            <h3 className="mt-4">Registered Players</h3>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Jersey Number</th>
                    <th>Position</th>
                    <th>Stick Hand</th>
                    <th>Date of Birth</th>
                    <th>Nationality</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Player ID</th>
                    <th>Guardian</th>
                    <th>Team Name</th>
                    <th>League</th>
                    <th>Tournament</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
                </thead>
                <tbody>
                {players.map((p, i) => (
                    <tr key={i}>
                        <td>{p.playerName}</td>
                        <td>{p.jerseyNumber}</td>
                        <td>{p.position}</td>
                        <td>{p.stickHand}</td>
                        <td>{p.dateOfBirth}</td>
                        <td>{p.nationality}</td>
                        <td>{p.email}</td>
                        <td>{p.phone}</td>
                        <td>{p.playerId}</td>
                        <td>{p.guardianName}</td>
                        <td>{p.teamName}</td>
                        <td>{p.leagueLevel}</td>
                        <td>{p.tournamentName}</td>
                        <td>{p.startDate}</td>
                        <td>{p.endDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default HockeyTournamentForm;

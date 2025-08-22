import React, { useState, useEffect } from "react";

function RestaurantRegistrationForm() {
    // Form state
    const [form, setForm] = useState({
        restaurantName: "",
        ownerName: "",
        email: "",
        contact: "",
        address: "",
        cuisineType: "",
        openingHours: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [jsonOutput, setJsonOutput] = useState(null);

    // useEffect 1: Run on every render (no dependency array)
    useEffect(() => {
        // console.log("Component rendered");
    });

    // useEffect 2: Run only once on mount (empty dependency array)
    useEffect(() => {
        // console.log("Form mounted");
    }, []);

    // useEffect 3: Run whenever form data changes
    useEffect(() => {
        // console.log("Form data changed", form);
    }, [form]);

    // useEffect 4: Auto-save form data every 5 seconds (cleanup implemented)
    useEffect(() => {
        const interval = setInterval(() => {
            // Save to localStorage or just simulate autosave
            localStorage.setItem("autosaveForm", JSON.stringify(form));
            // console.log("Form autosaved", form);
        }, 5000);

        // Cleanup on unmount
        return () => {
            clearInterval(interval);
        };
    }, [form]);

    // Handle input change
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    // Handle submit
    function handleSubmit(e) {
        e.preventDefault();
        setJsonOutput(JSON.stringify(form, null, 2));
        setSubmitted(true);
    }

    return (
        <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
            <h2>Restaurant Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="restaurantName"
                    placeholder="Restaurant Name"
                    value={form.restaurantName}
                    onChange={handleChange}
                    style={{ width: "100%", margin: "5px 0" }}
                /><br />
                <input
                    name="ownerName"
                    placeholder="Owner Name"
                    value={form.ownerName}
                    onChange={handleChange}
                    style={{ width: "100%", margin: "5px 0" }}
                /><br />
                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    style={{ width: "100%", margin: "5px 0" }}
                /><br />
                <input
                    name="contact"
                    placeholder="Contact Number"
                    value={form.contact}
                    onChange={handleChange}
                    style={{ width: "100%", margin: "5px 0" }}
                /><br />
                <input
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    style={{ width: "100%", margin: "5px 0" }}
                /><br />
                <input
                    name="cuisineType"
                    placeholder="Cuisine Type"
                    value={form.cuisineType}
                    onChange={handleChange}
                    style={{ width: "100%", margin: "5px 0" }}
                /><br />
                <input
                    name="openingHours"
                    placeholder="Opening Hours"
                    value={form.openingHours}
                    onChange={handleChange}
                    style={{ width: "100%", margin: "5px 0" }}
                /><br />
                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div style={{ marginTop: 20 }}>
                    <strong>Submitted Data (JSON)</strong>
                    <pre>{jsonOutput}</pre>
                </div>
            )}
        </div>
    );
}

export default RestaurantRegistrationForm;

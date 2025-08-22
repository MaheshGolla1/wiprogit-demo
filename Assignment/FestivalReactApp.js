import React, { useState, useEffect } from "react";

function App6() {
    const [festival, setFestival] = useState("Diwali");
    const [countdown, setCountdown] = useState(10);

    // Q1: Festival Greeting (Every Render)
    useEffect(() => {
        console.log("Festival App Rendered");
    });

    // Q2: Welcome Message (Run Once)
    useEffect(() => {
        alert("Welcome to Diwali Festival App");
        console.log("Welcome to Diwali Festival App");
    }, []);

    // Q3: Festival Change Tracker
    useEffect(() => {
        if (festival) {
            console.log(`Festival changed to ${festival}. Seconds Left: ${countdown}`);
        }
    }, [festival]);

    // Q4: Countdown Timer with Cleanup
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => {
            clearInterval(timer); // Cleanup when component unmounts
        };
    }, []);

    // Q5: Multiple Dependencies
    useEffect(() => {
        console.log(`Festival: ${festival}, Countdown: ${countdown}`);
    }, [festival, countdown]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🎉 Festival React App 🎉</h1>
            <h2>Current Festival: {festival}</h2>
            <h3>Countdown: {countdown}</h3>

            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => setFestival("Holi")}
                    className="btn btn-primary mx-2"
                >
                    Holi
                </button>
                <button
                    onClick={() => setFestival("Pongal")}
                    className="btn btn-success mx-2"
                >
                    Pongal
                </button>
                <button
                    onClick={() => setFestival("Diwali")}
                    className="btn btn-warning mx-2"
                >
                    Diwali
                </button>
            </div>
        </div>
    );
}

export default App6;

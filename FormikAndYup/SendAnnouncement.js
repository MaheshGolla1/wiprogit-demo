import React, { useState } from "react";
import { usePowerCut } from "./PowerCutContext";

const SendAnnouncement = () => {
    const { addAnnouncement } = usePowerCut();  // ✅ this must come from provider
    const [street, setStreet] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (street.trim() === "" || message.trim() === "") {
            alert("Both fields are required!");
            return;
        }
        addAnnouncement(street, message);
        setStreet("");
        setMessage("");
    };

    return (
        <div className="mb-3">
            <h4>Street Power Cut Announcements</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Street Name"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="Announcement Message"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="btn btn-primary">
                    Send Announcement
                </button>
            </form>
        </div>
    );
};

export default SendAnnouncement;

import React from "react";
import { usePowerCut } from "./PowerCutContext";

const AnnouncementList = () => {
    // Get announcements from context
    const { announcements } = usePowerCut();

    return (
        <div>
            <h5 className="mt-4">Power Cut Announcements</h5>
            <div
                className="border p-2 rounded"
                style={{ maxHeight: "300px", overflowY: "scroll" }}
            >
                {/* Check if announcements exist */}
                {announcements.length === 0 ? (
                    <p>No announcements yet.</p>
                ) : (
                    announcements.map((a) => (
                        <div key={a.id} className="border p-2 rounded mb-2">
                            <p>
                                <strong>Street:</strong> {a.street}
                            </p>
                            <p>
                                <strong>Message:</strong> {a.message}
                            </p>
                            <p>
                                <strong>Time:</strong> {a.time}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AnnouncementList;

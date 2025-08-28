// Import React and createContext, useState, useContext hooks
import React, { createContext, useState, useContext } from "react";

// Create a Context for PowerCut
const PowerCutContext = createContext();

// Create a Provider component
export const PowerCutProvider = ({ children }) => {
    // State to hold all announcements
    const [announcements, setAnnouncements] = useState([]);

    // Function to add new announcement
    const addAnnouncement = (street, message) => {
        const newAnnouncement = {
            id: Date.now(), // unique ID using timestamp
            street,
            message,
            time: new Date().toLocaleTimeString() // store current time
        };

        // Add new announcement at the top of the list
        setAnnouncements([newAnnouncement, ...announcements]);
    };

    // Provide state and function to children
    return (
        <PowerCutContext.Provider value={{ announcements, addAnnouncement }}>
            {children}
        </PowerCutContext.Provider>
    );
};

// Custom hook to use the context
export const usePowerCut = () => useContext(PowerCutContext);

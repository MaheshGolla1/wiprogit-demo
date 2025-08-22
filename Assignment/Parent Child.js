import React, { useState } from "react";

function App9() {
    // Parent State
    const [fruits, setFruits] = useState(["Apple", "Mango"]);
    const [selectedFruit, setSelectedFruit] = useState("");

    // Child B (Sender) sends new fruit to Parent
    const addFruit = (fruit) => {
        setFruits([...fruits, fruit]);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>React – Parent / Child / Sibling Communication</h2>

            {/* Child A */}
            <ChildA fruits={fruits} onSelect={setSelectedFruit} />

            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "40px" }}>
                {/* Child B */}
                <ChildB sendFruit={addFruit} />

                {/* Child C */}
                <ChildC selectedFruit={selectedFruit} />
            </div>
        </div>
    );
}

// Child A: Displays fruit list (Parent → Child) and sends selection to Parent (Sibling trigger)
function ChildA({ fruits, onSelect }) {
    return (
        <div style={{ border: "1px solid gray", padding: "15px", width: "200px" }}>
            <h4>Fruit List</h4>
            {fruits.map((fruit, index) => (
                <p
                    key={index}
                    onClick={() => onSelect(fruit)}
                    style={{ cursor: "pointer" }}
                >
                    {fruit}
                </p>
            ))}
        </div>
    );
}

// Child B: Button to send fruit back to Parent
function ChildB({ sendFruit }) {
    return (
        <div style={{ border: "1px solid gray", padding: "15px", width: "200px" }}>
            <h4>Sender</h4>
            <button onClick={() => sendFruit("Orange")}>Send Fruit</button>
        </div>
    );
}

// Child C: Shows selected fruit from Child A (via Parent → Sibling communication)
function ChildC({ selectedFruit }) {
    return (
        <div style={{ border: "1px solid gray", padding: "15px", width: "200px" }}>
            <h4>Selected Fruit</h4>
            <p>{selectedFruit || "None"}</p>
        </div>
    );
}

export default App9;

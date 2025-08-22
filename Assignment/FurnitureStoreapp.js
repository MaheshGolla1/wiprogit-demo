import React, { useState } from "react";
// import Chair from "./Furniture/Chair";
// import Table from "./Furniture/Table";
// import Sofa from "./Furniture/Sofa";
// import Bed from "./Furniture/Bed";
//import React from "react";
//import React from "react";
//import React from "react";
//import React from "react";

function Bed() {
    return (
        <div className="card p-3 shadow-sm" style={{ width: "22rem" }}>
            <h4>🛏 Bed</h4>
            <p><b>Name:</b> King Size Bed</p>
            <p><b>Price:</b> ₹ 20000</p>
            <p><b>Material:</b> Teak Wood</p>
            <p><b>Brand:</b> Durian</p>
        </div>
    );
}
//export default Bed;


function Sofa() {
    return (
        <div className="card p-3 shadow-sm" style={{ width: "22rem" }}>
            <h4>🛋 Sofa</h4>
            <p><b>Name:</b> 3-Seater Sofa</p>
            <p><b>Price:</b> ₹ 15000</p>
            <p><b>Material:</b> Leather</p>
            <p><b>Brand:</b> Pepperfry</p>
        </div>
    );
}
//export default Sofa;


function Table() {
    return (
        <div className="card p-3 shadow-sm" style={{ width: "22rem" }}>
            <h4>📋 Table</h4>
            <p><b>Name:</b> Dining Table</p>
            <p><b>Price:</b> ₹ 7500</p>
            <p><b>Material:</b> Wood</p>
            <p><b>Brand:</b> Godrej</p>
        </div>
    );
}
//export default Table;


function Chair() {
    return (
        <div className="card p-3 shadow-sm" style={{ width: "22rem" }}>
            <h4>🪑 Chair</h4>
            <p><b>Name:</b> Office Chair</p>
            <p><b>Price:</b> ₹ 2500</p>
            <p><b>Material:</b> Plastic</p>
            <p><b>Brand:</b> Nilkamal</p>
        </div>
    );
}
//export default Chair;


function App4() {
    const [selected, setSelected] = useState("chair");

    const renderFurniture = () => {
        switch (selected) {
            case "chair":
                return <Chair />;
            case "table":
                return <Table />;
            case "sofa":
                return <Sofa />;
            case "bed":
                return <Bed />;
            default:
                return <h5 className="text-muted">Please select a furniture item</h5>;
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center fw-bold mb-4">Furniture Store</h1>

            {/* Dropdown */}
            <div className="mb-3 text-center">
                <select
                    className="form-select w-50 mx-auto"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option value="chair">Chair</option>
                    <option value="table">Table</option>
                    <option value="sofa">Sofa</option>
                    <option value="bed">Bed</option>
                </select>
            </div>

            {/* Render selected furniture */}
            <div className="d-flex justify-content-center">{renderFurniture()}</div>
        </div>
    );
}

export default App4;

// ServiceCard.jsx
// Child component to display one tailoring service
import React from "react";

const ServiceCard = ({ serviceName, price, fabricsAvailable }) => {
    return (
        // Bootstrap card with shadow and margin
        <div className="card shadow-sm mb-4" style={{ width: "18rem" }}>
            <div className="card-body">
                {/* Service title */}
                <h4 className="card-title text-center text-success">{serviceName}</h4>

                {/* Price */}
                <p className="card-text text-center">
                    <strong>Price:</strong> <span className="text-primary">₹{price}</span>
                </p>

                {/* Fabrics list */}
                <h6>Fabrics Available:</h6>
                <ul className="list-group list-group-flush">
                    {/* Nested map for fabrics */}
                    {fabricsAvailable.map((fabric, index) => (
                        <li key={index} className="list-group-item">
                            {fabric}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceCard;

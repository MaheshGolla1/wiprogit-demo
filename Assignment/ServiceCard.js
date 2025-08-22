// ServiceCard.jsx
import React from "react";
//Functional Arrow Component
const ServiceCard = ({ serviceName, price, fabricsAvailable }) => {  //Properties
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text"><strong>Price:</strong> ₹{price}</p>
                    <p><strong>Fabrics Available:</strong></p>
                    {fabricsAvailable.map((fabric, index) => ( //loops through the fabricsAvailable array and renders each fabric
                        <li style={{listStyle:"None"}}key={index}>{fabric}</li> //index is used as a unique key when there is no unique id
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;



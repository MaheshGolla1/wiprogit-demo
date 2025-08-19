// TailorShop.jsx
// Parent component to display tailoring services using ServiceCard
import React from "react";
import ServiceCard from "./ServiceCard";

const TailorShop = () => {
    // Array of tailoring services with nested fabrics
    const services = [
        {
            serviceName: "Shirts",
            price: 500,
            fabricsAvailable: ["Cotton", "Silk", "Linen"],
        },
        {
            serviceName: "Pants",
            price: 700,
            fabricsAvailable: ["Denim", "Cotton", "Polyester"],
        },
        {
            serviceName: "Lehenga",
            price: 2000,
            fabricsAvailable: ["Silk", "Velvet", "Georgette"],
        },
        {
            serviceName: "Blouse",
            price: 800,
            fabricsAvailable: ["Cotton", "Silk"],
        },
    ];

    return (
        <div className="container mt-5">
            {/* Heading */}
            <h2 className="text-center mb-4 text-primary">Tailoring Shop Services</h2>

            {/* Bootstrap row for layout */}
            <div className="row">
                {/* Map services into Bootstrap cols */}
                {services.map((service, index) => (
                    <div className="col-md-3 d-flex justify-content-center" key={index}>
                        {/* Inject ServiceCard with props */}
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TailorShop;

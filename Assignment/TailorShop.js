import ServiceCard from "./ServiceCard";

//Functional Arrow Component
const TailorShop = () => {
    const services = [     //Array of tailoring service objects
        {
            id: 1,
            serviceName: "Shirts",
            price: 500,
            fabricsAvailable: ["Cotton","Linen","Polyester"]
        },
        {
            id: 2,
            serviceName:"Pants",
            price: 700,
            fabricsAvailable: ["Denim","Cotton","Chino"]
        },
        {
            id: 3,
            serviceName:"Lehenga",
            price: 5000,
            fabricsAvailable: ["Silk","Chiffon","Georgette"]
        },
        {
            id: 4,
            serviceName:"Blouse",
            price:800,
            fabricsAvailable: ["Cotton","Silk", "Satin"]
        }
    ];

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Tailoring Services</h2>
            <div className="row">
                {services.map((service) => (
                    <ServiceCard   //passing ServiceCard component
                        key={service.id}   //unique key for each service so that react can identify easily
                        serviceName={service.serviceName}
                        price={service.price}
                        fabricsAvailable={service.fabricsAvailable}
                    />
                ))}
            </div>
        </div>
    );
};

export default TailorShop;
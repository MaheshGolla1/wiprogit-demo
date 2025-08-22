import React, { useState, useEffect } from "react";

const LoadingComponent = () => {
    return <h3>Loading product details...</h3>;
};

// export default LoadingComponent;
//import React from "react";

const ErrorComponent = () => {
    return <h3>⚠ Error fetching product details.</h3>;
};

//export default ErrorComponent;
//import React from "react";

const ProductComponent = ({ product }) => {
    return (
        <div style={{ border: "1px solid black", padding: "15px", borderRadius: "10px", marginTop: "10px" }}>
            <h2>Electronic Product Details</h2>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>

            <p><strong>Type:</strong> {product.price > 50000 ? "Premium Product" : "Budget Product"}</p>
            <p><strong>Warranty:</strong> {product.warranty > 0 ? `Warranty: ${product.warranty} years` : "No Warranty"}</p>
            <p><strong>Availability:</strong> {product.availability ? "✅ In Stock" : "❌ Out of Stock"}</p>
            {product.category === "Laptop" ? <p>🎒 Free Laptop Bag Offer</p> : null}
        </div>
    );
};

//export default ProductComponent;
//
// import LoadingComponent from "./components/LoadingComponent";
// import ErrorComponent from "./components/ErrorComponent";
// import ProductComponent from "./components/ProductComponent";

function App3() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulate API Call
        setTimeout(() => {
            // Uncomment one of the following lines to test:

            // 1️⃣ Success case
            setProduct({
                name: "Sony Bravia TV",
                brand: "Sony",
                price: 65000,
                category: "TV",
                warranty: 2,
                availability: true
            });
            setLoading(false);

            // 2️⃣ Error case
            // setError(true);
            // setLoading(false);

        }, 2000);
    }, []);

    // Use ternary operators only
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {loading ? (
                <LoadingComponent />
            ) : error ? (
                <ErrorComponent />
            ) : (
                <ProductComponent product={product} />
            )}
        </div>
    );
}

export default App3;



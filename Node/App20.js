// App.js
// Jewellery Shop Website using React Router, Bootstrap, and Page Transitions

import React from "react";
// Import React Router v6+ components
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
// Import Bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// Import Framer Motion for page transition effects
import { AnimatePresence, motion } from "framer-motion";

// ------------------ Page Components ------------------

// Home Page
function Home() {
    return <h2>Welcome to the Jewellery Shop</h2>;
}

// Products Page
function Products() {
    return <h2>Our Exclusive Products</h2>;
}

// Product Details Page
function ProductDetails() {
    return <h2>Product Details Page</h2>;
}

// Cart Page
function Cart() {
    return <h2>Your Shopping Cart</h2>;
}

// Checkout Page
function Checkout() {
    return <h2>Checkout Page</h2>;
}

// NotFound Page (404)
function NotFound() {
    return <h2>404 - Page Not Found</h2>;
}

// ------------------ Navbar Component ------------------
function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* Brand */}
                <Navbar.Brand as={Link} to="/">Jewellery Shop</Navbar.Brand>
                {/* Collapsible menu for mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Navigation Links */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/product-details">Product Details</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// ------------------ Page Wrapper with Animation ------------------
function PageWrapper({ children }) {
    return (
        // motion.div provides animation for page transitions
        <motion.div
            initial={{ opacity: 0, x: -50 }}   // Starting state (invisible + slide left)
            animate={{ opacity: 1, x: 0 }}     // Final state (visible, centered)
            exit={{ opacity: 0, x: 50 }}       // Exit state (fade out + slide right)
            transition={{ duration: 0.5 }}     // Animation duration
        >
            {children}
        </motion.div>
    );
}

// ------------------ Animated Routes ------------------
function AnimatedRoutes() {
    const location = useLocation(); // Track current route location

    return (
        // AnimatePresence enables exit animations when switching routes
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* Each route wrapped in PageWrapper for transitions */}
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
                <Route path="/product-details" element={<PageWrapper><ProductDetails /></PageWrapper>} />
                <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
                <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

// ------------------ Main App ------------------
function App20() {
    return (
        <Router>
            {/* Navbar at top */}
            <NavigationBar />
            <Container className="mt-4">
                {/* Animated Route Switching */}
                <AnimatedRoutes />
            </Container>
        </Router>
    );
}

export default App20;

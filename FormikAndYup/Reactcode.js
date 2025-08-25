// App.js
// Main entry point of the React app

import React from "react";
// Import BrowserRouter, Routes, and Route from react-router-dom v6+
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap Navbar components
import { Navbar, Nav, Container } from "react-bootstrap";

// ----------------- Page Components -----------------

// Home Page Component
function Home() {
    return <h2>Welcome to the Income Tax Department Portal</h2>;
}

// Add Taxpayer Page Component
function AddTaxpayer() {
    return <h2>Add Taxpayer Page</h2>;
}

// Taxpayer List Page Component
function TaxpayerList() {
    return <h2>Taxpayer List Page</h2>;
}

// Calculate Tax Page Component
function CalculateTax() {
    return <h2>Calculate Tax Page</h2>;
}

// Tax Rates Page Component
function TaxRates() {
    return <h2>Tax Rates Information</h2>;
}

// Contact Page Component
function Contact() {
    return <h2>Contact the Income Tax Department</h2>;
}

// About Page Component
function About() {
    return <h2>About the Income Tax Department</h2>;
}

// FAQ Page Component
function FAQ() {
    return <h2>Frequently Asked Questions</h2>;
}

// NotFound Page Component
function NotFound() {
    return <h2>404 - Page Not Found</h2>;
}

// ----------------- Navbar Component -----------------
function NavigationBar() {
    return (
        // Responsive Bootstrap Navbar
        <Navbar bg="light" expand="lg">
            <Container>
                {/* Navbar Brand */}
                <Navbar.Brand as={Link} to="/">
                    Income Tax Department
                </Navbar.Brand>

                {/* Toggle button for mobile screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Each Nav.Link uses "as={Link}" for React Router navigation */}
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/add-taxpayer">
                            Add Taxpayer
                        </Nav.Link>
                        <Nav.Link as={Link} to="/taxpayer-list">
                            Taxpayer List
                        </Nav.Link>
                        <Nav.Link as={Link} to="/calculate-tax">
                            Calculate Tax
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tax-rates">
                            Tax Rates
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/faq">
                            FAQ
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// ----------------- Main App Component -----------------
function Reactcode() {
    return (
        // Wrap app inside Router
        <Router>
            {/* Navigation bar on top */}
            <NavigationBar />

            {/* Routes for different pages */}
            <Container className="mt-4">
                <Routes>
                    {/* Define paths and components */}
                    <Route path="/" element={<Home />} />
                    <Route path="/add-taxpayer" element={<AddTaxpayer />} />
                    <Route path="/taxpayer-list" element={<TaxpayerList />} />
                    <Route path="/calculate-tax" element={<CalculateTax />} />
                    <Route path="/tax-rates" element={<TaxRates />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </Router>
    );
}

// Export App
export default Reactcode;

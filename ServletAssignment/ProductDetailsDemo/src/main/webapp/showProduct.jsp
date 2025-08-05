<%@ page language="java" import="productbean.Product" %>
<jsp:useBean id="prod" class="productbean.Product" scope="request" />
<jsp:setProperty name="prod" property="*" />

<!DOCTYPE html>
<html>
<head>
    <title>Product Details</title>
</head>
<body>
    <h2>Product Details</h2>
    <p><strong>Product ID:</strong> <jsp:getProperty name="prod" property="productId" /></p>
    <p><strong>Name:</strong> <jsp:getProperty name="prod" property="name" /></p>
    <p><strong>Price:</strong> ₹<jsp:getProperty name="prod" property="price" /></p>
    <p><strong>Quantity:</strong> <jsp:getProperty name="prod" property="quantity" /></p>
</body>
</html>

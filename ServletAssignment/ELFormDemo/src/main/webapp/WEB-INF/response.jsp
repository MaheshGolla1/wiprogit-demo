<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Form Submission</title>
</head>
<body>
    <h2>Submitted User Information</h2>
    <p><strong>Name:</strong> ${param.username}</p>
    <p><strong>Password:</strong> ${param.password}</p>
    <p><strong>Address:</strong> ${param.address}</p>
    <p><strong>Subscribed:</strong> ${param.subscribe}</p>
    <p><strong>Frameworks:</strong>
        <c:forEach items="${paramValues.framework}" var="fw">
            ${fw} 
        </c:forEach>
    </p>
    <p><strong>Gender:</strong> ${param.gender}</p>
    <p><strong>Favorite Number:</strong> ${param.favnumber}</p>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head><title>Result - Pass</title></head>
<body>
    <h2>Congratulations, <%= request.getAttribute("studentName") %>!</h2>
    <p>You passed with <%= request.getAttribute("marks") %> marks.</p>

    <jsp:include page="footer.jsp" />
</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head><title>Result - Fail</title></head>
<body>
    <h2>Sorry, <%= request.getAttribute("studentName") %>.</h2>
    <p>You failed with <%= request.getAttribute("marks") %> marks. Better luck next time!</p>

    <jsp:include page="footer.jsp" />
</body>
</html>

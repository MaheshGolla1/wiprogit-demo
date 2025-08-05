
<%@ page language="java" import="bean.Account" %>
<jsp:useBean id="acc" class="bean.Account" scope="request" />
<jsp:setProperty name="acc" property="*" />

<%
    String accountType = request.getParameter("accountType");
    session.setAttribute("accType", accountType);
%>

<!DOCTYPE html>
<html>
<head><title>Account Details</title></head>
<body>
    <h2>Bank Account Information</h2>

    Account Number: ${acc.accountNo} <br><br>
    Name: ${acc.name} <br><br>
    Balance: ₹${acc.balance} <br><br>
    Account Type (from session): ${sessionScope.accType} <br><br>

    <b>Status:</b>
    <c:choose>
        <c:when test="${acc.balance >= 5000}">
            ✅ Sufficient Balance
        </c:when>
        <c:otherwise>
            ❌ Insufficient Balance
        </c:otherwise>
    </c:choose>

</body>
</html>

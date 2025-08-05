<!DOCTYPE html>
<html>
<head><title>Bank Account Form</title></head>
<body>
    <h2>Enter Bank Account Details</h2>
    <form action="displayAccount.jsp" method="post">
        Account Number: <input type="text" name="accountNo" /><br><br>
        Name: <input type="text" name="name" /><br><br>
        Balance: <input type="text" name="balance" /><br><br>
        Account Type: 
        <select name="accountType">
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
        </select><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>

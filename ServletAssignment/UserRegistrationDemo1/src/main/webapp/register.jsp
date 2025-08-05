<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>User Registration Form</title>
</head>
<body>
    <h2>User Registration</h2>
    <form action="RegisterServlet" method="post">
        Full name: <input type="text" name="fullname" /><br/>
        E-mail: <input type="email" name="email" /><br/>
        Password: <input type="password" name="password" /><br/>
        Birthday: <input type="date" name="birthday" /><br/>
        Gender:
        <input type="radio" name="gender" value="Male"/> Male
        <input type="radio" name="gender" value="Female"/> Female<br/>
        Profession:
        <select name="profession">
            <option>Developer</option>
            <option>Designer</option>
            <option>Tester</option>
        </select><br/>
        Married? <input type="checkbox" name="married"/><br/>
        Note:<br/>
        <textarea name="note"></textarea><br/><br/>
        <input type="submit" value="Register"/>
    </form>
</body>
</html>

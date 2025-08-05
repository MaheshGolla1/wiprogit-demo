<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>User Information</title>
</head>
<body>
    <h2>User Information</h2>
    <form action="response.jsp" method="post">
        User Name: <input type="text" name="username"/><br/>
        Password: <input type="password" name="password"/><br/>
        Address:<br/>
        <textarea name="address" rows="4" cols="30"></textarea><br/>
        
        Subscribe Newsletter: <input type="checkbox" name="subscribe"/><br/>
        
        Favorite Web Frameworks:<br/>
        <input type="checkbox" name="framework" value="Spring MVC"/>Spring MVC
        <input type="checkbox" name="framework" value="Struts 1"/>Struts 1
        <input type="checkbox" name="framework" value="Struts 2"/>Struts 2
        <input type="checkbox" name="framework" value="Apache Wicket"/>Apache Wicket<br/>
        
        Gender:
        <input type="radio" name="gender" value="Male"/> Male
        <input type="radio" name="gender" value="Female"/> Female<br/>
        
        Favorite Number:<br/>
        <input type="radio" name="favnumber" value="0"/>0
        <input type="radio" name="favnumber" value="1"/>1
        <input type="radio" name="favnumber" value="2"/>2
        <input type="radio" name="favnumber" value="3"/>3
        <input type="radio" name="favnumber" value="4"/>4<br/><br/>
        
        <input type="submit" value="Submit"/>
    </form>
</body>
</html>

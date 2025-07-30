
package com.example.jdbc;

import java.sql.*;


public class StudentJDBC {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database";
        String username = "your_username";
        String password = "your_password";

        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/school", "root", "PoOjA@777");
             Statement stmt = con.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM Student")) {

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String course = rs.getString("course");
                double marks = rs.getDouble("marks");

                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age + ", Course: " + course + ", Marks: " + marks);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

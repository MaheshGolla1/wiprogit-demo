//package com.MaheshWebApp.webappmahesh.Controller;
//
//
//
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.Max;
//import jakarta.validation.constraints.Min;
//import jakarta.validation.constraints.NotEmpty;
//import jakarta.validation.constraints.Pattern;
//import jakarta.validation.constraints.Size;
//
//
////POJO/Bean CLASS FOR JSP FORM FILE
//
//public class EmployeeBean_Validation {
//
//    //SKELETON OF THE JSP FORM FILE IS READY!
//    //Validation Annotations
//
//    @Min(value=18,message="Age must be equal or greater than 18")
//    int age;
//
//    @Size(min=5,max=20,message="Password length between 5 to 20")
//    String user_password;
//
//
//    //2 validation annotation
//    @Min(value=20000,message="Salary must be equal or greater than 20000")
//    @Max(value=45000,message="Salary must be equal or less than 45000")
//    float salary;
//
//    //regexp means regular expression
//    @Pattern(regexp="^[a-zA-Z0-9]{6}",message="Postal code must be of 6 char/digit")
//    String postal_code;
//
//    @NotEmpty(message="Please Enter Your Email!")//similar to "required"
//    //not a well-formed email address-->@Email default error msg!
//    @Email	//fetch the error message from myvalidationmessages.properties file!!!!!!!!
//    String email_1;
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    public String getUser_password() {
//        return user_password;
//    }
//
//    public void setUser_password(String user_password) {
//        this.user_password = user_password;
//    }
//
//    public float getSalary() {
//        return salary;
//    }
//
//    public void setSalary(float salary) {
//        this.salary = salary;
//    }
//
//    public String getPostal_code() {
//        return postal_code;
//    }
//
//    public void setPostal_code(String postal_code) {
//        this.postal_code = postal_code;
//    }
//
//    public String getEmail_1() {
//        return email_1;
//    }
//
//    public void setEmail_1(String email_1) {
//        this.email_1 = email_1;
//    }
//
//
//
//
//
//}
//

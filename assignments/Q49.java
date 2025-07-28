package assignments;
import java.util.*;

class RequiredFieldMissingException extends RuntimeException {
    public RequiredFieldMissingException(String message) {
        super(message);
    }
}

class Emp12 {
    int id;
    String name;
    Optional<String> email;
    Optional<String> department;
    Emp12(int id, String name, String email, String department) {
        this.id = id;
        this.name = name;
        this.email = Optional.ofNullable(email);
        this.department = Optional.ofNullable(department);
    }
}

public class Q49 {
    public static void main(String[] args) {
        Emp12 e1 = new Emp12(1, "Amit", "amit@mail.com", "IT");
        Emp12 e2 = new Emp12(2, "Ravi", null, null);

        System.out.println("Name: " + e1.name);
        System.out.println("Email: " + e1.email.orElse("No Email"));
        System.out.println("Department: " + e1.department.orElse("General"));

        System.out.println("Name: " + e2.name);
        System.out.println("Email: " + e2.email.orElse("No Email"));
        System.out.println("Department: " + e2.department.orElse("General"));

        if (!e2.email.isPresent()) throw new RequiredFieldMissingException("Email is required for processing");
    }
}

/* Department: IT
Name: Ravi
Email: No Email
Department: General
Exception in thread "main" assignments.RequiredFieldMissingException: Email is required for processing
	at myassignments/assignments.Q49.main(Q49.java:36)
*/
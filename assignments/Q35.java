package assignments;
import java.util.Scanner;

class InvalidEmployeeCode extends Exception {
    public InvalidEmployeeCode(String message) {
        super(message);
    }
}

class Employee {
    private String employeeCode;
    private String name;
    private int age;

    public Employee(String employeeCode, String name, int age) {
        this.employeeCode = employeeCode;
        this.name = name;
        this.age = age;
    }

    public void displayDetails() {
        System.out.println("Employee Code: " + employeeCode);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class Q35 {
    public static boolean validateCode(String code) {
        return code.matches("\\d{2}-[FS]-\\d{3}");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter Employee Code (yy-F/S-xxx): ");
            String code = sc.nextLine();
            if (!validateCode(code)) {
                throw new InvalidEmployeeCode("Invalid Employee Code Format!");
            }
            System.out.print("Enter Name: ");
            String name = sc.nextLine();
            System.out.print("Enter Age: ");
            int age = sc.nextInt();
            Employee emp = new Employee(code, name, age);
            emp.displayDetails();
        } catch (InvalidEmployeeCode e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}

/* Enter Employee Code (yy-F/S-xxx): 34-F-345
Enter Name: priya
Enter Age: 35
Employee Code: 34-F-345
Name: priya
Age: 35
*/

package assignments;
import java.io.*;
import java.util.Scanner;

class Employee1 implements Serializable {
    private int emp_id;
    private String emp_name;
    private transient double emp_sal;

    public Employee1(int emp_id, String emp_name, double emp_sal) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_sal = emp_sal;
    }

    public void display() {
        System.out.println("Employee ID: " + emp_id);
        System.out.println("Employee Name: " + emp_name);
        System.out.println("Employee Salary: " + emp_sal);
    }
}

public class Q38 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter Employee ID: ");
            int id = sc.nextInt();
            sc.nextLine();
            System.out.print("Enter Employee Name: ");
            String name = sc.nextLine();
            System.out.print("Enter Employee Salary: ");
            double sal = sc.nextDouble();

            Employee1 emp = new Employee1(id, name, sal);

            ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("employee.ser"));
            oos.writeObject(emp);
            oos.close();
            System.out.println("\nEmployee object serialized successfully.");

            ObjectInputStream ois = new ObjectInputStream(new FileInputStream("employee.ser"));
            Employee1 deserializedEmp = (Employee1) ois.readObject();
            ois.close();

            System.out.println("\nDeserialized Employee Details:");
            deserializedEmp.display();
            sc.close();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}

/* Enter Employee ID: 123
Enter Employee Name: priya
Enter Employee Salary: 15000

Employee object serialized successfully.

Deserialized Employee Details:
Employee ID: 123
Employee Name: priya
Employee Salary: 0.0
*/
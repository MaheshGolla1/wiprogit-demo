package assignments;
@FunctionalInterface
interface EmployeeProcessor {
    void process(Employee123 e);
}

class Employee123 {
    int id;
    String name;
    double salary;
    Employee123(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

public class Q48 {
    public static void main(String[] args) {
        Employee123 e1 = new Employee123(1, "Amit", 50000);
        Employee123 e2 = new Employee123(2, "Ravi", 60000);
        Employee123 e3 = new Employee123(3, "Sita", 55000);

        EmployeeProcessor printDetails = e -> System.out.println("Name: " + e.name + ", Salary: " + e.salary);
        EmployeeProcessor bonusCalc = e -> System.out.println("Bonus: " + (e.salary * 0.1));

        for (Employee123 e : new Employee123[]{e1, e2, e3}) {
            printDetails.process(e);
            bonusCalc.process(e);
        }
    }
}

/* Name: Amit, Salary: 50000.0
Bonus: 5000.0
Name: Ravi, Salary: 60000.0
Bonus: 6000.0
Name: Sita, Salary: 55000.0
Bonus: 5500.0
*/

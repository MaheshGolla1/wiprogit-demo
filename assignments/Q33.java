package assignments;
class LowSalException extends Exception {
    public LowSalException(String message) {
        super(message);
    }
}

class Emp {
    private int empId;
    private String empName;
    private String designation;
    private double basic;
    private double hra;

    public Emp(int empId, String empName, String designation, double basic) throws LowSalException {
        if (basic < 50000) {
            throw new LowSalException("Basic salary cannot be less than 50000 for employee: " + empName);
        }
        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        this.basic = basic;
        calculateHRA();
    }

    private void calculateHRA() {
        if (designation.equalsIgnoreCase("Manager")) {
            hra = 0.10 * basic;
        } else if (designation.equalsIgnoreCase("TeamLeader")) {
            hra = 0.12 * basic;
        } else if (designation.equalsIgnoreCase("HR")) {
            hra = 0.05 * basic;
        } else {
            hra = 0.0;
        }
    }

    public void printDET() {
        System.out.println("Employee Details:");
        System.out.println("Emp ID: " + empId);
        System.out.println("Emp Name: " + empName);
        System.out.println("Designation: " + designation);
        System.out.println("Basic Salary: " + basic);
        System.out.println("HRA: " + hra);
    }
}

public class Q33 {
    public static void main(String[] args) {
        try {
            Emp e1 = new Emp(101, "tarun", "Manager", 60000);
            e1.printDET();
            System.out.println("----------------------");
            Emp e2 = new Emp(102, "Suresh", "HR", 45000);
            e2.printDET();
        } catch (LowSalException e) {
            System.out.println("Exception Caught: " + e.getMessage());
        }
    }
}

/* 
Employee Details:
Emp ID: 101
Emp Name: Ramesh
Designation: Manager
Basic Salary: 60000.0
HRA: 6000.0
----------------------
Exception Caught: Basic salary cannot be less than 50000 for employee: Suresh
*/
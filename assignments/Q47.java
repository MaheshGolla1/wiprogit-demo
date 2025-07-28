package assignments;
class InvalidSalaryException extends Exception {
    public InvalidSalaryException(String message) {
        super(message);
    }
}

class Empp {
    int id;
    String name;
    double salary;
    Empp(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

class EmployeeService {
    void validateSalary(double salary) throws InvalidSalaryException {
        if (salary < 0) throw new InvalidSalaryException("Salary cannot be negative");
    }
    void processSalary(Empp emp) throws InvalidSalaryException {
        validateSalary(emp.salary);
        System.out.println("Processing salary: " + emp.salary);
    }
    void startProcess(Empp emp) throws InvalidSalaryException {
        processSalary(emp);
    }
}

public class Q47 {
    public static void main(String[] args) {
        Empp e = new Empp(1, "Amit", -5000);
        EmployeeService service = new EmployeeService();
        try {
            service.startProcess(e);
        } catch (InvalidSalaryException ex) {
            System.out.println("Exception: " + ex.getMessage());
        }
    }
}


/* Exception: Salary cannot be negative */
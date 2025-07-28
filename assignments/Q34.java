package assignments;
public class Q34 {
    private String employeeId;
    private String name;
    private int yearOfBirth;

    public Q34(String employeeId, String name, int yearOfBirth) {
        this.employeeId = employeeId;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    public void printDetails() {
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Name: " + name);
        System.out.println("Year of Birth: " + yearOfBirth);
        parseEmployeeId();
    }

    private void parseEmployeeId() {
        String[] parts = employeeId.split("-");
        String year = parts[0];
        String designation = parts[1].equalsIgnoreCase("F") ? "Faculty" : "Staff";
        String number = parts[2];
        System.out.println("Joining Year: 19" + year);
        System.out.println("Designation: " + designation);
        System.out.println("Number: " + number);
    }

    public static void main(String[] args) {
        Q34 e1 = new Q34("81-F-112", "Ramesh", 1960);
        e1.printDetails();
        System.out.println("--------------------");
        Q34 e2 = new Q34("79-S-254", "Suresh", 1958);
        e2.printDetails();
    }
}

/* Employee ID: 79-S-254
Name: Suresh
Year of Birth: 1958
Joining Year: 1979
Designation: Staff
Number: 254
*/
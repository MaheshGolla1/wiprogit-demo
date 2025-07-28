package assignments;
import java.util.*;
import java.util.stream.*;
class Students {
    int id;
    String name;
    String department;
    Students(int id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    public String getDepartment() { return department; }
    public String getName() { return name; }
}
public class Q45 {
    public static void main(String[] args) {
        List<Students> students = Arrays.asList(
            new Students(1, "Amit", "CSE"),
            new Students(2, "Ravi", "ECE"),
            new Students(3, "Sita", "CSE"),
            new Students(4, "Priya", "EEE"),
            new Students(5, "Rahul", "ECE")
        );

        Map<String, List<Students>> grouped = students.stream()
            .collect(Collectors.groupingBy(Students::getDepartment));

        grouped.forEach((dept, list) -> {
            System.out.println(dept + " : " +
                list.stream().map(Students::getName).collect(Collectors.joining(", ")));
        });
    }
}

/* EEE : Priya
CSE : Amit, Sita
ECE : Ravi, Rahul

*/

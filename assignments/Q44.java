package assignments;
import java.util.*;

class Eemp {
    int id;
    String name;
    double salary;
    Eemp(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    public String toString() {
        return "Eemp{id=" + id + ", name='" + name + "', salary=" + salary + "}";
    }
}

public class Q44 {
    public static void main(String[] args) {
        List<Eemp> list = new ArrayList<>();
        list.add(new Eemp(1, "Ravi", 50000));
        list.add(new Eemp(2, "Amit", 60000));
        list.add(new Eemp(3, "Sita", 55000));
        list.sort((a, b) -> Double.compare(b.salary, a.salary));
        System.out.println("Sorted by salary desc: " + list);
        list.sort(Comparator.comparing(e -> e.name));
        System.out.println("Sorted by name asc: " + list);
    }
}

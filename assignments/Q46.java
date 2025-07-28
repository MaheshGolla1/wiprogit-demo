package assignments;
import java.util.*;

class Repository<T, ID> {
    private Map<ID, T> storage = new HashMap<>();
    public void save(ID id, T entity) { storage.put(id, entity); }
    public T findById(ID id) { return storage.get(id); }
    public List<T> findAll() { return new ArrayList<>(storage.values()); }
    public void deleteById(ID id) { storage.remove(id); }
}

class Employees {
    int id;
    String name;
    double salary;
    Employees(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    public String toString() {
        return "Employees{id=" + id + ", name='" + name + "', salary=" + salary + "}";
    }
}

public class Q46 {
    public static void main(String[] args) {
        Repository<Employees, Integer> repo = new Repository<>();
        repo.save(1, new Employees(1, "Amit", 50000));
        repo.save(2, new Employees(2, "Ravi", 60000));
        repo.save(3, new Employees(3, "Sita", 55000));
        System.out.println("All Employees: " + repo.findAll());
        System.out.println("Find by ID 2: " + repo.findById(2));
        repo.deleteById(1);
        System.out.println("After Deletion: " + repo.findAll());
    }
}

/* All Employees: [Employees{id=1, name='Amit', salary=50000.0}, Employees{id=2, name='Ravi', salary=60000.0}, Employees{id=3, name='Sita', salary=55000.0}]
Find by ID 2: Employees{id=2, name='Ravi', salary=60000.0}
After Deletion: [Employees{id=2, name='Ravi', salary=60000.0}, Employees{id=3, name='Sita', salary=55000.0}]
*/
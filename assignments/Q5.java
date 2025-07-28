package assignments;
import java.util.*;
public class Q5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter salary: ");
        double salary = sc.nextDouble();
        System.out.print("Enter years of service: ");
        int years = sc.nextInt();
        if(years > 6){
            double bonus = 0.1 * salary;
            System.out.println("Bonus: " + bonus);
        } else {
            System.out.println("No bonus.");
        }
	}
}

/* Enter salary: 16500
Enter years of service: 12
Bonus: 1650.0 */
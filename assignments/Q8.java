package assignments;
import java.util.*;
public class Q8 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
        System.out.print("Classes held: ");
        int held = sc.nextInt();
        System.out.print("Classes attended: ");
        int attended = sc.nextInt();
        double percent = (attended * 100.0) / held;
        System.out.print("Medical cause? (Y/N): ");
        char c = sc.next().charAt(0);
        if(percent >= 70 || c=='Y' || c=='y')
            System.out.println("Allowed");
        else
            System.out.println("Not allowed");
	}
}

/* Classes held: 67
Classes attended: 35
Medical cause? (Y/N): Y
Allowed
*/
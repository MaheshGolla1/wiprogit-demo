package assignments;
import java.util.*;
public class Q7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
        System.out.print("Classes held: ");
        int held = sc.nextInt();
        System.out.print("Classes attended: ");
        int attended = sc.nextInt();
        double percent = (attended * 100.0) / held;
        System.out.println("Attendance: " + percent + "%");
        if(percent < 70) System.out.println("Not allowed to sit in exam");
        else System.out.println("Allowed to sit in exam");
	}
}

/* Classes held: 67
Classes attended: 60
Attendance: 89.55223880597015%
Allowed to sit in exam
*/
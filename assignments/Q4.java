package assignments;
import java.util.*;
public class Q4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter name: ");
        String name = sc.nextLine();
        System.out.print("Enter roll number: ");
        int roll = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter field of interest: ");
        String interest = sc.nextLine();
        System.out.println("Hey, my name is " + name + " and my roll number is " + roll + ". My field of interest is " + interest + ".");
	}

}

/* Enter name: pooja
Enter roll number: 123
Enter field of interest: java
Hey, my name is pooja and my roll number is 123. My field of interest is java. */
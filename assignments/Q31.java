package assignments;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Q31 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter an integer: ");
            int num = sc.nextInt(); // If user enters non-integer, exception will occur
            System.out.println("You entered: " + num);
        } catch (InputMismatchException e) 
        {
            System.out.println("InputMismatchException caught: Please enter only integers!");
        }
        sc.nextLine();
        try {
            System.out.print("Enter a word: ");
            String str = sc.nextLine();
            System.out.print("Enter an index to access character: ");
            int index = sc.nextInt();
            System.out.println("Character at index " + index + ": " + str.charAt(index));
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("StringIndexOutOfBoundsException caught: Invalid index entered!");
        }

        sc.close();
        System.out.println("Program ended successfully.");
    }
}



/* 
  Enter an integer: 6
You entered: 6
Enter a word: hello
Enter an index to access character: 3
Character at index 3: l
Program ended successfully.

 */


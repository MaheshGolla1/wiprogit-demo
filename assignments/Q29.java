package assignments;
import java.util.*;


public class Q29 {
    public static void main(String[] args) throws NumberFormatException {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter Register Number: ");
            String registerNo = sc.nextLine();

            System.out.print("Enter Mobile Number: ");
            String mobileNo = sc.nextLine();
            if (registerNo.length() != 9) {
                throw new IllegalArgumentException("Register Number must have exactly 9 characters");
            }
            if (mobileNo.length() != 10) {
                throw new IllegalArgumentException("Mobile Number must have exactly 10 digits");
            }
            if (!mobileNo.matches("\\d+")) {
                throw new NumberFormatException("Mobile Number must contain only digits");
            }
            if (!registerNo.matches("[a-zA-Z0-9]+")) {
                throw new NoSuchElementException("Register Number must contain only alphabets and digits");
            }
            
            System.out.println("valid");
            

        } catch (IllegalArgumentException | NoSuchElementException e) {
            System.out.println("invalid: " + e.getMessage());
        }
        
    }
}

/* Enter Register Number: 123456789
Enter Mobile Number: 9876543210
valid
*/


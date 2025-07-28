package assignments;
public class Q32 {
    public static void main(String[] args) {
        try {
            int[] arr = new int[-5];
        } 
        catch (NegativeArraySizeException e) {
            System.out.println("Caught: NegativeArraySizeException");
            e.printStackTrace();
        } 
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught: ArrayIndexOutOfBoundsException");
            e.printStackTrace();
        } 
        catch (StringIndexOutOfBoundsException e) {
            System.out.println("Caught: StringIndexOutOfBoundsException");
            e.printStackTrace();
        } 
        catch (IndexOutOfBoundsException e) {
            System.out.println("Caught: IndexOutOfBoundsException");
            e.printStackTrace();
        } 
        catch (NullPointerException e) {
            System.out.println("Caught: NullPointerException");
            e.printStackTrace();
        } 
        catch (ArithmeticException e) {
            System.out.println("Caught: ArithmeticException");
            e.printStackTrace();
        } 
        catch (Exception e) {
            System.out.println("Caught: General Exception");
            e.printStackTrace();
        }
        System.out.println("Program Ended Normally");
    }
}

/* Caught: NegativeArraySizeException
java.lang.NegativeArraySizeException: -5
	at myassignments/assignments.Q32.main(Q32.java:5)
Program Ended Normally
*/


package assignments;
import java.util.Scanner;
@FunctionalInterface
interface Minimum3 
{
    double findMin(double a, double b, double c);
}
public class Q30 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();
        System.out.print("Enter third number: ");
        double num3 = sc.nextDouble();
        Minimum3 min3 = Q30::minimum3;
        double result = min3.findMin(num1, num2, num3);
        System.out.println("The smallest number is: " + result);
        sc.close();
    }
    public static double minimum3(double a, double b, double c) 
    {
        return Math.min(Math.min(a, b), c);
    }
}

/* Enter first number: 5
Enter second number: 10
Enter third number: 9
The smallest number is: 5.0
*/
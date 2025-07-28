package assignments;

class Calculator {
    void add(int a, int b) {
        System.out.println("Addition: " + (a + b));
    }
    void diff(int a, int b) {
        System.out.println("Difference: " + (a - b));
    }
    void mul(int a, int b) {
        System.out.println("Multiplication: " + (a * b));
    }
    void div(int a, int b) {
        if (b != 0)
            System.out.println("Division: " + (a / b));
        else
            System.out.println("Cannot divide by zero");
    }
}

public class Q11 {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator c = new Calculator();
        c.add(10, 5);
        c.diff(10, 5);
        c.mul(10, 5);
        c.div(10, 5);
	}

}

/* Addition: 15
Difference: 5
Multiplication: 50
Division: 2
*/
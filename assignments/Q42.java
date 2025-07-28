package assignments;
public class Q42 {
    public static void someMethod2() throws Exception {
        throw new Exception("Exception thrown from someMethod2");
    }

    public static void someMethod() throws Exception {
        try {
            someMethod2();
        } catch (Exception e) {
            System.out.println("Caught in someMethod, rethrowing...");
            throw e;
        }
    }

    public static void main(String[] args) {
        try {
            someMethod();
        } catch (Exception e) {
            System.out.println("Caught in main:");
            e.printStackTrace();
        }
    }
}

/* Caught in someMethod, rethrowing...
Caught in main:
java.lang.Exception: Exception thrown from someMethod2
	at myassignments/assignments.Q42.someMethod2(Q42.java:4)
	at myassignments/assignments.Q42.someMethod(Q42.java:9)
	at myassignments/assignments.Q42.main(Q42.java:18)
*/
package assignments;
import java.util.Scanner;

public class Q24 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] speed = new int[5];
        int sum = 0;

        for (int i = 0; i < 5; i++) {
            System.out.print("Enter speed of biker " + (i + 1) + ": ");
            speed[i] = sc.nextInt();
            sum += speed[i];
        }

        double avg = sum / 5.0;
        System.out.println("Average speed: " + avg);
        System.out.println("Qualifying bikers (speed > average):");

        for (int s : speed)
            if (s > avg)
                System.out.println(s);

        sc.close();
    }
}

/* Enter speed of biker 1: 120
Enter speed of biker 2: 80
Enter speed of biker 3: 100
Enter speed of biker 4: 50
Enter speed of biker 5: 75
Average speed: 85.0
Qualifying bikers (speed > average):
120
100

*/
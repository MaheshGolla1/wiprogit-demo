package assignments;
import java.util.*;
public class Q16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] marks = new int[3];
        for(int i=0;i<3;i++){
            while(true){
                System.out.print("Enter mark (0-100) for student "+(i+1)+": ");
                int m = sc.nextInt();
                if(m>=0 && m<=100){
                    marks[i]=m;
                    break;
                } else {
                    System.out.println("Invalid input, try again");
                }
            }
        }
        double avg = (marks[0]+marks[1]+marks[2])/3.0;
        System.out.printf("The average is: %.2f", avg);
        sc.close();
    }
}

/* Enter mark (0-100) for student 1: 75
Enter mark (0-100) for student 2: 25
Enter mark (0-100) for student 3: 93
The average is: 64.33
*/
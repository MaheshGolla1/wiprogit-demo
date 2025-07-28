package assignments;
import java.util.*;
public class Q9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
        double total = 0;
        while(true){
        	System.out.print("Enter quantity: ");
            int q = sc.nextInt();
            System.out.print("Enter product number (1-3) or 0 to stop: ");
            int p = sc.nextInt();
            if(p == 0) break;
            
            double price = 0;
            switch(p){
                case 1: price = 22.50;
                        total += price * q;
                        System.out.println("Total retail value: " + total);
                		break;
                case 2: price = 44.50; 
                        total += price * q;
                        System.out.println("Total retail value: " + total);
                		break;
                case 3: price = 9.98; 
                        total += price * q;
                        System.out.println("Total retail value: " + total);
                		break;
                default: System.out.println("Invalid"); continue;
            }
           
        }
        
	}
}

/*
  Enter quantity: 4
Enter product number (1-3) or 0 to stop: 2
Total retail value: 178.0 
*/

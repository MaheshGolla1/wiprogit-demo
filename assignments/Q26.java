package assignments;
import java.util.*;

public class Q26 {
    public static void main(String[] args) {
        int[] arr = {2, 3, 54, 1, 6, 7, 7};

        // ✅ Remove duplicates using LinkedHashSet (preserves insertion order)
        LinkedHashSet<Integer> set = new LinkedHashSet<>();
        for (int num : arr) {
            set.add(num);
        }

        // ✅ Calculate sum of even numbers
        int sumEven = 0;
        System.out.println("Array after removing duplicates:");
        for (int num : set) {
            System.out.print(num + " ");
            if (num % 2 == 0) {
                sumEven += num;
            }
        }

        System.out.println("\nSum of even numbers: " + sumEven);
    }
}

/* Array after removing duplicates:
2 3 54 1 6 7 
Sum of even numbers: 62
*/
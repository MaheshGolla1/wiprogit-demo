package assignments;

public class Q15 {
    public static void main(String[] args) {
    	int[] arr = {1, 2, 3, 3, 6, 3, 4, 2, 3, 4, 5, 6};
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
             
            for (int j = i ; j < arr.length; j++) 
            {
                if (arr[i] == arr[j]) 
                {
                    count++;
                }
            }

            System.out.println(arr[i] + " occurs " + count + " times");
        }
    
    }
}

/* 4 occurs 16 times
2 occurs 17 times
3 occurs 18 times
4 occurs 19 times
5 occurs 20 times
6 occurs 21 times
*/
package assignments;
import java.io.*;
import java.util.Scanner;

public class Q37 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            File file = new File("batchmates.txt");
            FileWriter writer = new FileWriter(file);
            System.out.print("Enter number of batch mates: ");
            int n = sc.nextInt();
            sc.nextLine();
            for (int i = 0; i < n; i++) {
                System.out.print("Enter name of batch mate " + (i + 1) + ": ");
                String name = sc.nextLine();
                writer.write(name + "\n");
            }
            writer.close();
            System.out.println("\nBatch mates details stored successfully.\n");
            BufferedReader reader = new BufferedReader(new FileReader(file));
            String line;
            System.out.println("Batch Mates:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            reader.close();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}

/*
 Enter number of batch mates: 5
Enter name of batch mate 1: priya
Enter name of batch mate 2: riya
Enter name of batch mate 3: royya
Enter name of batch mate 4: miya
Enter name of batch mate 5: niya

Batch mates details stored successfully.

Batch Mates:
priya
riya
royya
miya
niya
*/

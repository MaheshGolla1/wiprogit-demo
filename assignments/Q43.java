package assignments;
import java.io.*;

public class Q43 {
    public static void main(String[] args) {
        String fileName = "C:\\Users\\dell\\Desktop\\wipro training\\myassignments\\src\\assignments\\sample.txt";
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}

/* hi
good morning
*/
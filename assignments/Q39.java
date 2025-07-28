package assignments;
import java.util.ArrayList;

class Library {
    private ArrayList items = new ArrayList();

    public void add(Object item) {
        items.add(item);
    }

    public Object retrieve(int index) {
        return items.get(index);
    }
}

public class Q39 {
    public static void main(String[] args) {
        Library library = new Library();
        library.add("Book: Java Programming");
        library.add("Video: Design Patterns");
        library.add("Newspaper: The Times");
        System.out.println(library.retrieve(0));
        System.out.println(library.retrieve(1));
        System.out.println(library.retrieve(2));
    }
}

/* Book: Java Programming
Video: Design Patterns
Newspaper: The Times
*/

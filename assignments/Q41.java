package assignments;
import java.util.*;

class BookStore {
    private int bookId;
    private String bookName;

    public BookStore(int bookId, String bookName) {
        this.bookId = bookId;
        this.bookName = bookName;
    }

    public int getBookId() {
        return bookId;
    }

    public String getBookName() {
        return bookName;
    }

    @Override
    public String toString() {
        return "Book ID: " + bookId + ", Book Name: " + bookName;
    }
}

class SortByName implements Comparator<BookStore> {
    public int compare(BookStore b1, BookStore b2) {
        return b1.getBookName().compareToIgnoreCase(b2.getBookName());
    }
}

class SortById implements Comparator<BookStore> {
    public int compare(BookStore b1, BookStore b2) {
        return Integer.compare(b1.getBookId(), b2.getBookId());
    }
}

public class Q41 {
    public static void main(String[] args) {
        List<BookStore> books = new ArrayList<>();
        books.add(new BookStore(103, "Java Programming"));
        books.add(new BookStore(101, "Data Structures"));
        books.add(new BookStore(105, "Algorithms"));
        books.add(new BookStore(102, "Operating Systems"));

        System.out.println("Sorted by Book Name:");
        Collections.sort(books, new SortByName());
        for (BookStore b : books) {
            System.out.println(b);
        }

        System.out.println("\nSorted by Book ID:");
        Collections.sort(books, new SortById());
        for (BookStore b : books) {
            System.out.println(b);
        }
    }
}

/* orted by Book ID:
Book ID: 101, Book Name: Data Structures
Book ID: 102, Book Name: Operating Systems
Book ID: 103, Book Name: Java Programming
Book ID: 105, Book Name: Algorithms
*/

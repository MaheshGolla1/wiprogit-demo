package dao;

import java.sql.*;
import java.util.*;
import model.Book;

public class BookDAO {
    private String jdbcURL = "jdbc:mysql://localhost:3306/bookdb";
    private String jdbcUsername = "root";
    private String jdbcPassword = "yourpassword";

    private static final String INSERT_BOOK = "INSERT INTO books (title, author, price) VALUES (?, ?, ?)";
    private static final String SELECT_ALL_BOOKS = "SELECT * FROM books";
    private static final String DELETE_BOOK = "DELETE FROM books WHERE id = ?";
    private static final String SELECT_BOOK_BY_ID = "SELECT * FROM books WHERE id = ?";
    private static final String UPDATE_BOOK = "UPDATE books SET title=?, author=?, price=? WHERE id=?";

    protected Connection getConnection() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return conn;
    }

    public void insertBook(Book book) throws SQLException {
        try (Connection conn = getConnection(); PreparedStatement stmt = conn.prepareStatement(INSERT_BOOK)) {
            stmt.setString(1, book.getTitle());
            stmt.setString(2, book.getAuthor());
            stmt.setFloat(3, book.getPrice());
            stmt.executeUpdate();
        }
    }

    public List<Book> selectAllBooks() {
        List<Book> books = new ArrayList<>();
        try (Connection conn = getConnection(); PreparedStatement stmt = conn.prepareStatement(SELECT_ALL_BOOKS)) {
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                books.add(new Book(rs.getString("title"), rs.getString("author"), rs.getFloat("price")));
            }
        } catch (SQLException e) { e.printStackTrace(); }
        return books;
    }

    // Add deleteBook, updateBook, getBookById as needed
}

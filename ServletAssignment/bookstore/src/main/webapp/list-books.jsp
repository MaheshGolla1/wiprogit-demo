<h2>List of Books</h2>
<table border="1">
<tr><th>ID</th><th>Title</th><th>Author</th><th>Price</th></tr>
<% 
    List<model.Book> books = (List<model.Book>) request.getAttribute("listBooks");
    int id = 1;
    for (model.Book book : books) {
%>
<tr>
    <td><%= id++ %></td>
    <td><%= book.getTitle() %></td>
    <td><%= book.getAuthor() %></td>
    <td><%= book.getPrice() %></td>
</tr>
<% } %>
</table>

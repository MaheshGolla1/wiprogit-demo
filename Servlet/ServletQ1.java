package search.SERVLET;

import java.time.LocalDate;
import java.util.*;
        import java.util.stream.*;

class Product {
    Long id;
    String name;
    String category;
    Double price;

    public Product(Long id, String name, String category, Double price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getCategory() { return category; }
    public Double getPrice() { return price; }

    public String toString() {
        return id + ": " + name + " [" + category + "] - ₹" + price;
    }
}

class Customer {
    Long id;
    String name;
    Integer tier;

    public Customer(Long id, String name, Integer tier) {
        this.id = id;
        this.name = name;
        this.tier = tier;
    }

    public Integer getTier() { return tier; }

    public String toString() {
        return id + ": " + name + " [Tier " + tier + "]";
    }
}

class Order {
    Long id;
    String status;
    LocalDate orderDate;
    LocalDate deliveryDate;
    List<Product> products;
    Customer customer;

    public Order(Long id, String status, LocalDate orderDate, LocalDate deliveryDate,
                 List<Product> products, Customer customer) {
        this.id = id;
        this.status = status;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
        this.products = products;
        this.customer = customer;
    }

    public List<Product> getProducts() { return products; }
    public LocalDate getOrderDate() { return orderDate; }
    public Customer getCustomer() { return customer; }

    public String toString() {
        return "Order#" + id + " | " + orderDate + " | " + customer.name;
    }
}

public class StreamApiTasks {
    public static void main(String[] args) {
        // Sample Products
        Product p1 = new Product(1L, "Book A", "Books", 150.0);
        Product p2 = new Product(2L, "Book B", "Books", 80.0);
        Product p3 = new Product(3L, "Toy A", "Toys", 300.0);
        Product p4 = new Product(4L, "Baby Lotion", "Baby", 200.0);
        Product p5 = new Product(5L, "Toy B", "Toys", 250.0);
        Product p6 = new Product(6L, "Baby Powder", "Baby", 120.0);

        List<Product> products = List.of(p1, p2, p3, p4, p5, p6);

        // Sample Customers
        Customer c1 = new Customer(1L, "Alice", 2);
        Customer c2 = new Customer(2L, "Bob", 1);

        // Sample Orders
        Order o1 = new Order(101L, "shipped", LocalDate.of(2021, 2, 10), LocalDate.of(2021, 2, 15), List.of(p1, p3), c1);
        Order o2 = new Order(102L, "delivered", LocalDate.of(2021, 3, 20), LocalDate.of(2021, 3, 22), List.of(p4, p6), c1);
        Order o3 = new Order(103L, "processing", LocalDate.of(2021, 1, 15), LocalDate.of(2021, 1, 20), List.of(p2), c2);
        Order o4 = new Order(104L, "shipped", LocalDate.of(2021, 4, 1), LocalDate.of(2021, 4, 5), List.of(p5), c1);

        List<Order> orders = List.of(o1, o2, o3, o4);

        // ===================== Answers ===========================

        System.out.println("1️⃣ Books with price > ₹100:");
        products.stream()
                .filter(p -> p.getCategory().equals("Books") && p.getPrice() > 100)
                .forEach(System.out::println);

        System.out.println("\n2️⃣ Orders with 'Baby' category products:");
        orders.stream()
                .filter(o -> o.getProducts().stream().anyMatch(p -> p.getCategory().equals("Baby")))
                .forEach(System.out::println);

        System.out.println("\n3️⃣ Toys with 10% discount:");
        products.stream()
                .filter(p -> p.getCategory().equals("Toys"))
                .map(p -> new Product(p.getId(), p.getName(), p.getCategory(), p.getPrice() * 0.9))
                .forEach(System.out::println);

        System.out.println("\n4️⃣ Products ordered by Tier 2 customers (Feb–Apr 2021):");
        orders.stream()
                .filter(o -> o.getCustomer().getTier() == 2)
                .filter(o -> o.getOrderDate().isAfter(LocalDate.of(2021, 2, 1)) &&
                        o.getOrderDate().isBefore(LocalDate.of(2021, 4, 1)))
                .flatMap(o -> o.getProducts().stream())
                .distinct()
                .forEach(System.out::println);

        System.out.println("\n5️⃣ Cheapest Book:");
        products.stream()
                .filter(p -> p.getCategory().equals("Books"))
                .min(Comparator.comparing(Product::getPrice))
                .ifPresent(System.out::println);

        System.out.println("\n6️⃣ 3 Most Recent Orders:");
        orders.stream()
                .sorted(Comparator.comparing(Order::getOrderDate).reversed())
                .limit(3)
                .forEach(System.out::println);

        System.out.println("\n7️⃣ Total Order Value in Feb 2021:");
        double total = orders.stream()
                .filter(o -> o.getOrderDate().getMonthValue() == 2 && o.getOrderDate().getYear() == 2021)
                .flatMap(o -> o.getProducts().stream())
                .mapToDouble(Product::getPrice)
                .sum();
        System.out.println("₹" + total);

        System.out.println("\n8️⃣ Statistics for 'Books' category:");
        DoubleSummaryStatistics stats = products.stream()
                .filter(p -> p.getCategory().equals("Books"))
                .mapToDouble(Product::getPrice)
                .summaryStatistics();
        System.out.println(stats);

        System.out.println("\n9️⃣ Most Expensive Product by Category:");
        Map<String, Optional<Product>> mostExpensive = products.stream()
                .collect(Collectors.groupingBy(
                        Product::getCategory,
                        Collectors.maxBy(Comparator.comparing(Product::getPrice))
                ));
        mostExpensive.forEach((cat, prod) -> System.out.println(cat + " => " + prod.get()));
    }
}
/*
1️⃣ Books with price > ₹100:
1: Book A [Books] - ₹150.0

2️⃣ Orders with 'Baby' category products:
Order#102 | 2021-03-20 | Alice

3️⃣ Toys with 10% discount:
3: Toy A [Toys] - ₹270.0
5: Toy B [Toys] - ₹225.0

4️⃣ Products ordered by Tier 2 customers (Feb–Apr 2021):
1: Book A [Books] - ₹150.0
3: Toy A [Toys] - ₹300.0
4: Baby Lotion [Baby] - ₹200.0
6: Baby Powder [Baby] - ₹120.0

5️⃣ Cheapest Book:
2: Book B [Books] - ₹80.0

6️⃣ 3 Most Recent Orders:
Order#104 | 2021-04-01 | Alice
Order#102 | 2021-03-20 | Alice
Order#101 | 2021-02-10 | Alice

7️⃣ Total Order Value in Feb 2021:
₹450.0

8️⃣ Statistics for 'Books' category:
DoubleSummaryStatistics{count=2, sum=230.000000, min=80.000000, average=115.000000, max=150.000000}

9️⃣ Most Expensive Product by Category:
Books => 1: Book A [Books] - ₹150.0
Toys => 3: Toy A [Toys] - ₹300.0
Baby => 4: Baby Lotion [Baby] - ₹200.0

 */


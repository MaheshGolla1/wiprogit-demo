
package com.example.stream;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.*;

public class StreamAPIExample {
    public static void main(String[] args) {
        List<Product> products = Arrays.asList(
                new Product(1L, "Book A", "Books", 120.0),
                new Product(2L, "Toy Car", "Toys", 80.0),
                new Product(3L, "Milk Bottle", "Baby", 30.0),
                new Product(4L, "Book B", "Books", 90.0),
                new Product(5L, "Teddy Bear", "Toys", 150.0)
        );

        Customer cust1 = new Customer(1L, "Alice", 2);
        Customer cust2 = new Customer(2L, "Bob", 1);

        List<Order> orders = Arrays.asList(
                new Order(1L, "Delivered", LocalDate.of(2021, 2, 15), LocalDate.of(2021, 2, 20),
                        Arrays.asList(products.get(0), products.get(2)), cust1),
                new Order(2L, "Processing", LocalDate.of(2021, 3, 10), LocalDate.of(2021, 3, 15),
                        Arrays.asList(products.get(1), products.get(3)), cust1),
                new Order(3L, "Shipped", LocalDate.of(2021, 1, 10), LocalDate.of(2021, 1, 15),
                        Arrays.asList(products.get(4)), cust2)
        );

        System.out.println("1. Books with price > 100:");
        products.stream().filter(p -> p.getCategory().equals("Books") && p.getPrice() > 100).forEach(System.out::println);

        System.out.println("\n2. Orders with products in Baby category:");
        orders.stream().filter(o -> o.getProducts().stream().anyMatch(p -> p.getCategory().equals("Baby"))).forEach(System.out::println);

        System.out.println("\n3. Toys with 10% discount:");
        products.stream().filter(p -> p.getCategory().equals("Toys")).map(p -> {
            p.setPrice(p.getPrice() * 0.9);
            return p;
        }).forEach(System.out::println);

        System.out.println("\n4. Tier 2 customers orders between 01-Feb-2021 and 01-Apr-2021:");
        orders.stream().filter(o -> o.getCustomer().getTier() == 2 &&
                o.getOrderDate().isAfter(LocalDate.of(2021, 1, 31)) &&
                o.getOrderDate().isBefore(LocalDate.of(2021, 4, 2))).forEach(System.out::println);

        System.out.println("\n5. Cheapest book:");
        products.stream().filter(p -> p.getCategory().equals("Books"))
                .sorted(Comparator.comparing(Product::getPrice))
                .findFirst().ifPresent(System.out::println);

        System.out.println("\n6. 3 most recent orders:");
        orders.stream().sorted((o1, o2) -> o2.getOrderDate().compareTo(o1.getOrderDate()))
                .limit(3).forEach(System.out::println);

        System.out.println("\n7. Total amount in Feb 2021:");
        double total = orders.stream()
                .filter(o -> o.getOrderDate().getMonthValue() == 2 && o.getOrderDate().getYear() == 2021)
                .flatMap(o -> o.getProducts().stream())
                .mapToDouble(Product::getPrice).sum();
        System.out.println(total);

        System.out.println("\n8. Summary statistics for Books:");
        DoubleSummaryStatistics stats = products.stream()
                .filter(p -> p.getCategory().equals("Books"))
                .mapToDouble(Product::getPrice).summaryStatistics();
        System.out.println(stats);

        System.out.println("\n9. Most expensive product by category:");
        Map<String, Optional<Product>> mostExpensiveByCategory = products.stream()
                .collect(Collectors.groupingBy(Product::getCategory,
                        Collectors.maxBy(Comparator.comparing(Product::getPrice))));
        mostExpensiveByCategory.forEach((k, v) -> System.out.println(k + ": " + v.orElse(null)));
    }
}

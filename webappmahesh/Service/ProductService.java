package com.MaheshWebApp.webappmahesh.Service;
import java.util.*;
import com.MaheshWebApp.webappmahesh.Model.Products;
import com.MaheshWebApp.webappmahesh.Repository.productRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@Service
public class ProductService {
   @Autowired
   productRepo repo;



   public List<Products> getProducts() {
      return repo.findAll();
   }
   public Products giveproductById(int id) {
      return repo.findById(id);
   }


   public void addProducts(Products product) {
      repo.save(product);
   }

   public void updateProducts(Products product) {
      repo.save(product);
   }

   public void deleteproducts(int id) {
      repo.deleteById(id);
   }


//   public List<Products> productlist = new ArrayList<>(Arrays.asList(
//           new Products(101, "Mahesh", 2450000),
//           new Products(102, "Nikitha", 50000),
//           new Products(103, "Hanuman", 98700),
//           new Products(104, "Satya", 230000)));
//
//
//   public List<Products> getProducts() {
//      return productlist;
//   }
//
//   public Products giveproductById( int id) {
//      return productlist.stream().filter(p -> p.getProdId() == id).findFirst().orElse(new Products(1, "Not Right Id", 0));
//
//   }
//
//
//   public void addProducts(Products product) {
//      productlist.add(product);
//   }
//
//
//   public void updateProducts(Products product) {
//      int index=0;
//      for(int i=0;i<productlist.size();i++) {
//         if (productlist.get(i).getProdId() == product.getProdId()) {
//            index = i;
//            break;
//         }
//      }
//         productlist.set(index,product);
//   }
//   public void deleteProducts(int id) {
//      int index=0;
//      for(int i=0;i<productlist.size();i++) {
//         if (productlist.get(i).getProdId() == id) {
//            index = i;
//            break;
//         }
//      }
//      productlist.remove(index);
//
//   }
//
//



}
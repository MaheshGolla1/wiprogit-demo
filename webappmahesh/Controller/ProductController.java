package com.MaheshWebApp.webappmahesh.Controller;
import java.util.*;
import com.MaheshWebApp.webappmahesh.Service.ProductService;
import com.MaheshWebApp.webappmahesh.Model.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/product")
    public List<Products> getProducts(){
        return productService.getProducts();
    }

    @GetMapping("/product/{id}")
 //   @RequestMapping("{id}")
    public Products getProductById(@PathVariable int id){
        return productService.giveproductById(id);
    }
    @PostMapping("/product")
    public void addProduct(@RequestBody Products product){
         productService.addProducts(product);
    }
    @PutMapping("/product")
    public void updateProduct(@RequestBody Products product){
        productService.updateProducts(product);
    }


    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable int id){
        productService.deleteproducts(id);
    }

  //  @DeleteMapping("/product{id}")
   // public void deleteProduct(@PathVariable int id){
       // productService.deleteproducts(id);
  //  }
}



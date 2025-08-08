package com.MaheshWebApp.webappmahesh.Repository;

import com.MaheshWebApp.webappmahesh.Model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface productRepo  extends JpaRepository<Products,Integer> {
    Products findById(int id);

  //  List<Products> findByPrice(String price);
//    List<Products> findByNameAndCourse(String name, String course);
//    List<Products> findByIdGreaterThan(int id);
}

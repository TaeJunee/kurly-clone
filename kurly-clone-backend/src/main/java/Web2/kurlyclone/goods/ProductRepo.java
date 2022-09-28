package Web2.kurlyclone.goods;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    Optional<Product> findById(Long id);

    List<Product> findAll();

    List<Product> findByCategory(@Param("category") String category);

    List<Product> findByCategoryAndSubCategory(@Param("category") String category, @Param("subCategory") String subCategory);

    List<Product> findByDiscountNotNull();

}

package Web2.kurlyclone.goods;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface GoodsRepo extends JpaRepository<Goods, Long>, JpaSpecificationExecutor<Goods> {

    Optional<Goods> findByOid(Long oid);

    @Query("select b from Goods b where b.category = :category")
    List<Goods> findByCategory(@Param("category") String category);
    @Query("select b from Goods b where b.category = :category and b.subCategory = :subCategory")
    List<Goods> findByCategoryAndSubCategory(@Param("category") String category, @Param("subCategory") String subCategory);
}

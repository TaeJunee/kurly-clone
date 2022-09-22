package Web2.kurlyclone.goods;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GoodsRepo extends JpaRepository<Goods, Long> {

    Optional<Goods> findByOid(Long oid);
}

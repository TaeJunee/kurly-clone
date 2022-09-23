package Web2.kurlyclone.goods;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Goods {

    @Id
    @GeneratedValue
    @Column(name = "oid")
    private Long oid;
    private String category;
    private String subCategory;
    private String thumbnail;
    private String name;
    private String description;
    private Integer price;
    private Float discount;
    private String info;
    private String imgMain;

    @CreationTimestamp
    private LocalDateTime createAt;
    @UpdateTimestamp
    private LocalDateTime updateAt;

}

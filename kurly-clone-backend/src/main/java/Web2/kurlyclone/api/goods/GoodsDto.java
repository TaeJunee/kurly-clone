package Web2.kurlyclone.api.goods;

import lombok.Data;

@Data
public class GoodsDto {

    private String category;
    private String subCategory;
    private String thumbnail;
    private String name;
    private String description;
    private int price;
    private float discount;
    private String info;
    private String imgMain;
}

package Web2.kurlyclone.api.goods;


import Web2.kurlyclone.goods.Goods;
import Web2.kurlyclone.goods.GoodsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping("/api/goods")
@RequiredArgsConstructor
public class GoodsController {

    private final GoodsService goodsService;
    private final GoodsRepo goodsRepo;

    @GetMapping("/{id}")
    public Goods goodsDetailPage(@PathVariable("id") Long oid) {
        return goodsService.findOne(oid);
    }
    @GetMapping("/category-list")
    public List<Goods> goodsCategory(
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "subCategory", required = false) String subCategory
    ) {
        if (subCategory != null) return goodsService.findByCategoryAndSubCategory(category, subCategory);
        return goodsService.findByCategory(category);
    }
}

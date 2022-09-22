package Web2.kurlyclone.api.goods;


import Web2.kurlyclone.goods.Goods;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/goods")
@RequiredArgsConstructor
public class GoodsController {

    private final GoodsService goodsService;

    @GetMapping("/{id}")
    public Goods goodsDetailPage(@PathVariable("id") Long oid) {
        return goodsService.findOne(oid);
    }
}

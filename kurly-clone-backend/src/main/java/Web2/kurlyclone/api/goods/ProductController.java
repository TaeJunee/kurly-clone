package Web2.kurlyclone.api.goods;


import Web2.kurlyclone.goods.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/{id}")
    public Product productDetailPage(@PathVariable("id") Long id) {
        return productService.getProduct(id);
    }

    @GetMapping("/list")
    public List<Product> productList(
            @RequestParam(value = "category", required = true) String category,
            @RequestParam(value = "subCategory", required = false) String subCategory
    ) {
        return productService.getCategorizedProducts(category, subCategory);
    }

    @GetMapping("/random")
    public List<Product> randomProducts(
            @RequestParam(value = "onSale", required = false) boolean onSale,
            @RequestParam(value = "category", required = false) String category) {
        return productService.getRandomProducts(25, onSale, category);
    }

//    @GetMapping("/random/onsale")
//    public List<Product> randomProductsOnSale() {
//        return productService.getRandomProductsOnSale(25);
//    }
}

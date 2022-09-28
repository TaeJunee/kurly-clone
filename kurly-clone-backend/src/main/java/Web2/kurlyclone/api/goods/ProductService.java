package Web2.kurlyclone.api.goods;

import Web2.kurlyclone.goods.Product;
import Web2.kurlyclone.goods.ProductRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class ProductService {

    private final ProductRepo productRepo;

    public Product getProduct(Long id) {
        return productRepo.findById(id).orElse(null);
    }

    public List<Product> getCategorizedProducts(String category, String subCategory) {
        if (subCategory != null) { return productRepo.findByCategoryAndSubCategory(category, subCategory); }
        return productRepo.findByCategory(category);
    }

    public List<Product> getAllProducts() {

        return productRepo.findAll();
    }
    public List<Product> getRandomProducts(int numberOfProducts, boolean onSale, String category) {
        List<Product> products;

        if (onSale) { products = productRepo.findByDiscountNotNull(); }
        else if (category != null) { products = productRepo.findByCategory(category); }
        else { products = getAllProducts(); }

        List<Product> randomProducts = new ArrayList<>();
        List<Product> copy = new ArrayList<>(products);

        SecureRandom rand = new SecureRandom();
        for (int i = 0; i < Math.min(numberOfProducts, products.size()); i++) {
            randomProducts.add(copy.remove(rand.nextInt(copy.size())));
        }

        return randomProducts;
    }

    public List<Product> getCategorizedRandomProducts(String category, int numberOfCategorizedProducts) {
        List<Product> categorizedProducts = getCategorizedProducts(category, null);
        List<Product> randomCategorizedProducts = new ArrayList<>();
        List<Product> copy = new ArrayList<>(categorizedProducts);

        SecureRandom rand = new SecureRandom();
        for (int i = 0; i < Math.min(numberOfCategorizedProducts, categorizedProducts.size()); i++) {
            randomCategorizedProducts.add(copy.remove(rand.nextInt(copy.size())));
        }

        return randomCategorizedProducts;
    }

//    public List<Product> getRandomProductsOnSale(int numberOfProducts) {
//        List<Product> products = productRepo.findByDiscountNotNull();
//        List<Product> randomProducts = new ArrayList<>();
//        List<Product> copy = new ArrayList<>(products);
//
//        SecureRandom rand = new SecureRandom();
//        for (int i = 0; i < Math.min(numberOfProducts, products.size()); i++) {
//            randomProducts.add(copy.remove(rand.nextInt(copy.size())));
//        }
//
//        return randomProducts;
//    }
}

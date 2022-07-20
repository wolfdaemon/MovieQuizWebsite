package Services;

import Models.Product;
import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);//Create
    List<Product> getProduct();//Read
    Product updateProduct(Product product, Long productId);//update
    void deleteProduct(Long productId);//Delete
}

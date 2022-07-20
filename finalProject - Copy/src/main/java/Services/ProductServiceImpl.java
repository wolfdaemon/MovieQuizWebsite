package Services;

import Models.Product;
import Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    //Create Operation
    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    //Read Operation
    @Override
    public List<Product> getProduct() {
        return (List<Product>) productRepository.findAll();
    }

    //Update Operation
    @Override
    public Product updateProduct(Product product, Long productId) {
        Product productDB = productRepository.findById(productId).get();
        if (Objects.nonNull(product.getName()) && !"".equalsIgnoreCase(product.getName())) {
            productDB.setName(product.getName());
        }

        if (Objects.nonNull(product.getDescription()) && !"".equalsIgnoreCase(product.getDescription())) {
            productDB.setDescription(product.getDescription());
        }

        if (Objects.nonNull(product.getPrice())) {
            productDB.setPrice(product.getPrice());
        }

        if (Objects.nonNull(product.getRemainQuantity())) {
            productDB.setRemainQuantity(product.getRemainQuantity());
        }
        return productRepository.save(productDB);
    }

    //Delete Operation
    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }
}

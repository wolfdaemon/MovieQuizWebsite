package Controllers;

import Models.Product;
import Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String main() {
        return "index";
    }

    //Create Operation
    @PostMapping("/prod")
    public Product saveProduct(@Valid @RequestBody Product product) {
        return productService.saveProduct(product);
    }

    //Read Operation
    @GetMapping("/prod")
    public List<Product> getProduct() {
        return productService.getProduct();
    }

    //Update Operation
    @PutMapping("/prod/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable("id") Long productId) {
        return productService.updateProduct(product, productId);
    }

    //Delete Operation
    @DeleteMapping("/prod/{id}")
    public String deleteProduct(@PathVariable("id") Long productId) {
        productService.deleteProduct(productId);
        return "Your Product has been Deleted";
    }
}

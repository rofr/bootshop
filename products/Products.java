package bootshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableDiscoveryClient
@SpringBootApplication
public class ProductsApplication {

    @GetMapping("/")
    public List<Product> products() {
      List<Product> products = new ArrayList<Product>();
      products.add(new Product("Mjölk", 10));
      products.add(new Product("Bröd", 15));
      products.add(new Product("Ägg", 7));
      products.add(new Product("Gurka", 5));
      return products;
    }


	public static void main(String[] args) {
		SpringApplication.run(ProductsApplication.class, args);
	}
}
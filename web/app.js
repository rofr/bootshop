function Product(name,price) {
    this.name = name;
    this.price = price;
}

function AppViewModel(products = []) {
    let self = this;
    self.products = ko.observableArray(products);
    self.items = ko.observableArray([])

    self.cartTotal = ko.computed(function(){
        let total = 0;
        self.items().forEach(item => total += item.lineTotal());
        return total;
    });

    self.addItem = function(product) {
        let existing = self
            .items()
            .filter(item => item.product.name == product.name);
        if (existing.length > 0) {
            existing[0].increment();
        } else {
            self.items.push(new ItemViewModel(product))
        }
    }
    
    self.checkout = function() {
        window.alert("You just wasted " +  self.cartTotal() + " bucks");
        self.items.removeAll();
    }

    self.setProducts = function(products) {
        self.products.removeAll();
        products.forEach(p => self.products.push(p))
    }
}

function ItemViewModel(product) {
    let self = this;
    self.product = product;
    self.quantity = ko.observable(1);
    self.increment = function(){
        self.quantity(self.quantity()+1);
    }
    self.lineTotal = ko.computed(function(){
        return self.product.price * self.quantity();
    });
}

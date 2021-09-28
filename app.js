function AppViewModel() {
    let self = this;
    self.products = ko.observableArray([]);
    self.items = ko.observableArray([])

    self.addItem = function(product) {
        let existing = self
            .items
            .filter(function(item){ return item.productId == product.id});
        if (existing.length > 0) {
            existing[0].increment();
        } else {
            self.items.push(new ItemViewModel(product))
        }
        self.items.push(new ItemViewModel())
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

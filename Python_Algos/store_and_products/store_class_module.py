class Store:
    def __init__(self, store_name): #Working
        self.store_name = store_name
        self.products = []
    
    def add_product(self, new_product): #Working
        self.products.append(new_product)
        return self
    
    def sell_product(self, sold_product): #Working
        self.products.remove(sold_product)
        return self

    def inflation(self, percent_change): #Working
        for item in range(len(self.products)):
            self.products[item].update_price(percent_change, True)
        return self

    def set_clearance(self, category, percent_discount): #Not Working
        for item in range(len(self.products)):
            if self.products[item].category == category: 
                self.products[item].update_price(percent_discount, False)
        return self

    def store_list(self): #Working
        x = " "
        for item in range(len(self.products)):
            x += (self.products[item].product_name) + " "
        return x
    
    def store_info(self): #Working
        print("This store is called", (f"{self.store_name}."), "It has the following products:", self.store_list())
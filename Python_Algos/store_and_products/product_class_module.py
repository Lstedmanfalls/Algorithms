class Product:
    def __init__(self, product_name, price, category):
        self.product_name = product_name
        self.price = price
        self.category = category
    
    def update_price (self, percent_change, is_increased): # Working
        self.percent_change = percent_change
        self.is_increased = is_increased
        if is_increased == True:
            self.price += (self.price * self.percent_change)
            return self
        else:
            self.price -= (self.price * self.percent_change)
            return self

    def print_info(self): #Working
        print("The", self.product_name, "is a", self.category, "which costs", (f"${self.price}"))
        return self
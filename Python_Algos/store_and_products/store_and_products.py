from product_class_module import Product
from store_class_module import Store

Safeway = Store("Safeway")
banana = Product("banana", 100, "fruit")
mango = Product("mango", 50, "fruit")
cheese = Product("cheese", 10, "dairy")

Safeway.add_product(banana) # Adding banana
Safeway.add_product(mango) # Adding mango
Safeway.add_product(cheese) # Adding cheese
Safeway.store_info() # Checking that products were added

banana.print_info() # Checking banana's info
mango.print_info() # Checking mango's info
cheese.print_info() # Checking cheese's info

mango.update_price(.5, True).print_info() # Checking that mango price incresed
banana.update_price(.5, False).print_info() # Checking that banana price decreased

Safeway.inflation(.5) # Checking inflation method
banana.print_info() # Checking that banana price increased
cheese.print_info() # Checking that cheese price increased

Safeway.set_clearance("fruit", .5) # Checking clearance method
banana.print_info() # Checking that banana price decreased
mango.print_info() # Checking that mango price decreased
cheese.print_info() # Checking that cheese price did not change

Safeway.sell_product(mango) # Checking mango sale
Safeway.store_info() # Checking that mango was removed
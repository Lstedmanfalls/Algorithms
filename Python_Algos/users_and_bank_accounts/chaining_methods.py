# Update the "user" challenge so that each instance's methods are chained

class User:
    def __init__(self, user_name):
        self.name = user_name
        self.account_balance = 0 
    
    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self

    def make_deposit(self, amount):
        self.account_balance += amount
        return self


    def make_transfer(self, amount, recipient):
        self.account_balance -= amount
        recipient.make_deposit(amount)
        return self


    def display_user_balance(self):
        print(self.name + "'s balance is", (f"${self.account_balance}"))
        return self


first = User("User 1")
second = User("User 2")
third = User("User 3")

first.make_deposit(40).make_deposit(40).make_deposit(40).make_withdrawl(40).display_user_balance()
second.make_deposit(1).make_deposit(1).make_withdrawl(1).display_user_balance()
third.make_deposit(10).make_withdrawl(1).display_user_balance()
first.make_transfer(20, third).display_user_balance()
third.display_user_balance()
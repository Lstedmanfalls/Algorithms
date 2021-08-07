# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified
# display_user_balance(self) - have this method print the user's name and account balance to the terminal (eg. "User: Guido van Rossum, Balance: $150
# BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

# Create a BankAccount class
# The BankAccount class should have a balance. When a new BankAccount instance is created, if an amount is given, the balance of the account should initially be set to that amount; otherwise, the balance should start at $0. 
# The account should also have an interest rate, saved as a decimal (i.e. 1% would be saved as 0.01), which should be provided upon instantiation. (Hint: when using default values in parameters, the order of parameters matters!)

# The class should also have the following methods:
# deposit(self, amount) - increases the account balance by the given amount
# withdraw(self, amount) - decreases the account balance by the given amount if there are sufficient funds; if there is not enough money, print a message "Insufficient funds: Charging a $5 fee" and deduct $5
# display_account_info(self) - print to the console: eg. "Balance: $100"
# yield_interest(self) - increases the account balance by the current balance * the interest rate (as long as the balance is positive)

# have both the User and BankAccount classes in the same file
# only create BankAccount instances inside of the User's __init__ method
# only call BankAccount methods inside of the methods in the User class

class bank_account:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance > 0:
            self.balance -= amount
        else:
            self.balance -= 5
            print("Insufficient funds: Charging a $5 fee")
        return self

    def make_transfer(self, amount, recipient):
        self.withdraw(amount)
        recipient.deposit(amount)
        return self

    def display_account_info(self):
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

class User:
    def __init__(self, user_name):
        self.name = user_name
        self.account = bank_account(int_rate = 0.02, balance = 0) 
    
    def make_withdrawl(self, amount):
        self.account.withdraw(amount)
        return self

    def make_deposit(self, amount):
        self.account.deposit(amount)        
        return self

    def make_transfer(self, amount, recipient):
        self.account.make_transfer(self, amount, recipient)
        return self
    
    def display_user_account(self):
        print(self.name, "'s balance is", (f"${self.account.balance}"))
        return self

first = User("User 1")
second = User("User 2")
third = User("User 3")

first.make_deposit(10).display_user_account()
# The BankAccount class should have a balance. 
# When a new BankAccount instance is created, if an amount is given, the balance of the account should initially be set to that amount; otherwise, the balance should start at $0. 
# The account should also have an interest rate, saved as a decimal (i.e. 1% would be saved as 0.01), which should be provided upon instantiation.  (Hint: when using default values in parameters, the order of parameters matters!)

# The class should also have the following methods:
    # deposit(self, amount) - increases the account balance by the given amount
    # withdraw(self, amount) - decreases the account balance by the given amount if there are sufficient funds; if there is not enough money, print a  message "Insufficient funds: Charging a $5 fee" and deduct $5
    # display_account_info(self) - print to the console: eg. "Balance: $100"
    # yield_interest(self) - increases the account balance by the current balance * the interest rate (as long as the balance is positive)

# To the first account, make 3 deposits and 1 withdrawal, then calculate interest and display the account's info all in one line of code (i.e. chaining)

# To the second account, make 2 deposits and 4 withdrawals, then calculate interest and display the account's info all in one line of code (i.e. chaining)

class bank_account:
    def __init__(self, int_rate = .01, balance = 0):
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

    def display_account_info(self):
        print("Balance is", (f"${self.balance}"))
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

account_1 = bank_account()
account_2 = bank_account()
account_3 = bank_account(1,0)

account_1.deposit(1).deposit(1).deposit(1).withdraw(1).yield_interest().display_account_info()
account_2.deposit(20).deposit(20).withdraw(1).withdraw(1).withdraw(1).withdraw(1).yield_interest().display_account_info()
account_3.withdraw(1).yield_interest().display_account_info() #Testing insufficient funds and interest rate conditions
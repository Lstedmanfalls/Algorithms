# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified

# display_user_balance(self) - have this method print the user's name and account balance to the terminal
    #eg. "User: Guido van Rossum, Balance: $150

# BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

# STEPS:
    # Create a file with the User class, including the __init__ and make_deposit methods

    # Add a make_withdrawal method to the User class

    # Add a display_user_balance method to the User class

    # Create 3 instances of the User class

    # Have the first user make 3 deposits and 1 withdrawal and then display their balance

    # Have the second user make 2 deposits and 2 withdrawals and then display their balance

    # Have the third user make 1 deposits and 3 withdrawals and then display their balance

    # BONUS: Add a transfer_money method; have the first user transfer money to the third user and then print both users' balances

class User:
    def __init__(self, user_name):
        self.name = user_name
        self.account_balance = 0
    
    def make_withdrawl(self, amount):
        self.account_balance -= amount

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_transfer(self, amount, recipient):
        self.account_balance -= amount
        recipient.make_deposit(amount)

    def display_user_balance(self):
        print(self.name + "'s balance is", (f"${self.account_balance}"))

first = User("User 1")
second = User("User 2")
third = User("User 3")

first.make_deposit(40)
first.make_deposit(40)
first.make_deposit(40)
first.make_withdrawl(40)
first.display_user_balance()

second.make_deposit(1)
second.make_deposit(1)
second.make_withdrawl(1)
second.display_user_balance()

third.make_deposit(10)
third.make_withdrawl(1)
third.display_user_balance()

first.make_transfer(20, third)
first.display_user_balance()
third.display_user_balance()
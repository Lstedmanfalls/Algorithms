# Write a single function, randInt() that takes up to 2 arguments.
    # If no arguments are provided, the function should return a random integer between 0 and 100.
    # If only a max number is provided, the function should return a random integer between 0 and the max number.
    # If only a min number is provided, the function should return a random integer between the min number and 100
    # If both a min and max number are provided, the function should return a random integer between those 2 values.


# Notes about using random.random() and rounding:
    # random.random() returns a random floating number between 0.000 and 1.000
    # random.random() * 50 returns a random floating number between 0.000 and 50.000
    # random.random() * 25 + 10 returns a random floating number between 10.000 and 35.000
    # round(num) returns the rounded integer value of num

import random
def randInt(min = 0, max = 100):
        num = random.random() * (max-min) + min
        if max < min:
            return "the max cannot be greater than the min"
        if max < 0:
            return "the max cannot be negative"
        return int(num)
print(randInt())
# print(randInt(max = 50))
# print(randInt(min = -4))
# print(randInt(min = -1, max = 1))	
# print(randInt(min = 50, max = 10))
# print(randInt(min = -20, max = -10))	
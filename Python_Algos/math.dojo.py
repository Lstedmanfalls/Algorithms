# Create a Python class called MathDojo that has one attribute:result, and 2 methods: add and subtract. The 2 methods each must take at least 1 parameter, but could take many more (flexible).

# Write the add method and test it by calling it 3 times, with different numbers of arguments each time
# Write the subtract method and test it by calling it 3 times, with different numbers of arguments each time
# Make sure you are able to chain methods as demonstrated above

class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.num = num
        for i in range(len(nums)):
            num += float(nums[i])
        self.result += num
        return self

    def subtract(self, num, *nums):
        self.num = num
        for i in range(len(nums)):
            self.num += float(nums[i])
        self.result -= self.num
        return self

md = MathDojo()
x = md.add(1,1).add(1,1,1).add(1,1,1,1).subtract(1,1).subtract(1,1,1).subtract(1,1,1,1).result
print(x)
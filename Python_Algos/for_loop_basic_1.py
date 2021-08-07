# Basic - Print all integers from 0 to 150.
for a in range (151):
    print(a)


# # Multiples of Five - Print all the multiples of 5 from 5 to 1,000
for b in range (5,1001,5):
    print(b)


# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
for c in range (1, 101):
    if c %5 != 0:
        print(c)
    elif c % 10 == 0:
        print("Coding Dojo")
    elif c % 5 == 0:
        print("Coding")


# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
sum = 0
for d in range (0, 500001):
    if d %2 != 0:
        sum += d
print(sum)


# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for e in range (2018, 0, -4):
    print(e)


# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)
lowNum = 2
highNum = 9
mult = 3
for f in range (lowNum, highNum+1):
    if f %mult ==0:
        print(f)
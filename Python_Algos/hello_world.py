# 1. TASK: print "Hello World"
print("Hello World")

# 2. print "Hello Lisa!" with the name in a variable
name = "Lisa"
# print it with a comma
print("Hello", name)
#print it with a plus	
print("Hello " + name)

# 3. print "Hello 42 !" with the number in a variable
number = 42
# print("Hello", number, "!") with a comma
print("Hello", number, "!")
# print("Hello " + number + "!") with a + -- this one should give us an error!
print("Hello"+ number + "!")
# NINJA BONUS: Figure out how to resolve the error from above, without changing the + sign to a comma
print("Hello " + str(number) + "!")

# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "pizza"
fave_food2 = "macaroni"
print("I love to eat {} and {}".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}") # with an f string

# NINJA BONUS: Spend a few minutes playing around with other string methods to see what’s out there!
print("hi my name is lisa".upper())
print("HI MY NAME IS LISA".lower())
print("yellow banana yellow yellow".count("yellow"))
print("Hi my name is Lisa".split("a"))
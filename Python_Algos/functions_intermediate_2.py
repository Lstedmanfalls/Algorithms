# 1
# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x = [ [5,2,3], [10,8,9] ]
x[1][0] = 15
print(x)


# Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0]['last_name'] = 'Bryant'
print(students)


# In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'][0] = "Andres"
print(sports_directory)


# Change the value 20 in z to 30
z = [ {'x': 10, 'y': 20} ]
z[0]["y"] = 30
print(z)


# 2
# Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:
# Bonus: Get them to appear exactly as below!)
#     first_name - Michael, last_name - Jordan
#     first_name - John, last_name - Rosales
#     first_name - Mark, last_name - Guillen
#     first_name - KB, last_name - Tonel

students = [
{'first_name':  'Michael', 'last_name' : 'Jordan'},
{'first_name' : 'John', 'last_name' : 'Rosales'},
{'first_name' : 'Mark', 'last_name' : 'Guillen'},
{'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDictionary(some_list):
    for student in students:
        print(f"first_name - {student['first_name']}, last-name - {student['last_name']}")
iterateDictionary(students)


# 3
# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary.

students = [
{'first_name':  'Michael', 'last_name' : 'Jordan'},
{'first_name' : 'John', 'last_name' : 'Rosales'},
{'first_name' : 'Mark', 'last_name' : 'Guillen'},
{'first_name' : 'KB', 'last_name' : 'Tonel'}
]

# value way
def iterateDictionary2(key, list_name):
    for value in list_name:
        print(key[value])
iterateDictionary2("first_name", students)

# index way
def iterateDictionary2(key, list_name):
    for value in range(len(list_name)):
        print(list_name[key][value])
iterateDictionary2("first_name", students)

# 4
# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

# value way
def printInfo(some_dict):
    for key in some_dict:
        print(str(len(some_dict[key])) + " " + key.upper())
        for list_item in some_dict[key]:
            print(list_item)
printInfo(dojo)

# index way
def printInfo(some_dict):
    for key in some_dict:
        print(str(len(some_dict[key])) + " " + key.upper())
        for list_item in range(len(some_dict[key])):
            print(some_dict[key][list_item])
printInfo(dojo)
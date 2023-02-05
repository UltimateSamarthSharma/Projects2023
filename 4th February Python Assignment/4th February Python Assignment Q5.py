print("Q5. Write a python program to filter the numbers in a given list that are divisible by 2 and 3 using the filter function\n")
l = [2, 3, 6, 9, 27, 60, 90, 120, 55, 46]
print("Original list:",l)
result = list(filter(lambda x: x % 2 == 0, l))
print("Numbers divisible by 2:",result)
result = list(filter(lambda x: x % 3 == 0, l))
print("Numbers divisible by 3:",result)
print("Q6. Write a python program to find palindromes in the given list of strings using lambda and filter function\n")
texts = ['python', 'php', 'aba', 'radar', 'level']
print("Orginal list of strings:")
print(texts) 
result = list(filter(lambda x: (x == "".join(reversed(x))), texts)) 
print("\nList of palindromes:")
print(result)
labelledNumbers = []
numbers = [1, 2, 3, 4, 5]

for num in numbers:
    if num % 2 == 0:
        labelledNumbers.append('even')
    else: 
        labelledNumbers.append('odd')

print(labelledNumbers)
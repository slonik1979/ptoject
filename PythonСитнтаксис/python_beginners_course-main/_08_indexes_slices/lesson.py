numbers_1 = [1, 2, 3, 4, 5]
numbers_2 = [6, 7, 8, 9, 10]


def find_average(numbers):
    average = sum(numbers) / len(numbers)
    return average

print(find_average(numbers_1))
print(find_average(numbers_2))
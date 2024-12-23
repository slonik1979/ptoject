#number = int(input())
#p = input()
#s = f'Я больше никогда не буду писать "{p}"! \n'
#print(s * number)

#time = int(input())
#child =int(input())
#print(int(child*time/2))

#print(n % 10)
#print(n // 10 % 10)
#print(n // 10 // 10 % 10)

#name = input()
#number = int(input())
#a = number // 10 // 10 % 10
#k = number // 10 % 10
#n = number % 10
#print("Группа №", a, ".", sep="" )
#print(n, ".", " ", name, ".", sep="" )
#print("Шкафчик:", " ", number, ".", sep="" )
#print("Кроватка:"," ", k, ".", sep="" )


#number = int(input())
#a = number // 10 // 10 % 10
#b = number // 10 // 10 // 10 % 10
#c = n = number % 10
#d = number // 10 % 10
#print(a, b, c, d, sep="")

#d = int(input())
#k = int(input())
#s = int(k / d)
#o = k % d
#print(s)
#print(o)

#a = int(input())
#b = int(input())
#c = int(input())
#print(a + c + 1)

#a = int(input())
#b = input()
#c = int(b, 2)
#print(a + c)

#c = input()
#a = int(c, 2)
#b = int(input())
#print(b -a)


############Украшение чека
"""
good = input()
price = int(input())
weight = int(input())
cash = int(input())
price_string = str(weight) + 'кг * ' + str(price) + 'руб/кг'
sum_string = str(price * weight) + 'руб'
cash_string = str(cash) + 'руб'
change_string = str(cash - price * weight) + 'руб'
print('================Чек================')
print(f'Товар: {good:>28}')
print(f'Цена: {price_string:>29}')
print(f'Итого: {sum_string:>28}')
print(f'Внесено: {cash_string:>26}')
print(f'Сдача: {change_string:>28}')
print('===================================')
"""

"""
name = input('Как Вас зовут?',)
print('Здравствуйте, ', name, "!" , sep="")
a = input('Как дела?',)
if a == "хорошо":
    print('Я за вас рада!')
elif a == "плохо": 
    print('Всё наладится!')
"""

"""
a = int(input())
b = int(input())
c = int(input())

if a > b and a > c:
    print('Петя')
elif b > a and b > c:
    print('Вася')
elif c > a and c > b:
    print('Толя')
"""

"""
a = int(input())
b = int(input())
c = int(input())

if a > b and a > c and b > c:
    print('1. Петя')
    print('2. Вася')
    print('3. Толя')
elif a > b and a > c and b < c:
    print('1. Петя')
    print('2. Толя')
    print('3. Вася')
    
elif b > a and b > c and a > c:
    print('1. Вася')
    print('2. Петя')
    print('3. Толя')
elif b > a and b > c and a < c:
    print('1. Вася')
    print('2. Толя')
    print('3. Петя')
    
elif c > a and c > b and a > b:
    print('1. Толя')
    print('2. Петя')
    print('3. Вася')
elif c > a and c > b and a < b:
    print('1. Толя')
    print('2. Вася')
    print('3. Петя')
"""

"""
a = 6
b = 9

c = int(input())
d = int(input())

if c + a > b + d:
    print('Петя')
else:
    print('Вася')
"""

###########високосный год
"""
number = int(input())
if number% 4 == 0 and (year % 100 != 0 or year % 400 == 0):
    print('YES')
else:
    print('NO')
"""

"""
#########является ли число палиндромом
number = int(input())
if str(number) == str(number)[::-1]:
    print('YES')
else:
    print('NO')
"""

"""
########Зайка — 1
s = input()
if "зайка" in s:
    print('YES')
else:
    print('NO')
"""

"""
#######Первому игроку приготовиться min max
a = str(input())
b = str(input())
c = str(input())
print(min(a, b, c))
"""

"""
########три числа — длины трубочек, каждое с новой строки.
a = int(input())
b = int(input())
c = int(input())
if a < (b + c) and b < (a + c) and c < (a + b):
    print('YES')
else:
    print('NO')
"""

"""
#########Одна цифра — общая у всех трёх чисел в одинаковой позиции
a = int(input())
b = int(input())
c = int(input())

a1 = a // 10 % 10
b1 = b // 10 % 10
c1 = c // 10 % 10

a2 = a % 10
b2 = b % 10
c2 = c % 10

if a1 == b1 == c1:
    print(a1)
elif a2 == b2 == c2:
    print(a2)
"""

"""
#######Выводить «Режим ожидания...», пока дети не прокричат «Три!».
#######В конце вывести «Ёлочка, гори!»
name = "Три!"
while input() != name:
    print("Режим ожидания...")
print("Ёлочка, гори!")
"""


"""
#########Все числа от начала до конца (включительно), записанные через пробел.
n = int(input())
t = int(input())
for i in range(n, t + 1):
    print(i, end=" ")
"""


cost_goods = float(input())
x = 0
while float(cost_goods) != 0:
    """
    if float(cost_goods) >= 500:
        x += float(cost_goods) - (float(cost_goods) / 10)
    """
   
    x += float(cost_goods)
    cost_goods = input()
print(x)








        




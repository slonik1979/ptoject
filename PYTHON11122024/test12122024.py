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

name = input('Как Вас зовут?',)
print('Здравствуйте, ', name, "!" , sep="")
a = input('Как дела?',)
if a == "хорошо":
    print('Я за вас рада!')
elif a == "плохо": 
    print('Всё наладится!')
 
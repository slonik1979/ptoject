import os

say = input()

if 'http://' in say:
    os.system('start' + say)
    print('if')
elif 'www.' in say:
    say = 'http://' + say
    os.system('start' + say)
    print('elif')
    os.system('start' + say)
else:
    say = 'http://www.' + say
    print('else')
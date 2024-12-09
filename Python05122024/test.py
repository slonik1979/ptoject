import os

say = input()

if 'https://' in say:
    os.system('start ' + say)
    print('if')
elif 'www.' in say:
    say = 'https://' + say
    os.system('start ' + say)
    print('elif')
else:
    say = 'https://www.' + say
    os.system('start ' + say)
    print('else')

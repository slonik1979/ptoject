# def format_date(*, day, month) -> str:
#     return f"день: {day} месяц: {month}"

# print(format_date(month='октябрь', day=2, ))

# counter=1
# while counter <= 5:
#     print(f"число равно {counter}")
#     counter += 1


import json

book = {
    'title': '1984',
    'name': 'print',
    'id': '145434545'
}

json_str = json.dumps(book)

print(json_str)


json_string = '{"title": "1984", "name": "print", "id": "145434545"}'

book = json.loads(json_string)

print(book)
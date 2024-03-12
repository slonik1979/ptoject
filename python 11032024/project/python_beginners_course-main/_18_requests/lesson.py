import requests

url = 'https://api.binance.com/api/v3/ticker/price'

response = requests.get(url, params={'symbol': 'BTCUSDT'})

priceObject = response.json()

price = float(priceObject['price'])

print(price)
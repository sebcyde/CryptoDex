# CryptoDex

Thank you for taking the time to check out the CryptoDex! 
To make this small app I used various techniques ranging from simple things like bootstrap for the tab switcher and modal, to more complex techniques such as API requests for pretty much all of the data shown on the page.
						
Difficulties: API's     
There were a number of difficulties with the APIs, for example finding the right API to return the exact data that I wanted to display. The biggest issue I was having was that
although the trending ticker API returned the top 7 trending coins, it didn't return any price data for them, so I didnt have a way to display it. 
              
Solution
Without the API returning any price data, I thought the best way to display it would be to
add a 'more info' button next to the coin name on the trending coins tab that then switches to the search tab and uses the search API function to manually search for the ticker, allowing for a display of not oinly the price data but also various other data such as a short description and daily price movement of the coin.

export function searchLogic() {
	const searchTabForm = document.querySelector('#tickersearch');
	const searchresultname = document.querySelector('.searchresultname');
	const searchresultprice = document.querySelector('.searchresultprice');
	const searchresultticker = document.querySelector('.searchresultticker');
	const searchresultpricechange = document.querySelector(
		'.searchresultdailypricechange'
	);
	const searchresultdesc = document.querySelector('.searchresultdesc');
	const resimage = document.querySelector('#resimage');

	searchTabForm.addEventListener('submit', (e) => {
		e.preventDefault();

		let userInput = document.querySelector('.tickerinput').value;
		console.log(userInput);

		const options = {
			method: 'GET',
			url: `https://api.coingecko.com/api/v3/coins/${userInput}`,
			params: {
				vs_currency: 'usd',
				page: '1',
				per_page: '7',
				order: 'market_cap_desc',
			},
			headers: {
				'x-rapidapi-host': 'coingecko.p.rapidapi.com',
				'x-rapidapi-key': '6e2dd15a75msh5ee96e090ea1a48p103489jsn2f31de6c0b6e',
			},
		};

		axios.request(options).then(function (response) {
			searchTabForm.reset();

			console.log(response.data);
			document
				.getElementById('searchresult')
				.classList.add('searchdynamicborder');
			resimage.classList.remove('hidden');
			resimage.src = response.data.image.large;
			searchresultname.innerHTML = `Name: ${response.data.name}`;
			searchresultprice.innerHTML = `Current Price: ${response.data.market_data.current_price.usd}`;

			searchresultpricechange.innerHTML = `Daily Change: ${response.data.market_data.price_change_percentage_24h_in_currency.usd}%`;

			if (searchresultpricechange.innerHTML.includes('-')) {
				if (searchresultpricechange.classList.contains('green')) {
					searchresultpricechange.classList.remove('green');
				}
				searchresultpricechange.classList.add('red');
			} else {
				if (searchresultpricechange.classList.contains('red')) {
					searchresultpricechange.classList.remove('red');
				}
				searchresultpricechange.classList.add('green');
			}

			searchresultdesc.innerHTML = response.data.description.en;

			resimage.classList.remove('hidden');
			resimage.src = response.data.image.large;
			searchresultname.innerHTML = `Name: ${response.data.name}`;
			searchresultprice.innerHTML = `Current Price: ${response.data.market_data.current_price.usd}`;
			searchresultticker.innerHTML = `Ticker: ${response.data.symbol.toUpperCase()}`;
			searchresultpricechange.innerHTML = `Daily Change: ${response.data.market_data.price_change_percentage_24h_in_currency.usd}%`;

			if (searchresultpricechange.innerHTML.includes('-')) {
				if (searchresultpricechange.classList.contains('green')) {
					searchresultpricechange.classList.remove('green');
				}
				searchresultpricechange.classList.add('red');
			} else {
				if (searchresultpricechange.classList.contains('red')) {
					searchresultpricechange.classList.remove('red');
				}
				searchresultpricechange.classList.add('green');
			}

			searchresultdesc.innerHTML = response.data.description.en;
			searchresultticker.innerHTML = `Ticker: ${response.data.symbol.toUpperCase()}`;
			window.scrollTo(0, 0);
		});
	});
}

export function moreinfo(x) {
	const searchresultname = document.querySelector('.searchresultname');
	const searchresultprice = document.querySelector('.searchresultprice');
	const searchresultticker = document.querySelector('.searchresultticker');
	const searchresultpricechange = document.querySelector(
		'.searchresultdailypricechange'
	);
	const searchresultdesc = document.querySelector('.searchresultdesc');
	const resimage = document.querySelector('#resimage');

	const options = {
		method: 'GET',
		url: `https://api.coingecko.com/api/v3/coins/${x}`,
		params: {
			vs_currency: 'usd',
			page: '1',
			per_page: '7',
			order: 'market_cap_desc',
		},
		headers: {
			'x-rapidapi-host': 'coingecko.p.rapidapi.com',
			'x-rapidapi-key': '6e2dd15a75msh5ee96e090ea1a48p103489jsn2f31de6c0b6e',
		},
	};

	axios.request(options).then(function (response) {
		console.log('requestsent');
		console.log(response.data);

		document
			.getElementById('searchresult')
			.classList.add('searchdynamicborder');

		resimage.classList.remove('hidden');
		resimage.src = response.data.image.large;
		searchresultname.innerHTML = `Name: ${response.data.name}`;
		searchresultprice.innerHTML = `Current Price: ${response.data.market_data.current_price.usd}`;

		searchresultpricechange.innerHTML = `Daily Change: ${response.data.market_data.price_change_percentage_24h_in_currency.usd}%`;

		if (searchresultpricechange.innerHTML.includes('-')) {
			if (searchresultpricechange.classList.contains('green')) {
				searchresultpricechange.classList.remove('green');
			}
			searchresultpricechange.classList.add('red');
		} else {
			if (searchresultpricechange.classList.contains('red')) {
				searchresultpricechange.classList.remove('red');
			}
			searchresultpricechange.classList.add('green');
		}

		searchresultdesc.innerHTML = response.data.description.en;

		searchresultticker.innerHTML = `Ticker: ${response.data.symbol.toUpperCase()}`;
		window.scrollTo(0, 0);
	});
}

import { searchLogic } from './search.js';
import { moreinfo } from './search.js';

export function APIs() {
	const options = {
		method: 'GET',
		url: 'https://api.coingecko.com/api/v3/search/trending',
		params: {
			page: '1',
			per_page: '9',
			order: 'market_cap_desc',
		},
		headers: {
			'x-rapidapi-host': 'coingecko.p.rapidapi.com',
			'x-rapidapi-key': '6e2dd15a75msh5ee96e090ea1a48p103489jsn2f31de6c0b6e',
		},
	};

	let node = document.getElementById('loadicon');

	function requestData() {
		axios
			.request(options)
			.then(function (response) {
				if (node.parentNode) {
					node.parentNode.removeChild(node);
				}

				document.querySelector(
					'.zero'
				).innerText = `${response.data.coins[0].item.symbol} - ${response.data.coins[0].item.name}`;
				let zero = document.querySelector('.zeroth');
				zero.src = response.data.coins[0].item.large;
				document.querySelector('#zeroprice').addEventListener('click', () => {
					const remhome = document
						.querySelector('#nav-home')
						.classList.remove('active');
					const remhometab = document
						.querySelector('#nav-home-tab')
						.classList.remove('active');
					const remhomeshow = document
						.querySelector('#nav-home')
						.classList.remove('show');
					const addsearchactive = document
						.querySelector('#nav-search')
						.classList.add('active');
					const addsearchtabactive = document
						.querySelector('#nav-search-tab')
						.classList.add('active');
					const addsearchshow = document
						.querySelector('#nav-search')
						.classList.add('show');
					remhome;
					remhometab;
					remhomeshow;
					addsearchactive;
					addsearchtabactive;
					addsearchshow;
					searchLogic();
					moreinfo(response.data.coins[0].item.id);
				});

				document.querySelector(
					'.one'
				).innerText = `${response.data.coins[1].item.symbol} - ${response.data.coins[1].item.name}`;
				let one = document.querySelector('.first');
				one.src = response.data.coins[1].item.large;
				document.querySelector('#oneprice').addEventListener('click', () => {
					const remhome = document
						.querySelector('#nav-home')
						.classList.remove('active');
					const remhometab = document
						.querySelector('#nav-home-tab')
						.classList.remove('active');
					const remhomeshow = document
						.querySelector('#nav-home')
						.classList.remove('show');
					const addsearchactive = document
						.querySelector('#nav-search')
						.classList.add('active');
					const addsearchtabactive = document
						.querySelector('#nav-search-tab')
						.classList.add('active');
					const addsearchshow = document
						.querySelector('#nav-search')
						.classList.add('show');
					remhome;
					remhometab;
					remhomeshow;
					addsearchactive;
					addsearchtabactive;
					addsearchshow;
					searchLogic();
					moreinfo(response.data.coins[1].item.id);
				});

				document.querySelector(
					'.two'
				).innerText = `${response.data.coins[2].item.symbol} - ${response.data.coins[2].item.name}`;
				let two = document.querySelector('.second');
				two.src = response.data.coins[2].item.large;
				document.querySelector('#twoprice').addEventListener('click', () => {
					const remhome = document
						.querySelector('#nav-home')
						.classList.remove('active');
					const remhometab = document
						.querySelector('#nav-home-tab')
						.classList.remove('active');
					const remhomeshow = document
						.querySelector('#nav-home')
						.classList.remove('show');
					const addsearchactive = document
						.querySelector('#nav-search')
						.classList.add('active');
					const addsearchtabactive = document
						.querySelector('#nav-search-tab')
						.classList.add('active');
					const addsearchshow = document
						.querySelector('#nav-search')
						.classList.add('show');
					remhome;
					remhometab;
					remhomeshow;
					addsearchactive;
					addsearchtabactive;
					addsearchshow;
					searchLogic();
					moreinfo(response.data.coins[2].item.id);
				});

				document.querySelector(
					'.three'
				).innerText = `${response.data.coins[3].item.symbol} - ${response.data.coins[3].item.name}`;
				let three = document.querySelector('.third');
				three.src = response.data.coins[3].item.large;
				document.querySelector('#threeprice').addEventListener('click', () => {
					const remhome = document
						.querySelector('#nav-home')
						.classList.remove('active');
					const remhometab = document
						.querySelector('#nav-home-tab')
						.classList.remove('active');
					const remhomeshow = document
						.querySelector('#nav-home')
						.classList.remove('show');
					const addsearchactive = document
						.querySelector('#nav-search')
						.classList.add('active');
					const addsearchtabactive = document
						.querySelector('#nav-search-tab')
						.classList.add('active');
					const addsearchshow = document
						.querySelector('#nav-search')
						.classList.add('show');
					remhome;
					remhometab;
					remhomeshow;
					addsearchactive;
					addsearchtabactive;
					addsearchshow;
					searchLogic();
					moreinfo(response.data.coins[3].item.id);
				});

				document.querySelector(
					'.four'
				).innerText = `${response.data.coins[4].item.symbol} - ${response.data.coins[4].item.name}`;
				let four = document.querySelector('.fourth');
				four.src = response.data.coins[4].item.large;
				document.querySelector('#fourprice').addEventListener('click', () => {
					const remhome = document
						.querySelector('#nav-home')
						.classList.remove('active');
					const remhometab = document
						.querySelector('#nav-home-tab')
						.classList.remove('active');
					const remhomeshow = document
						.querySelector('#nav-home')
						.classList.remove('show');
					const addsearchactive = document
						.querySelector('#nav-search')
						.classList.add('active');
					const addsearchtabactive = document
						.querySelector('#nav-search-tab')
						.classList.add('active');
					const addsearchshow = document
						.querySelector('#nav-search')
						.classList.add('show');
					remhome;
					remhometab;
					remhomeshow;
					addsearchactive;
					addsearchtabactive;
					addsearchshow;
					searchLogic();
					moreinfo(response.data.coins[4].item.id);
				});

				document.querySelector(
					'.five'
				).innerText = `${response.data.coins[5].item.symbol} - ${response.data.coins[5].item.name}`;
				let five = document.querySelector('.fifth');
				five.src = response.data.coins[5].item.large;
				document.querySelector('#fiveprice').addEventListener('click', () => {
					const remhome = document
						.querySelector('#nav-home')
						.classList.remove('active');
					const remhometab = document
						.querySelector('#nav-home-tab')
						.classList.remove('active');
					const remhomeshow = document
						.querySelector('#nav-home')
						.classList.remove('show');
					const addsearchactive = document
						.querySelector('#nav-search')
						.classList.add('active');
					const addsearchtabactive = document
						.querySelector('#nav-search-tab')
						.classList.add('active');
					const addsearchshow = document
						.querySelector('#nav-search')
						.classList.add('show');
					remhome;
					remhometab;
					remhomeshow;
					addsearchactive;
					addsearchtabactive;
					addsearchshow;
					searchLogic();
					moreinfo(response.data.coins[5].item.id);
				});

				document.querySelector(
					'.six'
				).innerText = `${response.data.coins[6].item.symbol} - ${response.data.coins[6].item.name}`;
				let six = document.querySelector('.sixth');
				six.src = response.data.coins[6].item.large;
				document.querySelector('#sixprice').addEventListener('click', () => {
					const remhome = document
						.querySelector('#nav-home')
						.classList.remove('active');
					const remhometab = document
						.querySelector('#nav-home-tab')
						.classList.remove('active');
					const remhomeshow = document
						.querySelector('#nav-home')
						.classList.remove('show');
					const addsearchactive = document
						.querySelector('#nav-search')
						.classList.add('active');
					const addsearchtabactive = document
						.querySelector('#nav-search-tab')
						.classList.add('active');
					const addsearchshow = document
						.querySelector('#nav-search')
						.classList.add('show');
					remhome;
					remhometab;
					remhomeshow;
					addsearchactive;
					addsearchtabactive;
					addsearchshow;
					searchLogic();
					moreinfo(response.data.coins[6].item.id);
				});

				let mags = document.querySelectorAll('span.na');
				mags.forEach((element) => {
					element.classList.remove('hidden');
				});
			})
			.catch(function (error) {
				console.error(error);
			});
	}
	requestData();
	setInterval(() => {
		requestData();
	}, 60000);
}

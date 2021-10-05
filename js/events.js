export function eventLogic() {
	const evimage1 = document.querySelector('#evimage1');
	const eventrestitle1 = document.querySelector('.eventrestitle1');
	const eventrescity1 = document.querySelector('.eventrescity1');
	const eventresvenue1 = document.querySelector('.eventresvenue1');
	const eventressd1 = document.querySelector('.eventressd1');
	const eventwebsite1 = document.querySelector('.eventwebsite1');
	const eventresdesc = document.querySelector('.eventresdesc');

	const evimage2 = document.querySelector('#evimage2');
	const eventrestitle2 = document.querySelector('.eventrestitle2');
	const eventrescity2 = document.querySelector('.eventrescity2');
	const eventresvenue2 = document.querySelector('.eventresvenue2');
	const eventressd2 = document.querySelector('.eventressd2');
	const eventwebsite2 = document.querySelector('.eventwebsite2');
	const eventresdesc2 = document.querySelector('.eventresdesc2');

	const evimage3 = document.querySelector('#evimage3');
	const eventrestitle3 = document.querySelector('.eventrestitle3');
	const eventrescity3 = document.querySelector('.eventrescity3');
	const eventresvenue3 = document.querySelector('.eventresvenue3');
	const eventressd3 = document.querySelector('.eventressd3');
	const eventwebsite3 = document.querySelector('.eventwebsite3');
	const eventresdesc3 = document.querySelector('.eventresdesc3');

	const options = {
		method: 'GET',
		url: 'https://api.coingecko.com/api/v3/events',
	};
	axios
		.request(options)
		.then(function (response) {
			let x = 0;
			console.log(response.data.data);
			evimage1.src = response.data.data[x].screenshot;
			eventrestitle1.innerHTML = response.data.data[x].title;
			eventrescity1.innerHTML = response.data.data[x].city;
			eventresvenue1.innerHTML = response.data.data[x].venue;
			eventressd1.innerHTML = response.data.data[x].start_date;
			eventwebsite1.innerHTML = response.data.data[x].website;
			eventresdesc.innerHTML = response.data.data[x].description;

			x++;
			evimage2.src = response.data.data[x].screenshot;
			eventrestitle2.innerHTML = response.data.data[x].title;
			eventrescity2.innerHTML = response.data.data[x].city;
			eventresvenue2.innerHTML = response.data.data[x].venue;
			eventressd2.innerHTML = response.data.data[x].start_date;
			eventwebsite2.innerHTML = response.data.data[x].website;
			eventresdesc2.innerHTML = response.data.data[x].description;

			x++;
			evimage3.src = response.data.data[x].screenshot;
			eventrestitle3.innerHTML = response.data.data[x].title;
			eventrescity3.innerHTML = response.data.data[x].city;
			eventresvenue3.innerHTML = response.data.data[x].venue;
			eventressd3.innerHTML = response.data.data[x].start_date;
			eventwebsite3.innerHTML = response.data.data[x].website;
			eventresdesc3.innerHTML = response.data.data[x].description;
		})
		.catch(function (error) {
			console.error(error);
		});

	const btt = document.querySelectorAll('img.bttimage');
	console.log(btt);
	btt.forEach((element) => {
		element.addEventListener('click', () => {
			window.scrollTo(0, 0);
		});
	});
}

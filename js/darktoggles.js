export function darkMode() {
	const body = document.querySelector('#body');
	const main = document.querySelector('#main');
	const darkMode = document.querySelector('.darkSwitch');

	darkMode.checked = true;

	document.querySelector('.darktoggle').addEventListener('click', () => {
		if (darkMode.checked == true) {
			console.log('Dark Mode Activated');
			body.classList.remove('light');
			body.classList.add('dark');
			main.classList.remove('light');
			main.classList.add('dark');
			document.getElementById('mc').classList.add('dark');
		} else {
			console.log('Dark Mode Deactivated');
			if (main.classList.contains('dark')) {
				body.classList.remove('dark');
				body.classList.add('light');
				main.classList.remove('dark');
				main.classList.add('light');
				document.getElementById('mc').classList.remove('dark');
			}
		}
	});
}

const timer = (id, deadline) => {
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()) /* Date.parse() - переводит дату, полученную в виде строки, в число*/,
			/* теперь необходимо разницу, полученную в переменной t в милисекундах перевести в дни, часы и секунды таймера на странице */
			days = Math.floor(t / (1000 * 60 * 60 * 24)) /* 1000 - кол-во милисекунд в секунде * 60 - кол-во секунд в минуте * 60 - кол-во минут в часе * 24 - кол-во часов в сутках */,
			hours = Math.floor((t / (1000 * 60 * 60)) % 24) /* остаток от деления на 24 даст нам кол-во часов, которых не хватает до полных суток. */,
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	// Функция, которая добавляет ноль к числу, если оно меньше 10
	function addZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock(); /* запускаем функцию здесь, чтобы при обновлении страницы таймер правильно отображался */

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.textContent = addZero(t.days);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.innerHTML = '00';
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		}
	};

	setClock(id, deadline);
};

export default timer;

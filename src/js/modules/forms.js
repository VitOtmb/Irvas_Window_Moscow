import checkNumInputs from './chekNumInputs';
import closeModalAfterSend from './closeModalAfterSend';

const form = (state) => {
	const forms = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input');
	// const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

	// Проверка на ввод только чисел в поле с номером телефона
	checkNumInputs('input[name="user_phone"]');
	// phoneInputs.forEach((item) => {
	// 	item.addEventListener('input', () => {
	// 		item.value = item.value.replace(/\D/, '');
	// 	});
	// });
	// Объект с сообщениями, которые мы будем выводить пользователю после отправки формы
	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо. Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...',
	};

	// Функция отправки данных
	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});

		return await res.text();
	};

	// Функция очистки инпутов
	const clearInput = () => {
		inputs.forEach((item) => {
			item.value = '';
		});
	};

	forms.forEach((item) => {
		item.addEventListener('submit', (event) => {
			event.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			if (item.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData('../../assets/server.php', formData)
				.then((res) => {
					console.log(res);
					statusMessage.textContent = message.success;
					setTimeout(() => {
						closeModalAfterSend();
					}, 2000);
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
					setTimeout(() => {
						closeModalAfterSend();
					}, 2000);
				})
				.finally(() => {
					clearInput();
					// setInterval(() => {
					// 	statusMessage.remove();
					// }, 2000);
				});
		});
	});
};

export default form;

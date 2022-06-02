const checkNumInputs = (selector) => {
	const numInputs = document.querySelectorAll(selector);

	// Проверка на ввод только чисел в поле с номером телефона
	numInputs.forEach((item) => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});
};

export default checkNumInputs;

import calcScroll from './calcScroll';

const images = () => {
	const imgPopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImg = document.createElement('img'),
		scroll = calcScroll();

	// Добавляем созданому div класс popup, который есть в CSS
	imgPopup.classList.add('popup');
	// Вставляем созданный div в секцию work
	workSection.appendChild(imgPopup);

	// Вставляем img с большой картинкой в созданный div
	imgPopup.appendChild(bigImg);

	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		const target = e.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.classList.add('faded_modal');
			imgPopup.style.cssText = 'display: flex; justify-content: center; align-items: center;';
			// Получаем путь родительского узла(parentNode) при клике на картинку, т.к. картинка лежит внутри ссылки
			const path = target.parentNode.getAttribute('href');

			bigImg.style.cssText = 'max-width: 90vh; max-height: 90vh;';
			document.body.style.cssText = `overflow: hidden; margin-right: ${scroll}px;`; /* Отключает скрол при показе модального окна */
			// Вставляем путь в артибут src большой картинки
			bigImg.setAttribute('src', path);
		}
		//
		if (target && target.matches('div.popup')) {
			imgPopup.style.cssText = 'display: none;';
			document.body.style.cssText = 'overflow: ""; margin-right: 0px;'; /* Включает скрол при показе модального окна */
		}
	});
};

export default images;

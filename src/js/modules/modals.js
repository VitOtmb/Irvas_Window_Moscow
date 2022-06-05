import calcScroll from './calcScroll';

function modals() {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll();

		trigger.forEach((item) => {
			item.addEventListener('click', (event) => {
				if (event.target) {
					event.preventDefault();
				}

				windows.forEach((item) => {
					item.style.cssText = 'display: none';
				});

				modal.style.cssText = 'display: block;';
				document.body.style.cssText = `overflow: hidden; margin-right: ${scroll}px;`; /* Отключает скрол при показе модального окна */
				// document.body.classList.add("modal-open"); /* из библиотеки bootstrap */
			});

			close.addEventListener('click', () => {
				windows.forEach((item) => {
					item.style.cssText = 'display: none';
				});
				modal.style.cssText = 'display: none';
				document.body.style.cssText = 'overflow: ""; margin-right: 0px;'; /* Включает скрол при показе модального окна */
				// document.body.classList.remove("modal-open"); /* из библиотеки bootstrap */
			});

			modal.addEventListener('click', (event) => {
				if (event.target === modal && closeClickOverlay) {
					windows.forEach((item) => {
						item.style.cssText = 'display: none';
					});
					modal.style.cssText = 'display: none';
					document.body.style.cssText = 'overflow: ""; margin-right: 0px;';
					// document.body.classList.remove("modal-open"); /* из библиотеки bootstrap */
				}
			});
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.cssText = 'display: block';
			document.body.style.cssText = 'overflow: hidden';
		}, time);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModalByTime('.popup', 600000);
}
export default modals;

function modules() {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		trigger.forEach((item) => {
			item.addEventListener("click", (event) => {
				if (event.target) {
					event.preventDefault();
				}

				modal.style.cssText = "display: block;";
				document.body.style.cssText = "overflow: hidden;";
				// document.body.classList.add("modal-open"); /* из библиотеки bootstrap */
			});

			close.addEventListener("click", () => {
				modal.style.display = "none";
				document.body.style.overflow = "";
				// document.body.classList.remove("modal-open"); /* из библиотеки bootstrap */
			});

			modal.addEventListener("click", (event) => {
				if (event.target === modal) {
					modal.style.display = "none";
					document.body.style.overflow = "";
					// document.body.classList.remove("modal-open"); /* из библиотеки bootstrap */
				}
			});
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = "block";
			document.body.style.overflow = "hidden";
		}, time);
	}

	bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
	bindModal(".phone_link", ".popup", ".popup .popup_close");
	showModalByTime(".popup", 60000);
}
export default modules;

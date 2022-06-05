const closeModalAfterSend = () => {
	const windows = document.querySelectorAll('[data-modal]');
	windows.forEach((window) => {
		window.style.cssText = 'display: none;';
		document.body.style.cssText = 'overflow: ""';
	});
};

export default closeModalAfterSend;

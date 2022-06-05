function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);
	// active = document.querySelector(activeClass);

	function hideTabContent() {
		content.forEach((item) => {
			item.style.cssText = 'display: none;';
		});

		tab.forEach((item) => {
			item.classList.remove(activeClass);
		});
	}
	function showTabContent(tabItem = 0) {
		content[tabItem].style.display = display;

		tab[tabItem].classList.add(activeClass);
	}
	hideTabContent();
	showTabContent();

	header.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}
export default tabs;

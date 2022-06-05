function calcScroll() {
	// Создаем блок и помещаем его в body
	let div = document.createElement('div');
	div.style.cssText = 'width: 50px; heigth: 50px; overflow-y: scroll; visibility: hidden;';
	document.body.appendChild(div);

	// Вычисляем ширину скролла
	let scrollWidth = div.offsetWidth - div.clientWidth;
	// Удаляем побочный элемент
	div.remove();

	return scrollWidth;
}

export default calcScroll;

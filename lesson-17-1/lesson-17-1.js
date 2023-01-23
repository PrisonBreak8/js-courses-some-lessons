// #17-1. Уроки по JavaScript для НАЧИНАЮЩИХ (Практика: простой интернет магазин)

//const goods = document.querySelector('button[data-id="goods"]');
//const cart = document.querySelector('button[data-id="cart"]');

//console.log(goods);
//console.log(cart);

//function clickHandler(event) {
//	// console.dir(event.target.dataset.id); // 1 вариант
//	//console.log(event.target.getAttribute('data-id')); // 2 вариант
//	const id = event.target.dataset.id;
//	if (id === 'goods') {
//		goods.classList.add('active');
//		cart.classList.remove('active');
//	}
//	else if (id === 'cart') {
//		goods.classList.remove('active');
//		cart.classList.add('active');
//	}
//};


// Оптимизируем код (не очень хороший вариант)
//const goods = document.querySelector('button[data-id="goods"]');
//const cart = document.querySelector('button[data-id="cart"]');

//function clickHandler(event) {
//	goods.classList.toggle('active');
//	cart.classList.toggle('active');
//};

//goods.addEventListener('click', clickHandler);
//cart.addEventListener('click', clickHandler);



// Пробуем найти наши кнопки в цыкле (такая логика будет работать если у нас всего два таба)
//const tabs = document.querySelectorAll('button.tab');
//for (let i = 0; i < tabs.length; i++) {
//	const tab = tabs[i];
//	tab.addEventListener('click', clickHandler);
//};

//function clickHandler(event) {
//	for (let i = 0; i < tabs.length; i++) {
//		const tab = tabs[i];
//		tab.classList.toggle('active');
//	};
//};

// Решаем проблему с доп табами
//let activeTabId = 'goods';

//const initialTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`);
//initialTab.classList.add('active');

//const tabs = document.querySelectorAll('button.tab');
//for (let i = 0; i < tabs.length; i++) {
//	const tab = tabs[i];
//	tab.addEventListener('click', clickHandler);
//};

//function clickHandler(event) {
//	const activeTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`);
//	activeTab.classList.remove('active');
//	event.target.classList.add('active');

//	console.log(event.target.dataset);
//	activeTabId = event.target.dataset.tabId;
//};
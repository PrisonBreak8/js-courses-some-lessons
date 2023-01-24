// #17-6. Уроки по JavaScript для НАЧИНАЮЩИХ (Практика: простой интернет магазин)

let activeTabId = 'cart';

const goodsInCart = [{
	name: 'Test',
	price: 500,
	imgSrc: 'img/html.png',
}];

const initialTab = getActiveTab();
initialTab.classList.add('active');

renderTabContentById(activeTabId);

// =======================================


const tabWidthCounter = document.querySelector('button[data-goods-count]');


const tabs = document.querySelectorAll('button.tab');
addClickListeners(tabs, clickHandler);


// =========================================


function clickHandler(event) {
	const activeTab = getActiveTab();

	activeTab.classList.remove('active');
	event.target.classList.add('active');

	console.log(event.target.dataset);
	activeTabId = event.target.dataset.tabId;

	removeActiveTabContent();
	renderTabContentById(activeTabId);
};

function addInCartHandler(product) {
	return () => {
		goodsInCart.push(product);
		tabWidthCounter.dataset.goodsCount = goodsInCart.length;
	}
};

function addClickListeners(elements, callback) {
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];

		element.addEventListener('click', callback);
	};
};

function createProduct(product) {
	return {
		name: product.name ? product.name : 'Имя неизвестно',
		price: product.price ? product.price : null,
		imgSrc: product.imgSrc ? product.imgSrc : 'img/default.png',
	};
};

function getActiveTab() {
	return document.querySelector(`button[data-tab-id="${activeTabId}"]`);
};

function removeActiveTabContent() {
	const activeContent = document.querySelector(`
	[data-active-tab-content="true"]
	`);

	activeContent.remove();
};

function renderTabContentById(tabId) {
	const tabsContainer = document.querySelector('.tabs');
	let html = null;

	if (tabId === 'goods') {
		html = renderGoods();
	}
	else {
		html = renderCart();
	}
	if (html !== null) {
		tabsContainer.after(html);
	}
};

function renderGoods() {
	const div = document.createElement('div');
	div.dataset.activeTabContent = 'true';
	div.className = 'product-items';

	for (let i = 0; i < GOODS.length; i++) {
		const product = createProduct(GOODS[i]);

		const price = product.price === null
			? '<p>Товар закончился</p>'
			: `<p class="price">₽ ${product.price}</p>`;

		// В div добавляем html tag button
		const productBlock = document.createElement('div');
		productBlock.className = 'product-item';
		productBlock.innerHTML = `
	  <img src="${product.imgSrc}">
			<div class="product-list">
				<h3>${product.name}</h3>
				${price}
			</div>
	`;

		if (product.price !== null) {
			const clickHandler = addInCartHandler(product);

			// Создаем кнопку В Корзину
			const button = document.createElement('button');
			button.className = 'button';
			button.textContent = 'В корзину';
			button.addEventListener('click', clickHandler);

			productBlock.querySelector('.product-list').append(button);
		}
		div.append(productBlock);
	};

	return div;
};

function renderCart() {
	const container = document.createElement('div');
	container.dataset.activeTabContent = 'true';
	container.className = 'cart-items';


	for (let i = 0; i < goodsInCart.length; i++) {
		const product = goodsInCart[i];

		const cartItem = document.createElement('div');
		cartItem.className = 'cart-item';
		cartItem.innerHTML = `
			<div class="cart-item-title">${product.name}</div>
		  <div class="cart-item-count">3шт.</div>
			<div class="cart-item-price">₽ ${product.price}</div>
		`;

		const button = document.createElement('button');
		button.className = 'cart-item-delete';
		button.textContent = 'x';
		cartItem.append(button);

		container.append(cartItem);
	};

	return container;

};

// #17-2. Уроки по JavaScript для НАЧИНАЮЩИХ (Практика: простой интернет магазин)

let activeTabId = 'goods';

const initialTab = getActiveTab();
initialTab.classList.add('active');

renderTabContentById(activeTabId);

// ============================

const tabs = document.querySelectorAll('button.tab');
for (let i = 0; i < tabs.length; i++) {
	const tab = tabs[i];
	tab.addEventListener('click', clickHandler);
};

function clickHandler(event) {
	const activeTab = getActiveTab();

	activeTab.classList.remove('active');
	event.target.classList.add('active');

	console.log(event.target.dataset);
	activeTabId = event.target.dataset.tabId;

	removeActiveTabContent();
	renderTabContentById(activeTabId);
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

	let html = '';

	if (tabId === 'goods') {
		html = renderGoods();
	}
	else {
		html = renderCart();
	}
	tabsContainer.insertAdjacentHTML('afterend', html);
};

function renderGoods() {
	return `
   	<div data-active-tab-content="true" class="product-items">
		<div class="product-item">
			<img src="img/html.png">
			<div class="product-list">
				<h3>Уроки по HTML</h3>
				<p class="price">₽ 300</p>
				<button class="button">В корзину</button>
			</div>
		</div>

		<div class="product-item">
			<img src="img/css.png">
			<div class="product-list">
				<h3>Уроки по CSS</h3>
				<p class="price">₽ 150</p>
				<button class="button">В корзину</button>
			</div>
		</div>

		<div class="product-item">
			<img src="img/js.png">
			<div class="product-list">
				<h3>Уроки по JS</h3>
				<p class="price">₽ 260</p>
				<button class="button">В корзину</button>
			</div>
		</div>
	</div>
	`;
};

function renderCart() {
	return `
   	<div data-active-tab-content="true" class="cart-items">
		<div class="cart-item">
			<div class="cart-item-title">Уроки по HTML</div>
			<div class="cart-item-count">3шт.</div>
			<div class="cart-item-price">₽ 150</div>
		</div>

		<div class="cart-item">
			<div class="cart-item-title">Уроки по CSS</div>
			<div class="cart-item-count">1шт.</div>
			<div class="cart-item-price">₽ 450</div>
		</div>

		<div class="cart-item">
			<div class="cart-item-title">Уроки по JS</div>
			<div class="cart-item-count">6шт.</div>
			<div class="cart-item-price">₽ 550</div>
		</div>
	</div>
	`;
};
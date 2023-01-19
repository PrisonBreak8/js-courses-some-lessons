// #9. Уроки по JavaScript для НАЧИНАЮЩИХ (Функции)

// Шаг 1 создаем массив
//const cart = [{
//	name: 'Арбуз',
//	price: 100,
//	count: 1,
//}, {
//	name: 'Хлеб',
//	price: 10,
//	count: 2,
//}, {
//	name: 'Молоко',
//	price: 50,
//	count: 1,
//}];

// Шаг 2 задача постчитать сколько пользователь нам должен денег

// Шаг 3 создаем переменную куда мы занесем финальную цену(глобальная переменная)
//let finalPrice = 0;

// Шаг 4 проходим по каждому элементу массива и собираем информацию по цене и количеству
//for (let i = 0; i < cart.length; i++) {
//	//создаем переменную для каждой иттерации(прохода) в которую будут внесены нужные нам данные
//	let product = cart[i];
//	//создаем переменную в которой производим подсчет стоимости через умножение цены и колличества все это только для каждой иттерации
//	let price = product.price * product.count;
//	//console.log(price);
//	//ссумируем числа со всех иттераций и присваиваем новое значение для глобальной переменной
//	//равносильная запись finalPrice = finalPrice + price;
//	finalPrice += price;
//};

// Шаг 5 расчет суммы для каждого отдельного пользователя
//const name = 'Alex';
//if (name === 'Alex') {
//	const debt = 150;
//	for (let i = 0; i < cart.length; i++) {
//		let product = cart[i];
//		let price = product.price * product.count;
//		finalPrice += price;
//	};

//	finalPrice += debt;
//}
//else if (name === 'John') {
//	const debt = 50;
//	for (let i = 0; i < cart.length; i++) {
//		let product = cart[i];
//		let price = product.price * product.count;
//		finalPrice += price;
//	};

//	finalPrice += debt;
//}
//else {
//	for (let i = 0; i < cart.length; i++) {
//		let product = cart[i];
//		let price = product.price * product.count;
//		finalPrice += price;
//	};
//}

// Шаг 6 создаем функцию для оптимизации кода
//function calculateFinalPrice() {
//	for (let i = 0; i < cart.length; i++) {
//		let product = cart[i];
//		let price = product.price * product.count;
//		finalPrice += price;
//	};
//};

// Шаг 7 оптимизируем код
//if (name === 'Alex') {
//	const debt = 150;
//	calculateFinalPrice();

//	finalPrice += debt;
//}
//else if (name === 'John') {
//	const debt = 50;
//	calculateFinalPrice();

//	finalPrice += debt;
//}
//else {
//	calculateFinalPrice();
//}
//console.log(finalPrice);

// Шаг 8 создаем переменую внутри функции чтобы не искать по другим документам
//function calculateFinalPrice() {
//	let finalPrice = 0;
//	for (let i = 0; i < cart.length; i++) {
//		let product = cart[i];
//		let price = product.price * product.count;
//		finalPrice += price;
//	};
//	return finalPrice;
//};
//console.log(calculateFinalPrice());

// Шаг 9 оптимизируем код с улучшеной функцией
//if (name === 'Alex') {
//	const debt = 150;
//	let finalPrice = calculateFinalPrice();
//	finalPrice += debt;
//	console.log(finalPrice);
//}
//else if (name === 'John') {
//	const debt = 50;
//	let finalPrice = calculateFinalPrice();
//	finalPrice += debt;
//	console.log(finalPrice);
//}
//else {
//	let finalPrice = calculateFinalPrice();
//	console.log(finalPrice);
//}

// Шаг 10 создаем переменую куда запишется финальный долг и еще раз оптимизируем код
//let final = 0;
//if (name === 'Alex') {
//	const debt = 150;
//	final = calculateFinalPrice();
//	final += debt;
//}
//else if (name === 'John') {
//	const debt = 50;
//	final = calculateFinalPrice();
//	final += debt;
//}
//else {
//	final = calculateFinalPrice();
//}
//console.log(final);

// Шаг 11 создаем для каждого пользователя свою корзину
// Функция абсолютно независима и может распологатся в любом документе(можем ее поместить в отдельный документ)
//function calculateFinalPrice(cart) {
//	let finalPrice = 0;
//	for (let i = 0; i < cart.length; i++) {
//		let product = cart[i];
//		let price = product.price * product.count;
//		finalPrice += price;
//	};
//	return finalPrice;
//};

//let final = 0;
// создаем для каждого пользователя свою корзину и передаем данные в функцию alexCart в final = calculateFinalPrice(alexCart);
//if (name === 'Alex') {
//	const alexCart = [{
//		name: 'Арбуз',
//		price: 100,
//		count: 1,
//	}];
//	const debt = 150;
//	final = calculateFinalPrice(alexCart);
//	final += debt;
//}
//else if (name === 'John') {
//	const johnCart = [{
//		name: 'Хлеб',
//		price: 10,
//		count: 2,
//	}];
//	const debt = 50;
//	final = calculateFinalPrice(johnCart);
//	final += debt;
//}
//else {
//	const userCart = [{
//		name: 'Молоко',
//		price: 50,
//		count: 1,
//	}];
//	final = calculateFinalPrice(userCart);
//}
//console.log(final);

// Шаг 12 создаем функцию для проверки правильности данных
//function createProduct(name, price, count) {
//	if (name === '') {
//		name = 'Неизвестный продукт'
//		console.log();
//	}
//	if (typeof price !== 'number') {
//		price = 0;
//		console.log('Вы задали неверную цену');
//	}
//	if (typeof count !== 'number') {
//		count = 0;
//		console.log('Вы задали неправильное количество');
//	}
//	return {
//		name,
//		price,
//		count,
//	}
//}

// Шаг 13 перезаписываем расчет стоимости с учетом функции созданием продуктов createProduct()
//if (name === 'Alex') {
//	// создаем обьект что купил пользователь
//	const product = createProduct('Арбуз', 100, 1);
//	// создаем масив с обьектом внутри (что купил пользователь)
//	const alexCart = [product];
//	const debt = 150;
//	final = calculateFinalPrice(alexCart);
//	final += debt;
//}
//else if (name === 'John') {
//	// создаем обьект что купил пользователь
//	const product = createProduct('Хлеб', 10, 2);
//	// создаем масив с обьектом внутри (что купил пользователь)
//	const johnCart = [product];
//	const debt = 50;
//	final = calculateFinalPrice(johnCart);
//	final += debt;
//}
//else {
//	// создаем обьект что купил пользователь
//	const product = createProduct('Молоко', 50, 1);
//	// создаем масив с обьектом внутри (что купил пользователь)
//	const userCart = [product];
//	final = calculateFinalPrice(userCart);
//}
//console.log(final);



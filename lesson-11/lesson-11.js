//// #11. Уроки по JavaScript для НАЧИНАЮЩИХ (Каррирование, IIFE, рекурсия)

//// Аниномная, IIFE (Самовызывающаяся), рекурсивная
//// return

//const name = 'John';
//let final = 0;

//if (name === 'Alex') {
//	const product = createProduct('Арбуз', 100, 1);
//	const alexCart = [product];

//	const debt = 150;
//	final = calculateFinalPrice(alexCart);
//	final += debt;
//}
//else if (name === 'John') {
//	const product = createProduct('Хлеб', 30, 2);
//	const johnCart = [product];

//	const debt = 50;
//	final = calculateFinalPrice(johnCart);
//	console.log('Финальная цена:', final + debt);
//}
//else {
//	const product = createProduct('Молоко', 50, 1);
//	const userCart = [product];
//	final = calculateFinalPrice(userCart);
//}

//function createProduct(name, price, count) {
//	if (name === '') {
//		name = 'Неизвестный продукт';
//		console.log('Вы задали неправильное имя продукта');
//	}

//	if (typeof price !== 'number') {
//		price = 0;
//		console.log('Вы задали неправильную цену');
//	}

//	if (typeof count !== 'number') {
//		count = 0;
//		console.log('Вы задали неправильное количество');
//	}

//	return {
//		name,
//		price,
//		count,
//	};
//}

//function calculateFinalPrice(cart) {
//	let finalPrice = 0;

//	if (!cart || cart.length === 0) {
//		return finalPrice;
//	}

//	for (let i = 0; i < cart.length; i++) {
//		const product = cart[i];
//		finalPrice += (product.price * product.count);
//	}
//	return finalPrice;
//}

////const add = () => {
////	return () => {
////		console.log('hello');
////	}
////}
//////const func = add();
//////func();
////add()();

////const log = (time) => {
////	return (message) => {
////		return time + ' - ' + message;
////	}
////}
////const logWidthTime = log('9:00');

////setTimeout(() => {
////	const message = logWidthTime('Пользователь нажал войти');
////	console.log(message);
////}, 1000);
////setTimeout(() => {
////	const message = logWidthTime('Пользователь нажал выйти');
////	console.log(message);
////}, 2000);
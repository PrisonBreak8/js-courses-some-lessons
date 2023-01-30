// #20. Уроки по JavaScript для НАЧИНАЮЩИХ (Объекты. Сравнение, JSON, for in, оператор in)

// in, hasOwnProperty
// .toString, JSON.stringify, JSON.parse
// Ключ объекта
// for in
// Object.keys, Object.entries, Object.values
// {} === {} - false



//========================================================================================================================================================


// const key = [1,2,3];

// const value = 'Привет';

// const obj = {
//     // value: value
//     value,
// };

// console.log(obj);
// console.log(typeof obj);

const user = {
	name: 'alex',
	age: null,
	state: 0,
	family: {
		dad: {
			name: 'feqf'
		},
		mom: {
			name: 'feqfqe',
		}
	}
};

// console.log('name' in user);
// console.log(user.hasOwnProperty('id'));

// if ('age' in user) {
//     console.log(user.age);
// }

// if (typeof user.age === 'number' || user.age === undefined) {
//     console.log(user.age);
// }

// if ('state' in user) {
//     console.log('Привет');
// }
// else {
//     user.state = null;
// }

// const key = 'state';

// console.log(key in user);

// console.log(user.toString());
// const str = JSON.stringify(user);
// console.log(JSON.parse(str));

// for (let i in user.family) {
//     const value = user.family[i];
//     console.log(i, value);
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// [
    // ['name', 'alex'],
    // ['age', null],
    // ['state', 0],
// ]

// const entries = Object.entries(user);

// for (let i = 0; i < entries.length; i++) {
//  const entry = entries[i];
//  const key = entry[0];
// const value = entry[1];

// console.log(key, value);
// }


// const obj1 = { test: 'hello' }; // 1
// const obj2 = { test: 'hello' }; // 2



// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

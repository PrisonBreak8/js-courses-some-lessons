// #14. Уроки по JavaScript для НАЧИНАЮЩИХ (append, prepend, createElement, insertAdjacentHTML)

// createElement, append, prepend, before, after, remove
//
// insertAdjacentHTML:
// beforebegin - begin
// afterbegin - prepend
// beforeend - append
// afterend - after

//const div = document.querySelector('.element');

// div.remove(); // удаляем с помощу функции наш элемент

//div.append('Hello-1');
//div.append('Hello-2');
//div.append('Hello-3');

//div.prepend('В самое начало');

//div.append('В самый конец');

//div.before('Перед тэгом DIV');
//div.after('После тэга DIV');


//const button = document.createElement('button');
//button.textContent = 'Создали нашу кнопку';
//const button2 = document.createElement('button');
//button2.textContent = 'Создали нашу кнопку #2';
//div.before(button);
//div.after(button2);


//const ul = document.createElement('ul');
//ul.innerHTML = `
//  <li>1</li>
//  <li>2</li>
//`;
//div.append(ul);

//div.insertAdjacentHTML('afterbegin', `
//  <ul>
//	  <li>1</li>
//	  <li>2</li>
//	</ul>
//`);

//div.insertAdjacentHTML('beforebegin', `
//  <p>TEXT</p>
//`);

//const ul = div.querySelector('ul');
//ul.insertAdjacentHTML('beforeend', `
//   <li>3</li>
//`);
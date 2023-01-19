// #15. Уроки по JavaScript для НАЧИНАЮЩИХ (cssText, classList, data атрибуты)

// setAttribute, hasAttribute, getAttribute, removeAttribute
// data-* атрибуты
// style (background-color -> backgroundColor)
// cssText
// className
// classList (add, remove, toggle, contains)

//const input = document.querySelector('[name="my_checkbox"]');
//console.log(input.getAttribute('type'));  // достаем атрибуты (проверяем или они есть)
//console.log(input.getAttribute('name'));  // достаем атрибуты (проверяем или они есть)

//const a = document.querySelector('a');
//console.log(a.getAttribute('href'));  // достаем атрибуты (проверяем или они есть)
//a.setAttribute('href', 'https:google.com');  // перезаписывае наш href на новое значение
//a.removeAttribute('href');  // удаляем существующий атрибут
//console.log(a.hasAttribute('href')); // проверяем наличие атрибута
//a.setAttribute('data-my_custom_attr', 'custom-attr'); // устанавливаем свой кастомный атрибут
//input.setAttribute('data-test_attr', 'input');
//console.log(input.dataset); // можем получить доступ ко всем дата атрибутам



//const aLink = document.querySelector('a');
//aLink.style.color = 'red';
//aLink.style.backgroundColor = 'black';

//aLink.style.cssText = `
//  color: red;
//	background-color: black;
//	padding: 6px 14px;
//`;



//const aLink = document.querySelector('a');
// aLink.className = 'link2'; // меняем класс для ссылки (перезаписываем класс)
//aLink.className += ' link2'; // добавляем класс к существующему классу
//const div = document.createElement('div');
//div.className = 'custom_className';

//console.log(aLink.classList.contains('link-class-add'));
//aLink.classList.remove('link-class-add');
//console.log(aLink.classList.contains('link-class-add'));
//aLink.classList.add('link-class-add');
//console.log(aLink.classList);

//aLink.classList.toggle('active');

// Создаем кнопку

//const button = document.createElement('button');
//button.textContent = 'Создал в JS кнопку';
//button.style.cssText = `
//  border-radius: 5px;
//	background-color: transparent;
//	padding: 8px 14px;
//	border: 1px solid black;
//`;
//document.body.append(button);


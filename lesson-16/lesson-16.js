// #16. Уроки по JavaScript для НАЧИНАЮЩИХ (addEventListener, removeEventListener)

// click, input, scroll, keydown, resize, mouseenter, mouseleave
// addEventListener, removeEventListener



//const button = document.querySelector('button');
//button.addEventListener('click', clickHandler);
//let i = 0;
//function clickHandler() {
//	i++;
//	console.log('click', i);

//	switch (i) {
//		case 1:
//			button.style.backgroundColor = 'red';
//			break;
//		case 2:
//			button.style.backgroundColor = 'yellow';
//			break;
//		case 3:
//			button.style.backgroundColor = 'blue';
//			break;
//		case 4:
//			button.style.backgroundColor = 'green';
//			break;
//		case 5:
//			button.style.backgroundColor = 'pink';
//			button.removeEventListener('click', clickHandler);
//			break;
//	}
//};


//const input = document.querySelector('[name="my_input"]');
//console.log(input);
//input.addEventListener('input', function_name);

//let prevValue = input.value;
//console.log(prevValue);
//console.dir(input);

//function function_name(event) {
//	console.log('input', event.target.value);
//	const userData = event.target.value;

//	if (userData.includes('(') || userData.includes(')')) {
//		input.value = prevValue;
//		return;
//	}

//	input.value = userData;
//	prevValue = userData;
//};



//document.addEventListener('scroll', (event) => {
//	console.log(event.target.scrollingElement.scrollTop);
//});

//document.addEventListener('keydown', (event) => {
//	console.log(event);
//});

//window.addEventListener('resize', (event) => {
//	console.log(event.target.innerWidth);
//});



// mouseenter, mouseleave
const button = document.querySelector('button');
button.addEventListener('mouseenter', (event) => {
	console.log('ENTER');
});
button.addEventListener('mouseleave', (event) => {
	console.log('LEAVE');
});


let random = Math.random();

let a = prompt('enter first number');
let c = prompt('enter operation');
let b = prompt('enter second number');

let obj = {
	'+': '-',
	'*': '+',
	'-': '/',
	'/': '*',
};

if (random > 0.1) {
	alert(`the result is ${eval(`${a}${c}${b}`)}`);
} else {
	c = obj[c];
	alert(`the result is ${eval(`${a}${c}${b}`)}`);
}

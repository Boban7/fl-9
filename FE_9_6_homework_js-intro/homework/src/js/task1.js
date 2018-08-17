const price = 				prompt('Input amount of money: ');
const discount = 			prompt('Input the discount : ');
const saved = 				price * discount / 100;
const priceWithDiscount = 	price - saved;
let message = 				'’Invalid data’';

function myRound(x) {
	return x % 1 ? (Math.floor(x * 100)/100).toFixed(2) : x;
} 

if(price && discount && price >= 0 && discount >= 0 && discount <= 100) {
	message = 	'Price without discount: ' + myRound(price) + '\n' +
				'Discount: ' + myRound(discount) + '%\n' + 
				'Price with discount: ' + myRound(priceWithDiscount) + '\n' +
				'Saved: ' + myRound(saved);
}

console.log(message);

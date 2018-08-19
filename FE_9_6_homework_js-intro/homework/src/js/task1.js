const PRICE = 				prompt( 'Input price: ' );
const DISCOUNT = 			prompt( 'Input the discount : ' );
const SAVED = 				PRICE * DISCOUNT / 100;
const PRICE_WITH_DISCOUNT = 	PRICE - SAVED;
let message = 				'’Invalid data’';

function myRound( x ) {
	return x % 1 ? ( Math.floor( x * 100 )/100 ).toFixed( 2 ) : x;
} 

if( PRICE && DISCOUNT && PRICE >= 0 && DISCOUNT >= 0 && DISCOUNT <= 100 ) {
	message = 	'Price without discount: ' + myRound( PRICE ) + '\n' +
				'Discount: ' + myRound( DISCOUNT ) + '%\n' + 
				'Price with discount: ' + myRound( PRICE_WITH_DISCOUNT ) + '\n' +
				'Saved: ' + myRound( SAVED );
}

console.log(message);

function isSmaller( param1, param2 ) {
	return param1 === param2 ? false : !isBigger( param1, param2 );
}

console.log( 'isSmaller(1, 6): ' + isSmaller(1, 6));
console.log( 'isSmaller(1, 1): ' + isSmaller(1, 1));
console.log( 'isSmaller(22, 6): ' + isSmaller(22, 6));
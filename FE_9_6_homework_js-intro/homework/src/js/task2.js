const side1 = parseFloat(prompt('Enter lenght of first side'));
const side2 = parseFloat(prompt('Enter lenght of first side'));
const angle = parseFloat(prompt('Enter angle'));
let message = '‘Invalid data’';

function calculation(s1, s2, angDeg) {
	const deg180 = 		180;
	const angRad = 		angDeg * Math.PI / deg180;
	const s3 = 			myRound(Math.sqrt(s1 * s1 + s2 * s2 - 2 * s1 * s2 * Math.cos(angRad)));
	const perimeter = 	myRound(s3 + s1 + s2);
	const square = 		myRound(s1 * s2 / 2 * Math.sin(angRad));

	function myRound(x) {
		return x % 1 ? parseFloat((Math.round(x * 100)/100).toFixed(2)) : x;
	}
	
	if(s3 > 0 && perimeter > 0 && square > 0) {
		message = `c length: ${s3} 
Triangle square: ${square}
Triangle perimeter: ${perimeter}`
	}
}

if(side1 && side2 && angle && side1 > 0 && side2 > 0) {
	calculation(side1, side2, angle);
}

console.log(message);

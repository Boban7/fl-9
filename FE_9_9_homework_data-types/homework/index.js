/*8. Write function, which returns formatted date.

showFormattedDate(new Date('2018-08-27T01:10:00')) // returns ‘It is 27 of Aug, 2018’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)*/

function showFormattedDate(x) {
	let monthLength3Letter = function(date) {
		let month = [
		    "January",
		    "February",
		    "March",
		    "April",
		    "May",
		    "June",
		    "July",
		    "August",
		    "September",
		    "October",
		    "November",
		    "December"
		]
		return month[date.getMonth()].slice(0,3);
	}
   	return `It is ${x.getDate()} of ${monthLength3Letter(x)}, ${x.getFullYear()}`;
}

alert(showFormattedDate(new Date('2018-08-27T01:10:00')));

<<<<<<< HEAD
function findType(param) {
  return typeof param;
}

//this function only run throuth array and do something - but nothing return
function forEach(array, functionToEachItem) {
  for(let i = 0; i < array.length; i++) {
    functionToEachItem(array[i]);
  }
}

//this function return new array with transformed value
function map(array, functionToMap) {
  let resultArray = [];

  forEach(array, elem => resultArray.push(functionToMap(elem)));
  return resultArray;
}


function filter(array, functionToFilter) {
  let resultArray = [];

  forEach(array, function(elem) {
    if (functionToFilter(elem)) {
      resultArray.push(elem);
    }
  });
  return resultArray;
}


function getAdultAppleLovers(inputData) {
  let resultArrayObject;
  let resultName;

  resultArrayObject = filter(inputData, function(el) {
    return el.age > 18 && el.favoriteFruit === 'apple'; 
  });
  resultName = map(resultArrayObject, function(el) {
    return el.name;
  })
  return resultName;
}


function keys(obj) {
  let resultArray = [];
  for (let key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, key)) {
      resultArray.push(key);
    }
  }
  return resultArray;
}


function values(obj) {
  let resultArray = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      resultArray.push(obj[key]);
    }    
  }
  return resultArray;
}


function showFormattedDate(x) {
  let monthLength3Letter = function(date) {
    const numberLetterOfMonth = 3;
    const zeroIndexInMonthName = 0;
    let month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return month[date.getMonth()].slice(zeroIndexInMonthName, numberLetterOfMonth);
  }
    return `It is ${x.getDate()} of ${monthLength3Letter(x)}, ${x.getFullYear()}`;
}
=======
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
>>>>>>> 77bc3e264c4948a7b3d2d70581ac57ff23ef37b4

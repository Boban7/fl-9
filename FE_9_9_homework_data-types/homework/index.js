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

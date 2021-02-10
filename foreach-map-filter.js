/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
	let doubleValuesArray = [];
	arr.forEach((element) => {
		doubleValuesArray.push(element * 2);
	});
	return doubleValuesArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
	let evenArray = [];
	arr.forEach((element) => {
		element % 2 === 0 ? evenArray.push(element) : console.log('oddn number');
	});
	return evenArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
	let firstAndLastArray = [];
	arr.forEach((word) => {
		firstAndLastArray.push(word[0] + word[word.length - 1]);
	});
	return firstAndLastArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
	arr.forEach((obj) => {
		obj[key] = value;
	});
	return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object 
with the keys as the vowel and the values as the number of times the vowel appears in the string. 
This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
const isVowel = function(char) {
	return 'aeiouAEIOU'.indexOf(char) != -1;
};

function vowelCount(str) {
	let returnObj = {};
	for (let char of str) {
		if (isVowel(char)) returnObj[char] = str.split(char).length - 1;
	}
	return returnObj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
	const doubleArray = arr.map(function(item) {
		return item * 2;
	});
	return doubleArray;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
	const valuesTimesIndexArr = arr.map(function(item, index) {
		return item * index;
	});
	return valuesTimesIndexArr;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
	const keysArray = arr.map(function(item) {
		return item[key];
	});
	return keysArray;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
	const namesArray = arr.map(function(item) {
		return `${item.first} ${item.last}`;
	});
	return namesArray;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') 
    // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
	const valuesArray = arr.filter(function(item) {
		return item[key];
	});
	return valuesArray;
}

/*
Write a function called find which accepts an array and a value and 
returns the first element in the array that has the same value as the second parameter 
or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
	const newArr = arr.filter((item) => {
		return item === searchValue;
	});
	return newArr[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value 
to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) 
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
	const filetredArr = arr.filter((obj) => {
		return obj[key] && obj[key] === searchValue;
	});
	return filetredArr[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string 
with all of the vowels (both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
	const removedVowelsArr = str.split('').filter((char) => {
		return !isVowel(char);
	});
	return removedVowelsArr.join('').toLowerCase();
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array 
with all of the odd numbers doubled 
(HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
	const filteredArr = arr
		.filter((item) => {
			return item % 2 !== 0;
		})
		.map((oddNum) => {
			return oddNum * 2;
		});
	return filteredArr;
}

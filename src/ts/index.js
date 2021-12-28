"use strict";
exports.__esModule = true;
function getCookingTime(eggsAmount) {
    switch (true) {
        case Number(eggsAmount) === 0: return 0;
        case Number(eggsAmount) <= 5: return 5;
        case Number(eggsAmount) > 5: {
            var result_1 = 0;
            while (Number(eggsAmount) > 0) {
                eggsAmount -= 5;
                result_1 += 5;
            }
            return result_1;
        }
        default: {
            return null;
        }
    }
}
console.log("задание 1");
console.log(getCookingTime(0)); //returns 0
console.log(getCookingTime(5)); //returns 5
console.log(getCookingTime(9)); //returns 10 (because capacity is 5 so we need to do it times)
//2
function getNumber(array) {
    var even = array.reduce(function (acc, value) { return (value % 2 === 0 ? ++acc : acc); }, Number());
    var odd = array.reduce(function (acc, value) { return (value % 2 === 1 ? ++acc : acc); }, Number());
    switch (true) {
        case even === 1:
            return array.find(function (element) { return element % 2 === 0; });
        case odd === 1:
            return array.find(function (element) { return element % 2 === 1; });
        default: return null;
    }
}
console.log("задание 2");
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])); //returns 4
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])); //returns 13
//3
function findTitle(array, str) {
    var _a;
    var temp = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        var key = Object.keys(value)[0];
        if (String(value[key].toLowerCase()).includes(str))
            temp.push((_a = {}, _a[key] = value[key], _a));
    }
    return temp;
}
var arr = [
    { title: 'Some title1' },
    { title: 'I like JS' },
    { user: 'This obj doesn\’t have key title js' },
    { title: 'Js - is the best!' }
];
var result = findTitle(arr, 'js');
console.log("задание 3");
result.forEach(function (element) { console.log(element); });
//4
function countLetter(array, Letter) {
    return array.reduce(function (acc, value) { return (value === Letter ? acc++ : acc, acc); }, 0);
}
function countCharacters(string) {
    var array = string.replace(/[\s.,%!\[\]*#$@\(\)]/g, '').split('');
    return array.reduce(function (acc, value) { return (acc[value] = countLetter(array, value), acc); }, {});
}
console.log("задание 4");
console.log(countCharacters('sparrow')); // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters('aabcddeffge')); // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters('a 2ab !d')); // should return {a: 2, b:1, d:1, 2:1}
//5
function getNextPalindrome(number) {
    while (true) {
        number++;
        var array = String(number).split('').reverse();
        var revers = '';
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var value = array_2[_i];
            revers += value;
        }
        if (number === +revers && revers.length > 1)
            return number;
    }
}
console.log("задание 5");
console.log(getNextPalindrome(7)); // returns 11
console.log(getNextPalindrome(99)); //returns 101
console.log(getNextPalindrome(132)); // returns 141
console.log(getNextPalindrome(888)); // returns 898
console.log(getNextPalindrome(999)); // returns 1001
//6
var set = {
    element: [],
    add: function (input) {
        if (!Array.isArray(input) && set.element.find(function (val) { return val != input; }))
            set.element.push(input);
        else {
            set.element.push(input);
            set.element = set.element.flat();
            set.element = set.element.filter(function (item, pos) { return set.element.indexOf(item) == pos; });
        }
    },
    remove: function (input) {
        var index = set.element.findIndex(function (val) { return val === input; });
        if (index < 0)
            return;
        set.element.splice(index, 1);
    },
    has: function (input) {
        var index = set.element.findIndex(function (val) { return val === input; });
        if (index >= 0)
            return true;
        return false;
    }
};
// set.add([1, 1, 2, 3, 4, 5]);
// set.remove(2);
// console.log(set.has(5));
// console.log("задание 6")
// console.log(set.element);

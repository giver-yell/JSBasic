'use strict';

// アロー関数
// 引数が1つの場合は()を省略可能
const double = a => a * 2;
console.log(double(12));

const sum = (a, b, c) => a + b + c;
// 関数式
// const sum = function (a, b, c) {
//     return a + b + c;
// };
const total = sum(1, 2, 3) + sum(4, 5, 6);
console.log(total);


// boolean
// false <- 0 , null, undefined, '', false
// true  <- それ以外

// 数字からなる文字列
console.log('5' * 3);                   // 15
console.log('5' - '3');                 //  2

console.log('5' + 3);                   // 53
console.log(parseInt('5', 10) + 3);     //  8

console.log(parseInt('hello', 10) + 3); //  NaN (Not a number)


// 型
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
// nullのtypeがobjectになるのはJSの有名なバグ
console.log(typeof null);


// 'の利用
console.log('it\'s me');
console.log("it's me");
// 改行、タブ
console.log('Hel\nlo Wo\trld');

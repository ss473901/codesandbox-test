/**
 * アロー関数
 */

//従来の関数

// function func1(str) {
//   return str;
// }

// const func1 = funciton(str){
//   return str;
// };
// console.log(func1("func2です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 =
//   "名前は" + myProfile.name + "です。年齢は" + myProfile.age + "です。";

// console.log(message1);

// const { name, age } = myProfile;
// const message2 = "名前は" + name + "です";
// console.log(message2);

// const sayHello = (name = "gest") => console.log(`こんにちは${name}さん`);
// sayHello("aaa");

/**
 * スプレット構文
 */

//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

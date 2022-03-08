"use strict";
exports.__esModule = true;
var a = 20;
var b = 20;
var name = "Lê duy quang";
var age = 20;
var status = true;
var info = {};
var stringArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
var numberArr = [1, 2, 3, 4];
var objectArr = [{ id: 1 }, { id: 2 }];
function sum(numA, numB) {
  //truyền vào kiểu dữ liệu là number, giá trị nhận được cũng phải kiểu dữ liệu number
  return numA + numB;
}
function showData(name) {
  return name;
}
showData(name);
sum(a, b);

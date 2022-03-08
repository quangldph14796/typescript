"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 20;
const b = 20;
const name = "Lê duy quang";
const age = 20;
const status = true;
const info = { id: 1, name: "a" };
const stringArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const numberArr = [1, 2, 3, 4];
const objectArr = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
];
function sum(numA, numB) {
    //truyền vào kiểu dữ liệu là number, giá trị đầu ra cũng phải kiểu dữ liệu number
    return numA + numB;
}
sum(a, b);

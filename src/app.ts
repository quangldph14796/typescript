export {};
type daTa = {
  id: number;
  name: string;
  status?: boolean;
};

const a: number = 20;
const b: number = 20;
const name: string = "Lê duy quang";
const age: number = 20;
const status: boolean = true;
const info: daTa = { id: 1, name: "a" };
const stringArray: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const numberArr: number[] = [1, 2, 3, 4];
const objectArr: daTa[] = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
function sum(numA: number, numB: number): number {
  //truyền vào kiểu dữ liệu là number, giá trị đầu ra cũng phải kiểu dữ liệu number
  return numA + numB;
}

sum(a, b);

"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const add2 = (num1, num2) => {
    return num1 + num2;
};
add(2, 4);
const user2 = {
    name: "Siddik",
    balance: 24,
    add(balance) {
        return this.balance + balance;
    },
};
const newBal = user2.add(5);
console.log(newBal);
const arr = [2, 5, 3];
const newArr = arr.map((elem) => elem * elem);
console.log(newArr);

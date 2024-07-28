function add(num1: number, num2: number): number {
  return num1 + num2;
}

const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

add(2, 4);

const user2: {
  name: string;
  balance: number;
  add(balance: number): number;
} = {
  name: "Siddik",
  balance: 24,
  add(balance) {
    return this.balance + balance;
  },
};

const newBal = user2.add(5);

console.log(newBal);

const arr: number[] = [2, 5, 3];

const newArr: number[] = arr.map((elem: number): number => elem * elem);

console.log(newArr);

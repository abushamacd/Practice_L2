// object destructuting

const employee = {
  name: "Siddik",
  address: {
    location: "BD",
    phone: "01799990909",
  },
};

const {
  address: { phone },
} = employee;

console.log(phone);

// array destructuting
const frindsList: string[] = ["Siddik", "Sweet", "Sunny"];

const [names, ...friends] = frindsList;

const oldFrinds: string[] = ["Siddik", "Sweet", "Sunny"];
const newFrinds: string[] = ["Shabbir", "Shofik", "Salman"];

oldFrinds.push(...newFrinds); //spread operators

const greetings = (...frinds: string[]) => {
  frinds.forEach((frind: string) => console.log(`Hi, ${frind}`));
};

greetings(...oldFrinds);

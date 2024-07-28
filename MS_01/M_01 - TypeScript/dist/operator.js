"use strict";
const oldFrinds = ["Siddik", "Sweet", "Sunny"];
const newFrinds = ["Shabbir", "Shofik", "Salman"];
oldFrinds.push(...newFrinds); //spread operators
const greetings = (...frinds) => {
    frinds.forEach((frind) => console.log(`Hi, ${frind}`));
};
greetings(...oldFrinds);

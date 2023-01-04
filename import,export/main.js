import  myvar, { logStuff, x } from "./other.js" //sintakse ta pati kaip destrukturizacijos, taciau tai nera destruk...

logStuff(x);
logStuff(myvar);//importuoja default y, default gali buti tik vienas

import { TEXT_1, TEXT_2, TEXT_3 } from "./other.js";
import arg from "./logger.js";

arg(TEXT_1);
arg(TEXT_2);
arg(TEXT_3);



const obj = {
  email: "myemail@gmail.com",
  myName: "vardenis",
  someMethod() {
    console.log("hello");
  },
};

//DESTRUKTURIZACIJA
const { myName, email, someMethod } = obj; // nukopijuoja myName ir kt is objekto, naudojant jo rakta

console.log(email);
console.log(myName);
someMethod();

//pvz
const user = {
  email2: "myemail@gmail.com",
  myName: "vardenis",
  age: 27,
};

//create a function that logs user.email and user.name
logUser(user);

function logUser({ email2, myName, age }) {
  name = "otherName";

  console.log(email2);
  console.log(myName);
  console.log(age);
}

logUser({
  email2: "newEmail@gmail.com",
  name: "newName",
  age: 18,
});

// 1. Sukurkite funkciją, kuri priima objektą:
// su "prekių kaina", "siuntimo kaina" ir "administraciniu mokesčiu"
// ir iš log'ina pvm (21 procentas), nuo sudėtos sumos.
// funkcija turi destruktūrizuoti tris atributus 

// iškviesti funkciją du kartus:
// 1. sukurti objekto konstantą ir ją paduoti į funkciją
// 2. paduoti inline objektą į funkciją nenaudojant konsantos.

const prices = {
    price: 10,
    shippinPrice: 3,
    adminFee: 1,
}
sumPVM(prices);

function sumPVM({ price, shippinPrice, adminFee }) {
    let sum = (price + shippinPrice + adminFee);

    const PVM = sum * 0.21;
    console.log(PVM);
}

sumPVM({
    price: 30,
    shippinPrice: 5,
    adminFee: 3,
})


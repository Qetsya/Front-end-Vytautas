// user objektą, kuris turi name ir email
// jis paduodamas į funkciją
// funkcijoje jis destruktūrizuojamas ir pasiimamas tik email.
// išlogginti email

const user = {
    name: "rick",
    email: "sdf\@ShadowRoot.asd",
}

function logEmail(user) {
    const { email } = user;
    console.log({ email });
}
// function logEmail({ email }) {
//     console.log({ email })
// }
logEmail(user);

//------------------------------------
const obj = {
    a: "text",
    b: "text 2",
    c: "text 3",
}

const { a, ...restObj } = obj;

console.log("a", a);
console.log("obj", obj);
console.log("restObj", restObj);

//REST OPERATORIUS====isrenkamos likusios reiksmes ir sukuriama objekto kopija

function logEmailAndReturnResult({ email, ...restUser }) {
    console.log(email);
    return restUser;
}

const result = logEmailAndReturnResult(user);

const { ...clone } = user;

clone.email = "new";

console.log("user", user);
console.log("clone", clone);

//------------------------------------

const product = {
    name: "chips",
    stock: 10,
    price: 2,
}

function getStock({ stock, ...restProduct }) {
    console.log(stock);
    return restProduct;
}

getStock(product);

const result2 = getStock(product);
console.log(result2);

//SPREAD OPERATORIUS==============sukuriama viso objekto kopija

const object1 = {
    a: "tekstas",
    b: "tekstas 2",
}

const copy = { ...object1 };// daznas objektu kopijavimo budas

const object2 = {
    ...object1,
    c: "tekstas 3",
    a: object1.a + " (extended a)",
}

console.log("object1", object1);
console.log("copy", copy);
console.log("object2", object2);

/*Sukurti du objektus:

object user:
name string
email string
ir

object personalInfo:
address string
age number

Parašyti funkciją "createCustomer", kuri priima šiuos du objektus kaip argumentus ir grąžina customer objektą, sukurtą joje.
paleidus funkciją, gautą objektą išlogginti.*/

const user2 = {
    name: "Bob",
    email: "bob@bob.bob",
}

const personalInfo = {
    address: "house",
    age: 50,
}

const customer = createCustomer(user2, personalInfo);
console.log(customer);

function createCustomer(userData, personalData) {
    console.log(userData, personalData);
    return {
        ...userData,
        ...personalData,
    };
}




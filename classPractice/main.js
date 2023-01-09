//KLASES

class User {
    name = null;
    role = null; //default reiksmes

    constructor(name, role = 'student') {
        this.name = name;
        this.role = role;
    }

    sayHi() {
        console.log(this.name + ' says hi');
    }
}


const jonasUser = new User('jonas', 'lecturer');
const petrasUser = new User('petras');

console.log(jonasUser);
console.log(petrasUser);

jonasUser.sayHi();
petrasUser.sayHi();

//KLASES

class Product {
    title = null;
    price = null;
    quantity = null;
    weight = null;

    constructor({ title, price, quantity, weight }) {
        this.title = title;
        this.price = price;
        this.quantity = quantity <= 0;
        this.weight = !weight || weight < 200;
    }

    showProduct() {
        console.log(newProduct)
    }
}

const formData = {
    title: 'knyga',
    price: '10',
    quantity: 20,
    weight: null,
};

const firstProduct = new Product(formData);
const secondeProduct = new Product({
    title: formData.title,
    price: formData.price,
    quantity: formData.quantity,
    weight: formData.weight,
    isDraft: formData.isDraft,
});

const isProduct = firstProduct instanceof Product;

console.log(firstProduct, isProduct);

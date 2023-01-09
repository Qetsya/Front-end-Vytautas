// tik objektai

const formData = {
    title: 'knyga',
    price: '10',
    quantity: 20,
    weight: null,
};

const formData2 = {
    title: 'knyga',
    price: '10',
    quantity: 20,
    weight: null,
    isDraft: true,
};

function createProduct({ title, price, quantity, weight }) {
    return {
        title,
        price,
        quantity,
        isOutOfStock: quantity <= 0,
        isDiscounted: false,
        canBeDelivered: !weight || weight < 200,
    };
}

const newProduct = createProduct(formData);
const newProduct2 = createProduct({
    title: formData2.title,
    price: formData2.price,
    quantity: formData2.quantity,
    weight: formData2.weight,
    isDraft: formData2.isDraft,
});

console.log(newProduct.isDiscounted);
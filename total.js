const products = [
    {name: 'shampoo', price: 300},
    {name: 'chironi', price: 100},
    {name: 'sart', price: 700},
    {name: 'pant', price: 1200},
]
function getShoppingTotal(products) {
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log(total);

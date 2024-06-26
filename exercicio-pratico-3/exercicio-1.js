function calculateTotalPrice(products) {
    const total = calculateTotal(products);
    
    if (total > 100) {
        return applyDiscount(total * 0.1);
    } else {
        return addShippingCost(total);
    }
}

function calculateTotal(products) {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
}

function applyDiscount(total) {
    return total.toFixed(2);
}

function addShippingCost(total) {
    return (total < 50 ? total + 5 : total).toFixed(2);
}

// Teste
const products = [
    { price: 10, quantity: 1 },
    { price: 15, quantity: 1 },
    { price: 20, quantity: 1 }
];
console.log("Preço total: " + calculateTotalPrice(products));
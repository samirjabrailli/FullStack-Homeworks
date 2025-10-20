const products = [
    { id: 1, name: "iPhone 15", category: "Electronics", price: 2100, stock: 15 },
    { id: 2, name: "Nike Air Max", category: "Shoes", price: 180, stock: 30 },
    { id: 3, name: "MacBook Pro", category: "Electronics", price: 3500, stock: 5 },
    { id: 4, name: "T-shirt", category: "Clothing", price: 25, stock: 60 },
    { id: 5, name: "Coffee Maker", category: "Home Appliances", price: 120, stock: 10 },
    { id: 6, name: "Samsung Galaxy S24", category: "Electronics", price: 1900, stock: 20 }
];

const productTableBody = document.getElementById('product-table-body');
products.forEach(product =>{
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.category}</td>
    <td>$${product.price}</td>
    <td>${product.stock}</td>
    `;
    productTableBody.appendChild(row);
})
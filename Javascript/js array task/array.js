const products = [
  { id: 1, name: "iPhone 15", category: "Electronics", price: 2100, stock: 15 },
  { id: 2, name: "Nike Air Max", category: "Shoes", price: 180, stock: 30 },
  { id: 3, name: "MacBook Pro", category: "Electronics", price: 3500, stock: 5 },
  { id: 4, name: "T-shirt", category: "Clothing", price: 25, stock: 60 },
  { id: 5, name: "Coffee Maker", category: "Home Appliances", price: 120, stock: 10 },
  { id: 6, name: "Samsung Galaxy S24", category: "Electronics", price: 1900, stock: 20 }
];


// # Bütün məhsul adlarını (name) console-a çıxar.

// let product = products.map(product => `Name: ${product.name}`);
// console.log(product);

// # Qiyməti 1000-dən böyük olan məhsulları tap və console-a çıxar.


// const mostExpensiveProduct = products.reduce((mostExpensive, product) => {
//   return product.price > mostExpensive.price ? product : mostExpensive;
// })

// console.log(mostExpensiveProduct);

// # “Electronics” kateqoriyasına aid məhsulları filter et.

// let category = products.filter(product => product.category=== "Electronics");
// console.log(category);

// # Yeni array yarad — yalnız name və price property-lərini saxla.

// console.log(
//   products.filter(product => product.name && product.price)
//     .sort((a, b) =>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
//     .map(product => ({
//       name: product.name,
//       price: product.price
//     }) )
// );

// # ilk “Clothing” məhsulunu tap.
//  let category = products.find(product => product.category === "Clothing");

// console.log(category);

// # Qiyməti 500–2000 arası olan məhsulları filter et.
// const price = products.filter(product => product.price < 2000 && product.price > 500 )

// console.log(price);

// # Qiymətə görə məhsulları azdan çoxa sort et.
// const price = products.sort((a, b) => a.price - b.price)

// console.log(price);


// # Adında “Pro” sözü olan məhsulları tap (includes).

// const result = products.filter((product)=>product.name.includes("Pro"));

// console.log(result);
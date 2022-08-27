const products = [
    { name: 'laptop', price: 40000, brand: 'lenovo', color: 'solver' },
    { name: 'phone', price: 25000, brand: 'nokia', color: "black" },
    { name: 'watch', price: 4000, brand: 'samsang', color: 'red' },
    { name: 'laptop', price: 50000, brand: 'accer', color: 'grew' },
    { name: 'sunglash', price: 3000, brand: 'ray', color: 'green' },
    { name: 'head phone', price: 3000, brand: 'remix', color: 'black' },

]
//console.log(product)
const brand = products.map(product => product.brand)
//console.log(brand)

// use forEach 
//products.forEach(product => console.log(product))
//products.forEach(product => console.log(product.price))

// use filter  
const cheap = products.filter(p => p.price <= 40000)
//console.log(cheap)
const spacificName = products.filter(p => p.name.includes('n'))
//console.log(spacificName);

// use find 
const findColor = products.find(p => p.color.includes("black"));
console.log(findColor);
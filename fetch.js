//json

// data to convert json data 

const student = {
    name: 'shakib all hasan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
//console.log(student) // main normal data


const studentJson = JSON.stringify(student);//convert json data (.stringify);

//console.log(studentJson)

//stringify json data (.parse to)  normal data 
const studentObj = JSON.parse(studentJson);
//console.log(studentObj)


// fetch model 
/* fetch('url')
    .then(response => response.json())
    .then(jsonData => consol.log(jsonData)) */

// object key ,value 
const key = Object.keys(student);
const values = Object.values(student);
//console.log(key, values)

// for 
const num = [23, 45, 67, 8, 9,];
//num.forEach(num => console.log(num))
num.map(num => num * 2);


const products = [
    { name: 'laptop', price: 40000, brand: 'lenovo', color: 'solver' },
    { name: 'phone', price: 25000, brand: 'nokia', color: "black" },
    { name: 'watch', price: 4000, brand: 'samsang', color: 'red' },
    { name: 'laptop', price: 50000, brand: 'accer', color: 'grew' },
    { name: 'sunglash', price: 3000, brand: 'ray', color: 'green' },
    { name: 'head phone', price: 3000, brand: 'remix', color: 'black' },

]
const newObj = { name: 'alexa', price: '6000', brand: 'google', color: 'blue' }
const productList = [...products, newObj]
console.log(products)
console.log(productList)
const remaining = products.filter(p => p.name !== 'phone')
console.log(remaining)


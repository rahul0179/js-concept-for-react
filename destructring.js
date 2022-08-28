
// array desturcturing 
const numbers = [10, 20]
//const x = numbers[0]
//const y = numbers[1]
//const [x, y] = [20, 30]
const [x, y] = numbers;

//console.log(x, y)

function boxfy(num1, num2) {
    const nums = [num1, num2];
    return nums
}

const [p, q] = boxfy(50, 60);
//console.log(p, q);

const student = {
    name: 'shakib all hasan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const [firstMovie, secoundMovie] = student.movies
//console.log(firstMovie, secoundMovie);

// object destructring 
const { name, age } = { name: 'arjun', age: 48 }
console.log(name, age)
const employe = {
    id: 'vs code',
    machine: 'mac',
    language: ['html', 'cse', 'javaScript'],
    specification: {
        height: 66,
        weight: 67,
        dring: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'apple'
        }
    }
}
const { machine, language } = employe;
console.log(machine, language[1])
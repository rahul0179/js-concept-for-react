//template string

const num = [89, 35, 98, 12];

const student = {
    name: 'shakib all hasan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}

const about = `My name is  ${student.name} age of: ${student.age} number:${num[2]} also like movie ${student.movies[0]}`
console.log(about)

//array function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMach = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//spred operator(new arry copy other array)
const newNumber = [...num, 55];//copy old array to new array -old arrryte update korleu ta old array pabe ,new arry sei element pabe na,but coma diya new element add korle ta new array te add hobe
num.push(99);

console.log(newNumber)
console.log(num)


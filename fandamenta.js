/* 1 variable */
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

//6 basic condition: >,<,===,!==,<=,>=
//multiple condition: && , ||

if (fatherName === "arnold" || season === 'winter') {
    console.log('if one statment true that means true')
}
else if (fatherName === 'Arnold') {
    console.log('else if')
}
else {
    console.log('else');
}

//3.array
//index
//length,push,pop
const num = [89, 35, 98, 12]
num[0] = 56;

//for loop
for (let i = 0; i < num.length; i++) {
    const number = num[i];
    console.log(number);
}
//function
function multiply(n1, n2) {
    const result = n1 + n2;
    return result;
}
console.log(multiply(44, 60));


const student = {
    name: 'shakib all hasan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const myVariable = 'age';
console.log(student.age) //direct by property
console.log(student['age'])//access via property name  string
console.log(student[myVariable])//  acces via property name in variable
//'almas' ,5 , true,[],{}
//'' , 0 , null, undefined
// check truthy 
let myVar = 5;
if (myVar) {
    myVar *= 100;
}
else {
    myVar = 0;
}

let myMony = 50;
// you check nehative or falsy anything 

if (!myMony) {

}


const money = 80;
let food;
if (money > 100) {
    food = 'briyani';
}
else {
    food = 'cha biskut'

}

//ternari
let food1 = money > 100 ? 'briyani' : 'chaaaa biskut';
console.log(food1)
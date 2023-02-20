// Arrow  Function
const doubleIt = (b, c=0)  => b + c;
// console.log(doubleIt(10, 30));


// spread  

//  Array Spread
const names = ['Humayon', 'Masum', 'Sheikh', 'Joni', 'Rifat'];
const newName = ['newName', ...names, 'lastName'];
// console.log(names, 'New Array is:', newName);


// Object Spread
const fruits = {
    name : 'Apple',
    calory : '40gm',
    weight : '400gm'
};
const newFruits = {
    color: 'White',
    ...fruits,
    price: 30
};
// console.log(newFruits);


// Destructring

// Object Destructruing
const {x, y, z} = {x: 10, y:20, z:30};
console.log(x, y, z);
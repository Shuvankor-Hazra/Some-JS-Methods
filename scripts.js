// (1) Array filter()
const age1 = [32, 33, 16, 17, 18, 6, 40];
function isVoter(vAge) {
  return vAge >= 18;
}
const voterList = age1.filter(isVoter);
console.log(voterList);
console.log(age1);

// (2) Array find()
const age2 = [32, 33, 16, 17, 18, 6, 40, 50];
function checkPerson(pAge) {
  return pAge > 33;
}
const person = age2.find(checkPerson);
console.log(checkPerson);
console.log(age2);

// (3) Array map()
const num = [32, 33, 16, 17, 18, 6, 40, 50];
function newFunction(n) {
  return n * 2;
}
const newNumber = num.map(newFunction);
console.log(newNumber);

// (4) Array reduce()
const num1 = [32, 33, 16, 17, 18, 6, 40, 50];
function getTotal(first, next) {
  return first + next;
}
const total = num1.reduce(getTotal);
console.log(total);

// (5) Array sort()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

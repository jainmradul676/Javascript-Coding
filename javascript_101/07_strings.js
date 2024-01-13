const name = "mradul-jain-mandleshwar"
const repoCount = 100

console.log(name + repoCount + " merged");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

let str = "mradulmj"

// console.log(typeof str);
// console.log(str.toUpperCase());
// console.log(str.charAt(4));

let str1 = str.substring(3,7)
console.log(str1);

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hi%20tesh.com/hitesh%20choudhary"

console.log(url.replaceAll('%20', '-'))


console.log(url.includes('sundar'))

console.log(gameName.split('-'));
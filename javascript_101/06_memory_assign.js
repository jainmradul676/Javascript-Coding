// Stack (Primitive datatypes i.e. copy passed)
// Heap (Non-primitive datatypes i.e. reference of original passed)

let email1 = "jainmradul380@gmil.com"
let email2 = email1

email2 = "jainmradul4040@gmail.com"  // pass by value (copy)

console.log(email1);
console.log(email2);

let obj1 = {
    name: "mradul",
    post: "sf developer",
    company: "google"
}

let obj2 = obj1

obj2.name = "hitesh" // pass by reference (original)

console.log(obj1.name);


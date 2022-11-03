//  iterators are the source that call by next into next.

var str = "hello";
var world = ["w", "o","r", "l", "d"];

var it1 = str[Symbol.iterator]();
var it2 = world[Symbol.iterator]();

console.log(it1); // string iterator
console.log(it2); // array iteraator

// var a = ;
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next()); // when it is undefined it done :true
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());


// iterators doesnt not go back .. . just like we use next.
